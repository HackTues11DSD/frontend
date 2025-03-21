import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignUpPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center items-center mb-8">
          <div className="bg-green-500 w-10 h-10 rounded-lg flex items-center justify-center mr-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <span className="text-x0,5 font-bold">HealthMap</span>
        </div>

        {/* Main Content */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold mb-2">Sign up for an account</h1>
          <p className="text-gray-500">Enter your details below to create your account</p>
        </div>

        {/* Form */}
        <form className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between">
              <Label htmlFor="confirm-password">Confirm Password</Label>
            </div>
            <Input
              id="confirm-password"
              type="password"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            Sign up
          </Button>
        </form>

        {/* Or continue with */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-1 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-3">
            <Button variant="outline" className="w-full border-gray-300 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="10" 
                height="10" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-2"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Login with GitHub
            </Button>
          </div>
        </div>

        {/* Already have an account */}
        <div className="text-center mt-3">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-green-500 hover:underline font-medium">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;