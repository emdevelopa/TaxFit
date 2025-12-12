import React from 'react';
import { Attorney } from '@/types';
import AttorneyCard from './AttorneyCard';
import { LoadingSpinner } from '@/components/common/Spinner';
import EmptyState from '@/components/common/EmptyState';

interface AttorneyGridProps {
  attorneys: Attorney[];
  isLoading?: boolean;
  emptyMessage?: string;
}

export default function AttorneyGrid({ 
  attorneys, 
  isLoading = false,
  emptyMessage = 'No attorneys found. Try adjusting your filters.',
}: AttorneyGridProps) {
  if (isLoading) {
    return <LoadingSpinner message="Loading attorneys..." />;
  }

  if (!attorneys || attorneys.length === 0) {
    return (
      <EmptyState
        icon="search"
        title="No Attorneys Found"
        description={emptyMessage}
        action={{
          label: 'Clear Filters',
          onClick: () => window.location.href = '/find-attorney',
        }}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {attorneys.map((attorney) => (
        <AttorneyCard key={attorney.id} attorney={attorney} />
      ))}
    </div>
  );
}