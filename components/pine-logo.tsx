import Image from "next/image"
import { cn } from "@/lib/utils"

type PineLogoProps = {
  className?: string
  alt?: string
}

export function PineLogo({ className, alt = "Pine Collective" }: PineLogoProps) {
  return (
    <span className={cn("relative inline-block h-6 w-6", className)}>
      <Image
        src="/pine-logo.png"
        alt={alt}
        fill
        sizes="48px"
        className="object-contain"
        priority
      />
    </span>
  )
}
