import React, { useState, useCallback, useRef } from 'react';
import { VideoPlayer } from './VideoPlayer';

// Import video thumbnails
import video1 from '@/assets/video1.jpg';
import video2 from '@/assets/video2.jpg';
import video3 from '@/assets/video3.jpg';
import video4 from '@/assets/video4.jpg';
import video5 from '@/assets/video5.jpg';

const mockVideos = [
  {
    id: '1',
    thumbnail: video1,
    username: 'dance_queen',
    caption: '✨ Living my best life in the city! Who else loves those late night vibes? #citylife #dancing #mood',
    likes: 12400,
    comments: 89,
    shares: 23,
    profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dance_queen'
  },
  {
    id: '2',
    thumbnail: video2,
    username: 'chef_mike',
    caption: '🍳 Making the perfect pasta from scratch! Secret ingredient: lots of love ❤️ #cooking #pasta #homemade',
    likes: 8900,
    comments: 156,
    shares: 34,
    profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chef_mike'
  },
  {
    id: '3',
    thumbnail: video3,
    username: 'style_maven',
    caption: '🔥 Street style game strong! This outfit is everything 💯 #fashion #streetstyle #ootd #style',
    likes: 15600,
    comments: 203,
    shares: 67,
    profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=style_maven'
  },
  {
    id: '4',
    thumbnail: video4,
    username: 'zen_yogi',
    caption: '🧘‍♀️ Finding peace in nature. Take a moment to breathe today ✨ #yoga #meditation #nature #peace',
    likes: 7200,
    comments: 98,
    shares: 45,
    profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zen_yogi'
  },
  {
    id: '5',
    thumbnail: video5,
    username: 'furry_friend',
    caption: '🐕 When your dog is more photogenic than you! Meet Charlie 📸 #dogsoftiktok #pets #cute #charlie',
    likes: 18900,
    comments: 245,
    shares: 89,
    profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=furry_friend'
  },
];

interface VideoFeedProps {
  className?: string;
}

export const VideoFeed: React.FC<VideoFeedProps> = ({ className = '' }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [likedVideos, setLikedVideos] = useState<Set<string>>(new Set());
  const [videos, setVideos] = useState(mockVideos);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLike = useCallback((videoId: string) => {
    setLikedVideos(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(videoId)) {
        newLiked.delete(videoId);
        // Decrease like count
        setVideos(prevVideos => 
          prevVideos.map(video => 
            video.id === videoId 
              ? { ...video, likes: video.likes - 1 }
              : video
          )
        );
      } else {
        newLiked.add(videoId);
        // Increase like count
        setVideos(prevVideos => 
          prevVideos.map(video => 
            video.id === videoId 
              ? { ...video, likes: video.likes + 1 }
              : video
          )
        );
      }
      return newLiked;
    });
  }, []);

  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    const videoHeight = clientHeight;
    const newIndex = Math.round(scrollTop / videoHeight);
    
    if (newIndex !== currentVideoIndex && newIndex >= 0 && newIndex < videos.length) {
      setCurrentVideoIndex(newIndex);
    }
  }, [currentVideoIndex, videos.length]);

  return (
    <div 
      ref={containerRef}
      className={`h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide ${className}`}
      onScroll={handleScroll}
      style={{ scrollBehavior: 'smooth' }}
    >
      {videos.map((video, index) => (
        <div key={video.id} className="h-screen snap-start">
          <VideoPlayer
            video={video}
            isVisible={index === currentVideoIndex}
            onLike={handleLike}
            liked={likedVideos.has(video.id)}
          />
        </div>
      ))}
    </div>
  );
};