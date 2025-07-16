import React from 'react';
import { Search, Plus, Bell } from 'lucide-react';

interface DummyScreenProps {
  screen: 'discover' | 'upload' | 'notifications';
}

const screenConfig = {
  discover: {
    icon: Search,
    title: 'Discover',
    subtitle: 'Find new creators and trending content',
    description: 'Explore trending videos, hashtags, and discover new creators that match your interests.',
    color: 'text-accent'
  },
  upload: {
    icon: Plus,
    title: 'Upload',
    subtitle: 'Share your creativity with the world',
    description: 'Create and upload your own videos to share with the Strmly community.',
    color: 'text-primary'
  },
  notifications: {
    icon: Bell,
    title: 'Notifications',
    subtitle: 'Stay up to date with your activity',
    description: 'Get notified about likes, comments, follows, and other interactions on your content.',
    color: 'text-accent'
  }
};

export const DummyScreen: React.FC<DummyScreenProps> = ({ screen }) => {
  const config = screenConfig[screen];
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-background pb-20 flex items-center justify-center">
      <div className="text-center px-8 max-w-sm">
        <div className={`w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6 animate-pulse-glow`}>
          <Icon className={`w-12 h-12 text-white`} />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-3">{config.title}</h1>
        <p className="text-lg text-muted-foreground mb-4">{config.subtitle}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {config.description}
        </p>
        
        <div className="mt-8 text-accent text-sm font-medium">
          Coming Soon
        </div>
      </div>
    </div>
  );
};