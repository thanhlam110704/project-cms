"use client";

import type { LinkProps, LogoProps, ToolItemProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StrapiImage } from "../StrapiImage";

interface HeaderProps {
  data: {
    logo: LogoProps[]; 
    navigation: LinkProps[];
    tool: ToolItemProps[];
  };
}

export function Header({ data }: HeaderProps) {
  if (!data) return null;

  const pathname = usePathname();

  const logoItem = Array.isArray(data.logo) ? data.logo[0] : data.logo;

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link href="/" className="header-logo">
          {logoItem?.image && (
            <StrapiImage
              src={logoItem.image.url}
              alt={logoItem.logoText}
              className="logo-img"
              width={40}
              height={40}
            />
          )}
         
        </Link>

        {/* Navigation */}
        <nav className="header-nav">
          {data.navigation?.map((nav) => (
            <Link
              key={nav.id}
              href={nav.href}
              target={nav.isExternal ? "_blank" : "_self"}
              className={`nav-link ${pathname === nav.href ? "active" : ""}`}
            >
              {nav.text}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
