import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignIn, useUser, useClerk } from '@clerk/clerk-react';
import { Shield, Lock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  // Authorized admin email
  const ADMIN_EMAIL = 'skinsciencetest@gmail.com';

  useEffect(() => {
    // Check if user is signed in and is the authorized admin
    if (isLoaded && user) {
      if (user.primaryEmailAddress?.emailAddress === ADMIN_EMAIL) {
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('adminEmail', user.primaryEmailAddress.emailAddress);
        navigate('/admin/dashboard');
      } else {
        // If user is signed in but not authorized, sign them out
        signOut().then(() => {
          alert('Access denied. Only authorized administrators can access this area.');
        });
      }
    }
  }, [user, isLoaded, navigate, signOut]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back to Home Button */}
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="mb-6 flex items-center gap-2 hover:bg-white/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Portal</h1>
            <p className="text-white/80 text-sm">
              Authorized administrators only
            </p>
          </div>

          {/* Clerk SignIn Component */}
          <div className="p-6">
            <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-amber-800 font-medium mb-1">
                    Restricted Access
                  </p>
                  <p className="text-xs text-amber-700">
                    Only <strong>{ADMIN_EMAIL}</strong> is authorized to access the admin dashboard.
                  </p>
                </div>
              </div>
            </div>

            {!isLoaded ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                <p className="mt-2 text-gray-600">Loading...</p>
              </div>
            ) : (
              <SignIn
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none p-0",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    socialButtonsBlockButton: "flex items-center justify-center gap-2 w-full bg-white border-2 border-gray-200 text-gray-700 rounded-lg px-4 py-3 font-medium hover:bg-gray-50 hover:border-purple-400 transition-all",
                    socialButtonsBlockButtonText: "text-gray-700",
                    formButtonPrimary: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg",
                    footerAction: "hidden",
                    identityPreview: "hidden",
                    formFieldInput: "rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500",
                    formFieldLabel: "text-gray-700 font-medium",
                    dividerLine: "bg-gray-200",
                    dividerText: "text-gray-500 text-sm",
                  },
                  layout: {
                    socialButtonsPlacement: 'top',
                    socialButtonsVariant: 'blockButton',
                  },
                }}
                redirectUrl="/admin/dashboard"
                afterSignInUrl="/admin/dashboard"
              />
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t">
            <p className="text-xs text-gray-600 text-center">
              Protected by Clerk Authentication
            </p>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Having trouble logging in?{' '}
            <a href="mailto:support@skinscience.com" className="text-purple-600 hover:text-purple-700 font-medium">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};