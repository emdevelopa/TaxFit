

import { useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';
import type { AuditLogResult } from '@/types/admin-types';

interface AuditFilters {
  action?: string;
  resourceType?: string;
  page: number;
  limit: number;
}

// Fetch Audit Log List Hook
export function useAdminAuditLog(filters: AuditFilters) {
    return useQuery<AuditLogResult>({
        queryKey: ['adminAuditLogs', filters],
        queryFn: async () => {
            const { data } = await apiClient.get('/admin/system/audit', {
                params: filters,
            });
            return data.data; 
        },
        staleTime: 1000 * 60, 
    });
}