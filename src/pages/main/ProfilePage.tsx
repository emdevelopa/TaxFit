import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useAuthStore } from '@/store/auth-store';
import { useProfile, useUpdateProfile, useUploadAvatar } from '@/hooks/auth/use-auth';
import Layout from '@/components/layout/Layout';
import ProfileCard from '@/components/profile/ProfileCard';
import AccountInfoCard from '@/components/profile/AccountInfoCard';
import ProfileForm from '@/components/profile/ProfileForm';
// Assuming '@/types/index' contains ProfileUpdateInput and EmploymentStatus
import type { ProfileUpdateInput, EmploymentStatus } from '@/types/index';

export default function ProfilePage() {
  const { user } = useAuthStore();
  const { data: profile, isLoading: isLoadingProfile } = useProfile();
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();
  const { mutate: uploadAvatar, isPending: isUploading } = useUploadAvatar();

  const [isEditing, setIsEditing] = useState(false);
  
  // Initial state uses data from global store (user)
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    phoneNumber: user?.phoneNumber || '',
    employmentStatus: '',
    occupation: '',
    dateOfBirth: '',
    address: '',
  });

  // ** 1. Data Hydration (useEffect) **
  // Syncs local form state with fetched profile data
  useEffect(() => {
    if (profile?.user) {
      // Use nullish coalescing (??) for defensive data retrieval
      const individual = profile.individualProfile;

      setFormData({
        fullName: profile.user.fullName || '',
        phoneNumber: profile.user.phoneNumber || '',
        // Use ?? '' for safety, matching initial state type
        employmentStatus: individual?.employmentStatus ?? '', 
        occupation: individual?.occupation ?? '',
        dateOfBirth: individual?.dateOfBirth ?? '',
        address: individual?.address ?? '',
      });
    }
  }, [profile]);


  // ** 2. Image Upload Handler **
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Image size must be less than 5MB');
      return;
    }

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    uploadAvatar(file, {
      onSuccess: () => {
        console.log('✅ Avatar uploaded successfully');
      },
      onError: (error: any) => {
        const message = error.response?.data?.message || error.message || 'Failed to upload avatar';
        alert(message);
      },
    });
  };

  // ** 3. Form Submission Handler (FIXED LOGIC AND TYPING) **
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatePayload: ProfileUpdateInput = {
        fullName: formData.fullName || undefined,
        phoneNumber: formData.phoneNumber || undefined,
        employmentStatus: (formData.employmentStatus || undefined) as EmploymentStatus | undefined,
        occupation: formData.occupation || undefined,
        dateOfBirth: formData.dateOfBirth || undefined,
        address: formData.address || undefined,
    };

    updateProfile(updatePayload, {
      onSuccess: () => {
        console.log('✅ Profile updated successfully');
        setIsEditing(false);
      },
      onError: (error: any) => {
        const message = error.response?.data?.message || error.message || 'Failed to update profile';
        alert(message);
      },
    });
  };
  
  // ** 4. Input Change Handler **
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // ** 5. Cancel Handler **
  const handleCancel = () => {
    setIsEditing(false);
    // Reset form to original values from profile data
    if (profile?.user) {
      const individual = profile.individualProfile;
      setFormData({
        fullName: profile.user.fullName || '',
        phoneNumber: profile.user.phoneNumber || '',
        employmentStatus: individual?.employmentStatus ?? '',
        occupation: individual?.occupation ?? '',
        dateOfBirth: individual?.dateOfBirth ?? '',
        address: individual?.address ?? '',
      });
    }
  };

  // --- Render Logic ---

  if (isLoadingProfile) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
        </div>
      </Layout>
    );
  }

  const userData = profile?.user || user;
  const individualProfile = profile?.individualProfile;

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile</h1>
            <p className="text-gray-600">Manage your personal information and preferences</p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Overview */}
            <div className="lg:col-span-1">
              <ProfileCard
                user={userData}
                isUploading={isUploading}
                onImageUpload={handleImageUpload}
              />

              <AccountInfoCard user={userData} className="mt-6" />
            </div>

            {/* Right Column - Editable Form */}
            <div className="lg:col-span-2">
              <ProfileForm
                user={userData}
                individualProfile={individualProfile}
                isEditing={isEditing}
                isUpdating={isUpdating}
                onEdit={() => setIsEditing(true)}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                formData={formData}
                onInputChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}