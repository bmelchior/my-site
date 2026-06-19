import Link from "next/link";
import type { ReactNode } from "react";

type TextLinkProps = {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
};

export default function TextLink({
  children,
  href,
  external = false,
  className = "",
}: TextLinkProps) {
  const classes = `link-editorial ${className}`;

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
