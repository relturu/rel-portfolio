import type { Hobby } from "@/content/types";
import { TechnicalPlaceholder } from "./TechnicalPlaceholder";

export function HobbyGrid({ hobbies }: { hobbies: Hobby[] }) {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {hobbies.map((thing) => (
        <li key={thing.id} className="relative rounded-[12px] overflow-hidden">
          <TechnicalPlaceholder label="[PHOTO]" image={thing.image} alt={thing.title} aspectRatio="4:3" />
          {/* Fixed black/white (not theme tokens): the caption sits on a photo in both themes. */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" aria-hidden />
          <span className="absolute left-3 bottom-2.5 sm:left-4 sm:bottom-3 font-mono text-xs sm:text-sm font-semibold text-white">
            {thing.title}
          </span>
        </li>
      ))}
    </ul>
  );
}
