import React from 'react';
import { FileQuestion, Search, Inbox } from 'lucide-react';
import Button from './Button';
import { cn } from '@/utils/helpers';

interface EmptyStateProps {
  icon?: 'search' | 'inbox' | 'question' | React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export default function EmptyState({ 
  icon = 'inbox',
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      return icon;
    }

    const iconMap = {
      search: Search,
      inbox: Inbox,
      question: FileQuestion,
    };

    const IconComponent = iconMap[icon as keyof typeof iconMap] || Inbox;
    return <IconComponent className="w-16 h-16 text-gray-400" />;
  };

  return (
    <div className={cn('flex flex-col items-center justify-center py-12 px-4', className)}>
      <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
        {renderIcon()}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-500 text-center max-w-md mb-6">
          {description}
        </p>
      )}
      {action && (
        <Button onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}