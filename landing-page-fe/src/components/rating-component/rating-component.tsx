import { Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { RatingProps } from "@/props/rating-component-props";

export const RatingComponent = ({ onChange, value = 0 }: RatingProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const max = 5;

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: max }).map((_, i) => {
        const ratingValue = i + 1;
        const filled = hovered
          ? ratingValue <= hovered
          : ratingValue <= value;

        return (
          <Star
            key={i}
            className={cn(
              "w-6 h-6 cursor-pointer transition-colors duration-150",
              filled
                ? "fill-yellow-400 text-yellow-400"
                : "fill-none text-gray-300 hover:text-yellow-400"
            )}
            onMouseEnter={() => setHovered(ratingValue)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onChange?.(ratingValue)} // ✅ FIXED HERE
          />
        );
      })}
    </div>
  );
};
