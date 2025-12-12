import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/utils/helpers';

interface RatingProps {
  value: number;
  onChange?: (value: number) => void;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  readonly?: boolean;
  showValue?: boolean;
  className?: string;
}

export default function Rating({
  value,
  onChange,
  max = 5,
  size = 'md',
  readonly = false,
  showValue = false,
  className,
}: RatingProps) {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const handleClick = (rating: number) => {
    if (!readonly && onChange) {
      onChange(rating);
    }
  };

  const handleMouseEnter = (rating: number) => {
    if (!readonly) {
      setHoverValue(rating);
    }
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {Array.from({ length: max }, (_, index) => {
        const rating = index + 1;
        const isFilled = hoverValue ? rating <= hoverValue : rating <= value;
        const isPartial = !hoverValue && rating === Math.ceil(value) && value % 1 !== 0;

        return (
          <button
            key={rating}
            type="button"
            onClick={() => handleClick(rating)}
            onMouseEnter={() => handleMouseEnter(rating)}
            onMouseLeave={handleMouseLeave}
            disabled={readonly}
            className={cn(
              'transition-colors',
              !readonly && 'cursor-pointer hover:scale-110',
              readonly && 'cursor-default'
            )}
            aria-label={`Rate ${rating} out of ${max}`}
          >
            <Star
              className={cn(
                sizes[size],
                isFilled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300',
                isPartial && 'text-yellow-400 fill-yellow-400'
              )}
              style={
                isPartial
                  ? {
                      clipPath: `inset(0 ${100 - (value % 1) * 100}% 0 0)`,
                    }
                  : undefined
              }
            />
          </button>
        );
      })}
      {showValue && (
        <span className="ml-2 text-sm font-medium text-gray-700">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
}

// Read-only rating display with count
interface RatingDisplayProps {
  value: number;
  count?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function RatingDisplay({
  value,
  count,
  max = 5,
  size = 'md',
  className,
}: RatingDisplayProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <Rating value={value} max={max} size={size} readonly showValue />
      {count !== undefined && (
        <span className="text-sm text-gray-500">({count})</span>
      )}
    </div>
  );
}