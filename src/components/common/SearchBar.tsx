import React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/utils/helpers';

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  allowClear?: boolean;
}

export default function SearchBar({ 
  value: controlledValue,
  onChange,
  onSearch,
  placeholder = 'Search...',
  className,
  size = 'md',
  showIcon = true,
  allowClear = true,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = React.useState('');
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(value);
  };

  const handleClear = () => {
    if (controlledValue === undefined) {
      setInternalValue('');
    }
    onChange?.('');
    onSearch?.('');
  };

  return (
    <form onSubmit={handleSubmit} className={cn('relative', className)}>
      {showIcon && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Search className={iconSizes[size]} />
        </div>
      )}
      
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(
          'w-full border border-gray-300 rounded-lg transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
          'placeholder:text-gray-400',
          sizes[size],
          showIcon && 'pl-11',
          allowClear && value && 'pr-11'
        )}
      />
      
      {allowClear && value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Clear search"
        >
          <X className={iconSizes[size]} />
        </button>
      )}
    </form>
  );
}