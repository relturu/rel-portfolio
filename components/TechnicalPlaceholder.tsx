import Image from "next/image";

type AspectRatio = "4:3" | "16:9" | "3:2" | "1:1";

const aspectClass: Record<AspectRatio, string> = {
  "4:3": "aspect-[4/3]",
  "16:9": "aspect-[16/9]",
  "3:2": "aspect-[3/2]",
  "1:1": "aspect-square",
};

/**
 * Project media: renders the image when one exists, otherwise the
 * crosshatch placeholder with registration marks.
 */
export function TechnicalPlaceholder({
  label,
  aspectRatio = "4:3",
  sublabel,
  image,
  alt,
  className = "",
}: {
  label: string;
  aspectRatio?: AspectRatio;
  sublabel?: string;
  image?: string;
  alt?: string;
  className?: string;
}) {
  if (image) {
    return (
      <div className={`relative w-full ${aspectClass[aspectRatio]} bg-surface-muted border border-line overflow-hidden ${className}`}>
        <Image src={image} alt={alt ?? label} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={`relative w-full ${aspectClass[aspectRatio]} bg-surface-muted border border-line overflow-hidden flex flex-col items-center justify-center p-4 select-none ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none stroke-line opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden
      >
        <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="100%" y1="0" x2="0" y2="100%" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-muted opacity-60" aria-hidden />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-muted opacity-60" aria-hidden />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-muted opacity-60" aria-hidden />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-muted opacity-60" aria-hidden />

      <div className="relative z-10 bg-surface/90 backdrop-blur-xs px-3 py-1.5 border border-line rounded-tag shadow-xs max-w-[90%] text-center">
        <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-ink block uppercase">
          {label}
        </span>
        {sublabel && (
          <span className="font-mono text-[9px] sm:text-[10px] text-muted block mt-0.5 tracking-tight">{sublabel}</span>
        )}
      </div>

      <div className="absolute bottom-2 right-3 font-mono text-[9px] text-muted opacity-50 uppercase tracking-widest" aria-hidden>
        {aspectRatio}
      </div>
    </div>
  );
}
