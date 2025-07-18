import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface AuthScreenProps {
  onLogin: (user: { displayName: string; email: string; profilePicture: string }) => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    
    // Simulate Firebase Google Auth
    setTimeout(() => {
      const mockUser = {
        displayName: 'Demo User',
        email: 'demo@strmly.app',
        profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo'
      };
      
      onLogin(mockUser);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardContent className="p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Strmly</h1>
            <p className="text-muted-foreground">Your creative video platform</p>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-2">Welcome to Strmly</h2>
            <p className="text-sm text-muted-foreground">
              Join millions of creators sharing their passion through short videos
            </p>
          </div>

          {/* Login Button */}
          <Button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium py-3 h-auto"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Signing in...</span>
              </div>
            ) : (
              <>
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </>
            )}
          </Button>

          {/* Terms */}
          <p className="text-xs text-muted-foreground text-center mt-6 leading-relaxed">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </CardContent>
      </Card>
    </div>
  );
};