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
          <span className="logo-text">{logoItem?.logoText}</span>
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

        {/* Tools */}
        <div className="header-tools">
          {data.tool?.map((item) => (
            <Link key={item.id} href={item.href} className="tool-item">
              <i className={item.iconClass}></i>
              {item.iconClass.includes("fa-bag-shopping") && (
                <span className="tool-badge">0</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
