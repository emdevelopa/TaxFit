import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';
import { toast } from 'react-hot-toast';
import { handleApiError } from '@/lib/api-client'; 

import type { Attorney, AttorneySearchFilters, AuthResponse } from '@/types'; 

interface SubmitVerificationInput {
    hourlyRate: number;
    consultationFee: number;
    minConsultationDuration: number;
    maxConsultationDuration: number;
    specializations: string[];
    bio: string;
}

interface VerificationStatusResponse {
    success: boolean;
    data: {
        verificationStatus: 'draft' | 'pending' | 'approved' | 'rejected';
        submittedForVerificationAt?: string;
        rejectionReason?: string;
        rejectionDetails?: string;
        missingRequirements?: string[]; 
    };
}

// ✅ FIXED: Match actual API response structure
interface AdminVerificationListResponse {
    success: boolean;
    data: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
        attorneys: Array<{
            id?: string;            // Some endpoints use 'id'
            _id?: string;           // Some endpoints use '_id'
            fullName?: string;      // Direct on list endpoint
            email?: string;         // Direct on list endpoint
            phoneNumber?: string;   // Direct on list endpoint
            user?: {                // Nested on details endpoint
                fullName: string;
                email: string;
                phoneNumber: string;
            };
            firmName: string;
            verificationStatus: string;
            submittedForVerificationAt?: string;
            isVerifiedAttorney: boolean;
            professionalDocuments: Array<{
                documentType: string;
                documentUrl: string;
                uploadedAt: string;
            }>;
            hourlyRate: number;
            yearsOfExperience: number;
        }>;
    };
}

interface AdminReviewInput {
    status: 'approved' | 'rejected';
    adminNotes?: string;
    rejectionReason?: string;
    rejectionDetails?: string;
}

// Details endpoint response with nested user object
interface AttorneyDetailsResponse {
    success: boolean;
    data: {
        _id: string;
        user: {
            fullName: string;
            email: string;
            phoneNumber: string;
        };
        firmName: string;
        verificationStatus: string;
        submittedForVerificationAt?: string;
        isVerifiedAttorney: boolean;
        professionalDocuments: Array<{
            documentType: string;
            documentUrl: string;
            uploadedAt: string;
            verified?: boolean;
        }>;
        hourlyRate: number;
        yearsOfExperience: number;
        bio?: string;
        specializations?: string[];
        location?: string;
        state?: string;
    };
}

// ✅ FIXED: Properly handle API response structure with better error handling
export function useAdminVerificationList(filters: AttorneySearchFilters & { 
    page: number; 
    limit: number; 
    status?: string; 
    sortBy?: string; 
    sortOrder?: string; 
    search?: string; 
}) {
    // Remove empty search parameter to avoid backend issues
    const cleanFilters = { ...filters };
    if (cleanFilters.search === '') {
        delete cleanFilters.search;
    }
    
    // If status is 'all', remove it from params (backend might not handle 'all')
    if (cleanFilters.status === 'all') {
        delete cleanFilters.status;
    }
    
    return useQuery<AdminVerificationListResponse['data'], any>({
        queryKey: ['adminVerificationList', cleanFilters],
        queryFn: async () => {
            try {
                const response = await apiClient.get<AdminVerificationListResponse>(
                    '/admin/attorneys/verification', 
                    {
                        params: cleanFilters,
                    }
                );
                
                console.log('✅ Attorney verification list loaded:', response.data);
                console.log('📋 First attorney structure:', response.data.data.attorneys[0]);
                console.log('🔑 Attorney ID field:', response.data.data.attorneys[0]?._id || response.data.data.attorneys[0]?.id);
                
                return response.data.data;
            } catch (error: any) {
                console.error('❌ Failed to load attorney verification list:', error);
                console.error('Request params:', cleanFilters);
                console.error('Error details:', error.response?.data);
                throw error;
            }
        },
        staleTime: 60 * 1000,
        retry: false, // Don't retry on 500 errors
        refetchOnWindowFocus: false, // Don't refetch on window focus
    });
}

