export interface AttorneyAvailability {
  workingDays: string[];
  workingHours: {
    start: string;
    end: string;
  };
  timezone: string;
}

export interface AttorneyCertification {
  _id: string;
  name: string;
  issuingOrganization: string;
  yearObtained: number;
}

export interface AttorneyEducation {
  _id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: number;
}

export interface AttorneyProfile {
  _id: string;
  firmName: string;
  yearsOfExperience: number;
  specializations: string[];
  areasOfPractice: string[];
  hourlyRate: number;
  consultationFee?: number;
  minConsultationDuration: number;
  maxConsultationDuration: number;
  professionalLicenseNumber: string;
  availability: AttorneyAvailability;
  averageRating: number;
  totalReviews: number;
  completedConsultations: number;
  responseRate: number;
  averageResponseTime: number | null;
  totalEarnings: number;
  pendingWithdrawal: number;
  walletBalance: number;

  isProfileComplete: boolean;
  isAcceptingClients: boolean;
  isVerifiedAttorney: boolean;

  bookingBuffer: number;
  advanceBookingDays: number;
  profileViews: number;

  certifications: AttorneyCertification[];
  education: AttorneyEducation[];
  languages: any[];

  bio?: string;

  linkedinProfile?: string;
  professionalEmail?: string;
  professionalPhone?: string;
  website?: string;

  verificationDate?: string;
  verifiedByAdmin?: string;

  createdAt: string;
  updatedAt: string;
}


export type UserType = 'individual' | 'attorney' | 'business' | 'admin';

export interface AttorneySearchResultItem {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  userType: UserType;
  avatarUrl: string | null;
  isPremium: boolean;
  createdAt: string;
  attorneyProfile: AttorneyProfile;
}

export interface GetAttorneysResponse {
  success: boolean;
  count: number;
  data: AttorneySearchResultItem[];
}