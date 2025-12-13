import React, { useState } from 'react';
import { Camera, Save, Loader2, AlertCircle } from 'lucide-react';
import { useAuthStore } from '@/store/auth-store';
import { useUpdateProfile, useUploadAvatar } from '@/hooks/auth/use-auth';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Avatar from '@/components/common/Avatar';
import Select from '@/components/common/Select';

export default function ProfileSettings() {
  const { user } = useAuthStore();
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();
  const { mutate: uploadAvatar, isPending: isUploading } = useUploadAvatar();

  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    phoneNumber: user?.phoneNumber || '',
    email: user?.email || '',
  });

  const [uploadError, setUploadError] = useState<string | null>(null);
  const [updateError, setUpdateError] = useState<string | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Image size must be less than 5MB');
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setUploadError('Please upload an image file');
      return;
    }

    setUploadError(null);

    uploadAvatar(file, {
      onSuccess: () => {
        console.log('✅ Avatar uploaded successfully');
        setUploadError(null);
      },
      onError: (error: any) => {
        console.error('❌ Upload failed:', error);
        
        if (error.response?.status === 404) {
          setUploadError('Avatar upload is not available yet. This feature is coming soon!');
        } else {
          setUploadError(error.response?.data?.message || 'Failed to upload image. Please try again.');
        }
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUpdateError(null);

    updateProfile(formData, {
      onSuccess: () => {
        console.log(' Profile updated successfully');
        setUpdateError(null);
      },
      onError: (error: any) => {
        console.error(' Update failed:', error);
        
        if (error.response?.status === 404) {
          setUpdateError('Profile update is not available yet. This feature is coming soon!');
        } else {
          setUpdateError(error.response?.data?.message || 'Failed to update profile. Please try again.');
        }
      },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Settings</h2>
        <p className="text-gray-600">Update your personal information and profile picture</p>
      </div>

      {/* Avatar Upload */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Picture</h3>
        
        <div className="flex items-center gap-6">
          <Avatar
            src={user?.avatarUrl}
            name={user?.fullName || 'User'}
            size="xl"
          />
          
          <div className="flex-1">
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="avatar-upload"
                disabled={isUploading}
              />
              <label
                htmlFor="avatar-upload"
                className={`inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ${
                  isUploading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Uploading...</span>
                  </>
                ) : (
                  <>
                    <Camera className="w-4 h-4" />
                    <span>Change Picture</span>
                  </>
                )}
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              JPG, PNG or GIF. Max size 5MB.
            </p>
            
            {/* Upload Error */}
            {uploadError && (
              <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">{uploadError}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
        
        <div className="space-y-4">
          <Input
            label="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Enter your full name"
          />

          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            disabled
            className="bg-gray-50 cursor-not-allowed"
            helper="Email cannot be changed"
          />

          <Input
            label="Phone Number"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder="+234 800 000 0000"
          />

          {/* Update Error */}
          {updateError && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800">{updateError}</p>
            </div>
          )}

          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              disabled={isUpdating}
              leftIcon={isUpdating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            >
              {isUpdating ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </div>
      </form>

      {/* Feature Availability Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-blue-900 mb-1">
              Feature Availability
            </h4>
            <p className="text-sm text-blue-800">
              Profile updates and avatar uploads are currently in development. 
              You can view your profile information, but changes may not be saved until the backend is fully configured.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}