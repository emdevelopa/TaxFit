import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/utils/helpers';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  description?: string;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, className, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(props.checked || false);

    React.useEffect(() => {
      if (props.checked !== undefined) {
        setIsChecked(props.checked);
      }
    }, [props.checked]);

    return (
      <div className="flex flex-col">
        <label className="flex items-start cursor-pointer group">
          <div className="relative flex items-center">
            <input
              ref={ref}
              type="checkbox"
              className="sr-only"
              onChange={(e) => {
                setIsChecked(e.target.checked);
                props.onChange?.(e);
              }}
              {...props}
            />
            <div
              className={cn(
                'w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200',
                isChecked
                  ? 'bg-primary-500 border-primary-500'
                  : 'bg-white border-gray-300 group-hover:border-primary-500',
                props.disabled && 'opacity-50 cursor-not-allowed',
                error && 'border-red-500',
                className
              )}
            >
              {isChecked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
            </div>
          </div>

          {(label || description) && (
            <div className="ml-3 flex-1">
              {label && (
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {label}
                </span>
              )}
              {description && (
                <p className="text-sm text-gray-500 mt-0.5">{description}</p>
              )}
            </div>
          )}
        </label>

        {error && <p className="mt-1.5 text-sm text-red-500 ml-8">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;