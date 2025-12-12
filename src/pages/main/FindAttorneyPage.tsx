import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { useLogin } from '@/hooks/auth/use-auth';
import { loginSchema } from '@/lib/validations';

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
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
                  Account Access
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-tight leading-tight">
                Welcome
                <br />
                <span className="italic font-light text-primary-600">back</span>
              </h1>

              <p className="text-lg text-gray-600 font-light">
                Sign in to access your tax advisory dashboard.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  label="Email address"
                  type="email"
                  error={errors.email?.message}
                  {...register('email')}
                  placeholder="your.email@company.com"
                  className="font-light"
                />
              </div>

              <div className="relative">
                <Input
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  error={errors.password?.message}
                  {...register('password')}
                  placeholder="Enter your password"
                  className="font-light"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600 font-light">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Remember me
                </label>
                <Link
                  to="/forgot-password"
                  className="text-primary-600 hover:text-primary-700 font-light"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full bg-secondary-900 hover:bg-secondary-800 text-white group"
              >
                <span className="flex items-center justify-center gap-2">
                  {isPending ? 'Signing in...' : 'Sign in'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 font-light">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}