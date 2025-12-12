import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { otpVerificationSchema, OtpVerificationInput } from '@/lib/validations';
import { useVerifyEmail, useResendOtp } from '@/hooks/auth/use-auth';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { string } from 'zod';

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email') || '';

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<OtpVerificationInput>({
    resolver: zodResolver(otpVerificationSchema),
    defaultValues: {
      email: string,
    },
  });

  const verifyEmailMutation = useVerifyEmail();
  const resendOtpMutation = useResendOtp();

  const onSubmit = (data: OtpVerificationInput) => {
    verifyEmailMutation.mutate(data);
  };

  const handleResend = () => {
    if (email) {
      resendOtpMutation.mutate({ email });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
          <p className="text-gray-600">
            We've sent a verification code to<br />
            <span className="font-medium text-gray-900">{email}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Enter 6-digit code"
            type="text"
            maxLength={6}
            placeholder="000000"
            className="text-center text-2xl tracking-widest"
            error={errors.otp?.message}
            {...register('otp')}
          />

          <Button
            type="submit"
            fullWidth
            size="lg"
            isLoading={verifyEmailMutation.isPending}
          >
            Verify Email
          </Button>

          <div className="text-center text-sm text-gray-600">
            Didn't receive the code?{' '}
            <button
              type="button"
              onClick={handleResend}
              disabled={resendOtpMutation.isPending}
              className="text-primary-500 hover:text-primary-600 font-medium disabled:opacity-50"
            >
              {resendOtpMutation.isPending ? 'Sending...' : 'Resend'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}