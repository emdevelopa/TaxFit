// =============================================================
// src/types/index.ts
// AttorneyProfile and related types come from ./attorney.ts
// =============================================================

// ✅ Import the DETAILED AttorneyProfile from attorney.ts
import type { 
  AttorneyProfile as DetailedAttorneyProfile,
  AttorneySearchResultItem as DetailedAttorneySearchResultItem,
} from './attorney';

// ✅ Re-export all attorney types so imports from '@/types' still work
export type {
  AttorneyAvailability,
  AttorneyCertification,
  AttorneyEducation,
  AttorneySearchResultItem,
  GetAttorneysResponse,
} from './attorney';

// ✅ Re-export AttorneyProfile as the DETAILED version
export type AttorneyProfile = DetailedAttorneyProfile;

// --- Core Types ---

export type UserType = 'individual' | 'attorney' | 'business' | 'admin' | 'fitadmin';
export type EmploymentStatus = 'employed' | 'self-employed' | 'unemployed' | 'student' | 'retired';
export type ConsultationMode = 'In-Person' | 'Video Call' | 'Phone Call' | 'chat';

export interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  userType: UserType;
  isEmailVerified: boolean;
  isPremium: boolean;
  avatarUrl?: string | null;
  referralCode: string;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
}

// --- Non-Attorney Profile Types ---

export interface IndividualProfile {
  employmentStatus: EmploymentStatus;
  occupation: string;
  dateOfBirth?: string;
  address?: string;
  taxId?: string;
}

export interface BusinessProfile {
  businessName: string;
  registrationNumber: string;
  businessType: string;
  industry: string;
  annualRevenue?: number;
  numberOfEmployees?: number;
}

// --- Auth & API Response Types ---

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponseData {
  user: User;
  attorney?: AttorneyProfile;
  individualProfile?: IndividualProfile;
  businessProfile?: BusinessProfile;
  token?: string;
  tokens?: AuthTokens;
  requiresEmailVerification?: boolean;
  bookingNumber?: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  data: AuthResponseData;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  data: AuthResponseData;
}

export interface ProfileResponse {
  success: boolean;
  data: AuthResponseData;
}

export interface OtpResponse {
  success: boolean;
  message: string;
}

// --- Input Types ---

export interface RegisterInput {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  userType: UserType;
  acceptTerms: boolean;
  referralCode?: string;
  // Attorney-specific
  firmName?: string;
  yearsOfExperience?: number;
  hourlyRate?: number;
  professionalLicenseNumber?: string;
  // Individual-specific
  employmentStatus?: EmploymentStatus;
  occupation?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface ProfileUpdateInput {
  fullName?: string;
  phoneNumber?: string;
  avatarUrl?: string;
  // Individual-specific
  employmentStatus?: EmploymentStatus;
  occupation?: string;
  dateOfBirth?: string;
  address?: string;
  taxId?: string;
  // Attorney-specific
  firmName?: string;
  yearsOfExperience?: number;
  hourlyRate?: number;
  bio?: string;
  specializations?: string[];
  education?: {
    institution: string;
    degree: string;
    year: number;
  }[];
  certifications?: {
    name: string;
    issuer: string;
    year: number;
  }[];
}

// --- Attorney Search Types ---

export type Attorney = DetailedAttorneySearchResultItem;

export interface AttorneySearchFilters {
  searchQuery?: string;
  specialization?: string;
  minExperience?: number;
  maxRate?: number;
  location?: string;
  rating?: number;
  page: number;
  limit: number;
  status?: string;
  search?: string;
}

export interface AttorneySearchResult {
  attorneys: Attorney[];
  total: number;
  hasMore: boolean;
  limit: number;
}

// --- Payout Types ---

export interface PayoutRequest {
  payoutId: string;
  attorneyId: string;
  attorneyName: string;
  amount: number;
  status: 'pending' | 'processed' | 'failed';
  requestedAt: string;
  processorRef?: string;
}

export interface PayoutListResult {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  payouts: PayoutRequest[];
}

export interface PayoutFilters {
  status?: 'pending' | 'processed' | 'failed' | 'all';
  page: number;
  limit: number;
  search?: string;
}

// --- Generic API Types ---

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: string[] | { [key: string]: string };
}

export interface ApiError {
  response?: {
    data?: ApiErrorResponse;
    status?: number;
    statusText?: string;
  };
  message: string;
  isAxiosError?: boolean;
}

export interface PaginatedResponse {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
}

export interface ApiResponse<T> {
  message: string;
  status: number;
  data: T;
}

// --- Legacy aliases ---
export type IUserType = UserType;

export interface ITaxBenefit {
  id: string;
  title: string;
  description: string;
  amount: number;
  category: string;
}