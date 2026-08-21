import Image from "next/image";
import { getFlagUrl } from "@/lib/data";

interface CountryFlagProps {
  iso2: string;
  alt: string;
  size?: 40 | 80;
  className?: string;
}

export default function CountryFlag({
  iso2,
  alt,
  size = 40,
  className = "",
}: CountryFlagProps) {
  const dim = size === 40 ? 40 : 80;

  return (
    <span
      className={`relative inline-block overflow-hidden rounded-md border border-night/10 shadow-sm dark:border-white/10 ${className}`}
      style={{ width: dim * 1.5, height: dim }}
    >
      <Image
        src={getFlagUrl(iso2, size)}
        alt={alt}
        fill
        className="object-cover"
        sizes={`${dim * 1.5}px`}
      />
    </span>
  );
}
