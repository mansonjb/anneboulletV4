import Image from "next/image";
import { src, type Photo } from "@/data/projets";

export function Logo() {
  return (
    <a className="logo" href="/" aria-label="Anne Boullet Studio, accueil">
      <span className="logo-name">Anne Boullet</span>
      <sup className="logo-studio">Studio</sup>
    </a>
  );
}

export function Arrow({ size = 16, back = false }: { size?: number; back?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={back ? "M13 8H3M7 4L3 8l4 4" : "M3 8h10M9 4l4 4-4 4"} />
    </svg>
  );
}

export function Ph({
  photo,
  alt,
  ratio,
  className = "r-lg",
  sizes = "(max-width: 960px) 100vw, 1160px",
  preload = false,
}: {
  photo: Photo;
  alt: string;
  ratio?: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    <div className={`ph ${className}`} style={{ aspectRatio: ratio ?? `${photo.w} / ${photo.h}` }}>
      <Image src={src(photo)} alt={alt} fill sizes={sizes} preload={preload} />
    </div>
  );
}
