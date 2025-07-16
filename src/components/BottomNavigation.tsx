import React from 'react';
import { Home, Search, Plus, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'discover', icon: Search, label: 'Discover' },
  { id: 'upload', icon: Plus, label: 'Upload' },
  { id: 'notifications', icon: Bell, label: 'Notifications' },
  { id: 'profile', icon: User, label: 'Profile' },
];

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  activeTab, 
  onTabChange 
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const isUpload = tab.id === 'upload';
          
          return (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-1 px-3 py-2 h-auto min-h-[60px] ${
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              } ${
                isUpload 
                  ? 'bg-gradient-primary text-white hover:text-white rounded-2xl mx-2' 
                  : ''
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              <Icon 
                className={`w-6 h-6 ${
                  isActive && !isUpload ? 'scale-110' : ''
                } transition-transform duration-200`} 
              />
              <span className="text-xs font-medium">{tab.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};