import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function Logo({
  href = "/",
  size = "md",
  showText = false,
  className = "",
}: LogoProps) {
  const sizeMap = {
    sm: { width: 100, height: 46, containerHeight: "h-8" },
    md: { width: 120, height: 55, containerHeight: "h-10" },
    lg: { width: 150, height: 69, containerHeight: "h-12" },
  };

  const logoSize = sizeMap[size];

  const logoImage = (
    <Image
      src="/Django-Rwanda-official-logo.png"
      alt="Django Rwanda Logo"
      width={logoSize.width}
      height={logoSize.height}
      className={`${logoSize.containerHeight} w-auto rounded-lg ${className}`}
      priority
    />
  );

  if (!showText) {
    return (
      <Link href={href} className="flex items-center">
        {logoImage}
      </Link>
    );
  }

  return (
    <Link href={href} className="flex items-center gap-2">
      {logoImage}
      <span className="hidden font-bold text-foreground sm:inline-block">
        Django Rwanda
      </span>
    </Link>
  );
}
