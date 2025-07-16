import React from 'react';
import { VideoFeed } from '../VideoFeed';

export const HomeScreen: React.FC = () => {
  return (
    <div className="relative h-screen bg-background">
      {/* Top Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-video-overlay-top">
        <div className="flex items-center justify-between px-4 py-3 pt-8">
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground text-sm font-medium">Following</span>
            <span className="text-foreground text-sm font-medium border-b-2 border-primary pb-1">For You</span>
          </div>
          <div className="text-xl font-bold text-foreground">Strmly</div>
        </div>
      </div>

      {/* Video Feed */}
      <VideoFeed />
    </div>
  );
};