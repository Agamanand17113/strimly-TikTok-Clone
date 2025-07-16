# 📱 Strmly - TikTok-Style Video Feed App

A complete React web application that mimics TikTok's vertical video feed experience, built with modern web technologies and ready for mobile deployment via Capacitor.

## ✨ Features

- 🔐 **Authentication System** - Google Sign-In simulation (Firebase-ready)
- 🎥 **Vertical Video Feed** - TikTok-style scrolling with autoplay/pause
- ❤️ **Like System** - Animated heart reactions with real-time counts
- 👤 **User Profiles** - Complete profile management
- 🔽 **Bottom Navigation** - 5-tab mobile-optimized navigation
- 🎨 **Dark Theme** - Modern TikTok-inspired design system
- 📱 **Mobile-First** - Responsive design optimized for mobile

## 🚀 Quick Start

1. **Development Server**
   ```bash
   npm run dev
   ```

2. **Login** - Use the demo Google login button
3. **Navigate** - Use bottom tabs to explore different screens
4. **Interact** - Like videos, scroll through the feed

## 📱 Mobile Deployment (Capacitor)

To deploy as a native mobile app:

1. **Install Capacitor**
   ```bash
   npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android
   ```

2. **Initialize**
   ```bash
   npx cap init
   ```

3. **Build & Sync**
   ```bash
   npm run build
   npx cap add ios android
   npx cap sync
   ```

4. **Run on Device**
   ```bash
   npx cap run ios
   npx cap run android
   ```

## 🔧 Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks + localStorage
- **Animations**: Custom CSS animations
- **Mobile**: Capacitor-ready

## 🎨 Design System

- **Colors**: TikTok-inspired dark theme with pink/blue accents
- **Animations**: Smooth transitions and micro-interactions
- **Layout**: Mobile-first responsive design
- **Typography**: Modern font hierarchy

## 🔗 Firebase Integration

Ready for Firebase integration:
1. Update `src/firebase/config.ts` with your Firebase config
2. Uncomment Firebase auth code
3. Replace demo auth with real Firebase Authentication
4. Connect Firestore for user data and video metadata

## 📂 Project Structure

```
src/
├── components/
│   ├── VideoPlayer.tsx      # Main video component
│   ├── VideoFeed.tsx        # Scrollable video feed
│   ├── BottomNavigation.tsx # Mobile navigation
│   ├── AuthScreen.tsx       # Login interface
│   └── screens/            # App screens
├── assets/                 # Video thumbnails
├── firebase/              # Firebase config
└── hooks/                # Custom React hooks
```

Built with ❤️ using Lovable