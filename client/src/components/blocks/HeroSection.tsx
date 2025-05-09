import Link from "next/link";
import { StrapiImage } from"../StrapiImage";
import type { HeroSectionProps } from "@/types";

export function HeroSection({
  theme,
  cta,
  image,
  publishedAt,
  darken = false,
  title,
  description,
}: Readonly<HeroSectionProps & { title?: string; description?: string }>) {
  return (
    <section className="hero">
      <div className="hero__background">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "No alternative text provided"}
          className="hero__background-image"
          width={1920}
          height={1080}
        />
        {darken && <div className="hero__background__overlay"></div>}
      </div>

      <div className="hero__content">
        {title && <h4 className="hero__title">{title}</h4>}
        {description && <p className="hero__description">{description}</p>}

        {cta && (
          <div className="hero__cta">
            <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
              <button className={`btn btn--outline-white ${theme ? `btn--${theme}` : ""}`}>
                {cta.text}
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
