import type { Metadata } from "next";

const SITE_NAME = "Brandon Melchior";
const OG_IMAGE = "/og-image.png";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const fullTitle =
    title === SITE_NAME ? SITE_NAME : `${title} — ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      url: path,
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