export function useSubmitVerification() {
    const queryClient = useQueryClient();
    
    return useMutation<AuthResponse, unknown, SubmitVerificationInput>({
        mutationFn: async (data) => {
            const response = await apiClient.post<AuthResponse>('/attorney/submit-verification', data);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['attorneyVerificationStatus'] });
            toast.success('Verification request submitted!');
        },
        onError: (error) => {
            toast.error(handleApiError(error) ?? 'Verification submission failed.');
        },
    });
}

export function useUploadDocument() {
    const queryClient = useQueryClient();
    
    return useMutation<AuthResponse, unknown, FormData>({
        mutationFn: async (formData) => {
            const response = await apiClient.post<AuthResponse>('/attorney/upload-document', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['attorneyVerificationStatus'] });
            toast.success('Document uploaded successfully!');
        },
        onError: (error) => {
            toast.error(handleApiError(error) ?? 'Document upload failed.');
        },
    });
}

export function useAdminAttorneyDetails(attorneyId: string, options?: { enabled?: boolean }) {
    const isEnabled = options?.enabled !== false && !!attorneyId;
    
    return useQuery<AttorneyDetailsResponse['data'], unknown>({
        queryKey: ['attorneyDetails', attorneyId],
        queryFn: async () => {
            try {
                console.log('🔍 Fetching attorney details for ID:', attorneyId);
                console.log('📡 Full endpoint URL:', `/admin/attorneys/${attorneyId}/verification`);
                
                const response = await apiClient.get<AttorneyDetailsResponse>(
                    `/admin/attorneys/${attorneyId}/verification`
                );
                
                console.log('✅ Attorney details loaded:', response.data);
                return response.data.data;
            } catch (error: any) {
                console.error('❌ Failed to load attorney details');
                console.error('Attorney ID:', attorneyId);
                console.error('Error status:', error.response?.status);
                console.error('Error message:', error.response?.data?.message);
                console.error('Full error response:', error.response?.data);
                
                // If 404, the attorney might not exist or endpoint is wrong
                if (error.response?.status === 404) {
                    console.error('🔴 404 Error - Possible reasons:');
                    console.error('  1. Attorney with this ID does not exist in database');
                    console.error('  2. Attorney has not submitted for verification yet');
                    console.error('  3. Endpoint path is incorrect (check backend routes)');
                    console.error('  4. Attorney ID format is incorrect');
                }
                
                throw error;
            }
        },
        enabled: isEnabled,
        staleTime: 5 * 60 * 1000,
        retry: false, // Don't retry 404s
    });
}

export function useReviewVerification() {
    const queryClient = useQueryClient();

    return useMutation<AuthResponse, unknown, { attorneyId: string, data: AdminReviewInput }>({
        mutationFn: async ({ attorneyId, data }) => {
            try {
                console.log('🎯 Submitting review for attorney:', attorneyId);
                console.log('📝 Review data:', data);
                
                // ✅ FIXED: Correct endpoint path with /review
                const response = await apiClient.put<AuthResponse>(
                    `/admin/attorneys/${attorneyId}/verification/review`, 
                    data
                );
                
                console.log('✅ Review submitted successfully:', response.data);
                return response.data;
            } catch (error: any) {
                console.error('❌ Failed to submit review:', error);
                console.error('Attorney ID:', attorneyId);
                console.error('Review data:', data);
                console.error('Error details:', error.response?.data);
                throw error;
            }
        },
        onSuccess: (data, variables) => {
            toast.success(data.message || 'Verification status updated successfully!');
            queryClient.invalidateQueries({ queryKey: ['adminVerificationList'] });
            queryClient.invalidateQueries({ queryKey: ['attorneyDetails', variables.attorneyId] });
        },
        onError: (error) => {
            toast.error(handleApiError(error) ?? 'Failed to process review.');
        },
    });
}

export function useVerificationStatus() {
    return useQuery<VerificationStatusResponse['data'], unknown>({
        queryKey: ['attorneyVerificationStatus'],
        queryFn: async () => {
            const response = await apiClient.get<VerificationStatusResponse>('/attorney/verification-status');
            return response.data.data;
        },
        staleTime: 30 * 1000,
    });
}