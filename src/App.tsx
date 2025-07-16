import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthScreen } from "@/components/AuthScreen";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { ProfileScreen } from "@/components/screens/ProfileScreen";
import { DummyScreen } from "@/components/screens/DummyScreen";
import { BottomNavigation } from "@/components/BottomNavigation";

const queryClient = new QueryClient();

interface User {
  displayName: string;
  email: string;
  profilePicture: string;
}

const StrmlyApp: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session
  useEffect(() => {
    const savedUser = localStorage.getItem('strmly_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('strmly_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('strmly_user');
    setActiveTab('home');
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'discover':
        return <DummyScreen screen="discover" />;
      case 'upload':
        return <DummyScreen screen="upload" />;
      case 'notifications':
        return <DummyScreen screen="notifications" />;
      case 'profile':
        return <ProfileScreen user={user} onLogout={handleLogout} />;
      default:
        return <HomeScreen />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <AuthScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {renderScreen()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="dark">
        <StrmlyApp />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
