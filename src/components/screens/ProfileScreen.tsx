import React from 'react';
import { LogOut, Settings, Heart, Video, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface User {
  displayName: string;
  email: string;
  profilePicture: string;
}

interface ProfileScreenProps {
  user?: User;
  onLogout: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ user, onLogout }) => {
  const mockUser = user || {
    displayName: 'Demo User',
    email: 'demo@strmly.app',
    profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo'
  };

  const stats = [
    { label: 'Following', value: '124', icon: Users },
    { label: 'Followers', value: '1.2K', icon: Users },
    { label: 'Likes', value: '8.9K', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-bg px-4 py-6 pt-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Profile</h1>
          <Button variant="ghost" size="sm">
            <Settings className="w-5 h-5 text-muted-foreground" />
          </Button>
        </div>

        {/* Profile Info */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-primary border-4 border-border overflow-hidden">
            <img 
              src={mockUser.profilePicture}
              alt={mockUser.displayName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground mb-1">{mockUser.displayName}</h2>
            <p className="text-muted-foreground">{mockUser.email}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-around">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Icon className="w-4 h-4 text-primary mr-1" />
                  <span className="text-lg font-bold text-foreground">{stat.value}</span>
                </div>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-4">
        {/* Bio Section */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-2">Bio</h3>
            <p className="text-muted-foreground text-sm">
              ✨ Creating amazing content daily<br/>
              🎥 Follow for the latest trends<br/>
              📧 {mockUser.email}
            </p>
          </CardContent>
        </Card>

        {/* Videos Grid */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">My Videos</h3>
              <Button variant="ghost" size="sm">
                <Video className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i}
                  className="aspect-[9/16] bg-muted rounded-lg flex items-center justify-center"
                >
                  <Video className="w-6 h-6 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Button 
          variant="outline" 
          className="w-full"
          onClick={onLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};