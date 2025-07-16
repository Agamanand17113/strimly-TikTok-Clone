import React, { useState, useRef, useEffect } from 'react';
import { Heart, MessageCircle, Share, Volume2, VolumeX, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Video {
  id: string;
  thumbnail: string;
  username: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  profilePicture?: string;
}

interface VideoPlayerProps {
  video: Video;
  isVisible: boolean;
  onLike: (videoId: string) => void;
  liked: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  video, 
  isVisible, 
  onLike, 
  liked 
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [showLikeAnimation, setShowLikeAnimation] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto play/pause based on visibility
  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {
          // Handle autoplay restrictions
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  const handleLike = () => {
    onLike(video.id);
    setShowLikeAnimation(true);
    setTimeout(() => setShowLikeAnimation(false), 600);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Video Background (using image for now) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${video.thumbnail})` }}
      >
        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-video-overlay-top" />
        
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-video-overlay-bottom" />
      </div>

      {/* Mute/Unmute Button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
        onClick={handleMuteToggle}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </Button>

      {/* Right Side Actions */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center space-y-6 z-10">
        {/* Profile Picture */}
        <div className="w-12 h-12 rounded-full bg-gradient-primary border-2 border-white overflow-hidden">
          <img 
            src={video.profilePicture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${video.username}`}
            alt={video.username}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Like Button */}
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="sm"
            className={`text-white/80 hover:text-white p-3 relative ${
              liked ? 'text-primary' : ''
            }`}
            onClick={handleLike}
          >
            <Heart 
              className={`w-8 h-8 ${liked ? 'fill-current' : ''} ${
                showLikeAnimation ? 'animate-like-burst' : ''
              }`} 
            />
            {showLikeAnimation && (
              <Heart className="absolute w-8 h-8 fill-current text-primary animate-heart-pulse" />
            )}
          </Button>
          <span className="text-white/80 text-sm font-medium">{video.likes}</span>
        </div>

        {/* Comment Button */}
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-white/80 hover:text-white p-3"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
          <span className="text-white/80 text-sm font-medium">{video.comments}</span>
        </div>

        {/* Share Button */}
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-white/80 hover:text-white p-3"
          >
            <Share className="w-8 h-8" />
          </Button>
          <span className="text-white/80 text-sm font-medium">{video.shares}</span>
        </div>

        {/* More Options */}
        <Button
          variant="ghost"
          size="sm"
          className="text-white/80 hover:text-white p-3"
        >
          <MoreHorizontal className="w-8 h-8" />
        </Button>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-24 left-4 right-20 z-10">
        <div className="text-white">
          <h3 className="font-semibold text-base mb-1">@{video.username}</h3>
          <p className="text-sm text-white/90 leading-relaxed">{video.caption}</p>
        </div>
      </div>
    </div>
  );
};