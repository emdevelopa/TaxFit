import React from 'react';
import { User } from 'lucide-react';
import { cn } from '@/utils/helpers';
import { getInitials } from '@/utils/helpers';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  status?: 'online' | 'offline' | 'away' | 'busy';
  className?: string;
}

export default function Avatar({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  status,
  className,
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false);

  const sizes = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
  };

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
  };

  const statusSizes = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4',
  };

  const shapeClasses = shape === 'circle' ? 'rounded-full' : 'rounded-lg';

  const initials = name ? getInitials(name) : null;

  return (
    <div className={cn('relative inline-block', sizes[size], className)}>
      <div
        className={cn(
          'flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500',
          sizes[size],
          shapeClasses
        )}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : initials ? (
          <span className="font-semibold text-white select-none">{initials}</span>
        ) : (
          <User className="w-1/2 h-1/2 text-white" />
        )}
      </div>

      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full border-2 border-white',
            statusColors[status],
            statusSizes[size]
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
}