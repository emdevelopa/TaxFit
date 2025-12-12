import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { useForgotPassword } from '@/hooks/auth/use-auth';

const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const { mutate: forgotPassword, isPending } = useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    forgotPassword(data);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="min-h-screen flex items-center justify-center py-16">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-primary-500"></div>
                <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-light">
                  Password Reset
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-tight leading-tight">
                Reset your
                <br />
                <span className="italic font-light text-primary-600">password</span>
              </h1>

              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Enter your email address and we'll send you instructions to reset your password.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Email address"
                type="email"
                error={errors.email?.message}
                {...register('email')}
                placeholder="your.email@company.com"
                className="font-light"
              />

              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full bg-secondary-900 hover:bg-secondary-800 text-white group"
              >
                <span className="flex items-center justify-center gap-2">
                  {isPending ? 'Sending...' : 'Send reset link'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </form>

            {/* Info Box */}
            <div className="mt-8 p-6 bg-gray-50 border border-gray-200">
              <p className="text-sm text-gray-600 font-light">
                The reset link will be valid for 1 hour. If you don't receive an email, 
                please check your spam folder or contact support.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors font-light"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}