#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public", "images", "photography");

const MAX_EDGE = 2400;
const JPEG_QUALITY = 85;
const SUPPORTED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".tif",
  ".tiff",
]);

function parseArgs(argv) {
  const args = { category: null, input: null };

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--category") {
      args.category = argv[index + 1] ?? null;
      index += 1;
    } else if (value === "--input") {
      args.input = argv[index + 1] ?? null;
      index += 1;
    }
  }

  return args;
}

function toAltText(filename) {
  return path
    .basename(filename, path.extname(filename))
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function toOutputName(filename) {
  return path
    .basename(filename, path.extname(filename))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function main() {
  const { category, input } = parseArgs(process.argv.slice(2));

  if (!category || !input) {
    console.error(
      "Usage: node scripts/compress-photography.mjs --category <slug> --input <folder>",
    );
    process.exit(1);
  }

  const inputDir = path.resolve(input);
  const outputDir = path.join(PUBLIC_DIR, category);

  await fs.mkdir(outputDir, { recursive: true });

  const entries = await fs.readdir(inputDir);
  const imageFiles = entries
    .filter((entry) =>
      SUPPORTED_EXTENSIONS.has(path.extname(entry).toLowerCase()),
    )
    .sort((a, b) => a.localeCompare(b));

  if (imageFiles.length === 0) {
    console.error(`No supported images found in ${inputDir}`);
    process.exit(1);
  }

  const snippets = [];

  for (const filename of imageFiles) {
    const inputPath = path.join(inputDir, filename);
    const outputBase = toOutputName(filename);
    const outputFilename = `${outputBase}.jpg`;
    const outputPath = path.join(outputDir, outputFilename);

    const image = sharp(inputPath, { failOn: "none" }).rotate();
    const metadata = await image.metadata();

    const resized = image.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    });

    await resized.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(outputPath);

    const outputMeta = await sharp(outputPath).metadata();
    const publicSrc = `/images/photography/${category}/${outputFilename}`;
    const alt = toAltText(filename);

    snippets.push({
      src: publicSrc,
      alt,
      width: outputMeta.width ?? metadata.width,
      height: outputMeta.height ?? metadata.height,
    });

    console.log(`Compressed ${filename} -> ${publicSrc}`);
  }

  console.log("\nPaste into lib/data/photography.ts:\n");
  console.log("images: [");
  for (const item of snippets) {
    console.log(
      `  { src: "${item.src}", alt: "${item.alt}", width: ${item.width}, height: ${item.height} },`,
    );
  }
  console.log("],");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
