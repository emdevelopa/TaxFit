// User types
export type UserType = 'individual' | 'sme' | 'company' | 'attorney';

export interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  userType: UserType;
  isEmailVerified: boolean;
  isPremium: boolean;
  avatarUrl?: string;
  referralCode?: string;
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

export interface AttorneyProfile {
  firmName: string;
  yearsOfExperience: number;
  professionalLicenseNumber: string;
  hourlyRate?: number;
  specializations?: string[];
  bio?: string;
  rating?: number;
  totalCases?: number;
}

export interface Attorney extends User {
  attorney: AttorneyProfile;
}

// Auth types
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    tokens: AuthTokens;
    requiresEmailVerification?: boolean;
  };
}

export interface LoginResponse extends AuthResponse {}

export interface OtpResponse {
  success: boolean;
  message: string;
}

export interface ProfileResponse {
  success: boolean;
  data: {
    user: User;
  };
}

// Attorney Search types
export interface AttorneySearchFilters {
  searchQuery?: string;
  specialization?: string;
  minExperience?: number;
  maxRate?: number;
  location?: string;
  rating?: number;
}

export interface AttorneySearchResult {
  attorneys: Attorney[];
  total: number;
  hasMore: boolean;
}