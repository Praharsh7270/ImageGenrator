# 🎨 AI Image Generator

A full-stack web application that generates AI images from text prompts using React, Node.js, and ClipDrop API.

![AI Image Generator](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Components Overview](#-components-overview)
- [Authentication](#-authentication)
- [Credits System](#-credits-system)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [Author](#-author)

## ✨ Features

### 🔥 Core Features
- **AI Image Generation**: Convert text prompts to stunning images using ClipDrop API
- **User Authentication**: Secure registration and login with JWT tokens
- **Credits System**: Each user gets 5 free credits, with ability to purchase more
- **Real-time Feedback**: Toast notifications for all user actions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Beautiful Framer Motion animations throughout the app

### 🚀 Advanced Features
- **Automatic Token Management**: JWT tokens stored in localStorage with auto-refresh
- **Credit Tracking**: Real-time credit updates after image generation
- **Download Functionality**: Download generated images directly
- **Protected Routes**: Authentication required for image generation
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Loading States**: Beautiful loading animations during image generation

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - UI Framework
- **Vite** - Build tool and development server
- **Tailwind CSS 4.1.11** - Styling and responsive design
- **Framer Motion 12.23.12** - Animations and transitions
- **React Router DOM 7.7.0** - Client-side routing
- **Axios 1.11.0** - HTTP client for API calls
- **React Toastify 11.0.5** - Toast notifications

### Backend
- **Node.js with Express 5.1.0** - Server framework
- **MongoDB with Mongoose 8.17.0** - Database and ODM
- **JWT (jsonwebtoken 9.0.2)** - Authentication tokens
- **bcrypt 6.0.0** - Password hashing
- **CORS 2.8.5** - Cross-origin resource sharing
- **dotenv 17.2.1** - Environment variable management

### External APIs
- **ClipDrop API** - AI image generation
- **MongoDB Atlas** - Cloud database

## 📁 Project Structure

```
ImageGenrator/
├── Client/                          # Frontend React application
│   ├── public/                      # Static assets
│   │   ├── favicon.svg
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/                  # Images, icons, and static files
│   │   │   ├── logo.svg
│   │   │   ├── profile_icon.png
│   │   │   ├── credit_star.svg
│   │   │   └── [40+ other assets]
│   │   ├── Components/              # Reusable React components
│   │   │   ├── Navbar.jsx          # Navigation with user info
│   │   │   ├── Login.jsx           # Authentication modal
│   │   │   ├── Header.jsx          # Hero section
│   │   │   ├── Descrip.jsx         # Description section
│   │   │   ├── Steps.jsx           # How it works section
│   │   │   ├── Testimonials.jsx    # User testimonials
│   │   │   ├── GenrateBtn.jsx      # Generate image button
│   │   │   └── Fotter.jsx          # Footer component
│   │   ├── Context/
│   │   │   └── AppContext.jsx      # Global state management
│   │   ├── Pages/                  # Main application pages
│   │   │   ├── Home.jsx            # Landing page
│   │   │   ├── Result.jsx          # Image generation page
│   │   │   └── BuyCredit.jsx       # Credit purchase page
│   │   ├── App.jsx                 # Main app component
│   │   ├── main.jsx                # React entry point
│   │   └── index.css               # Global styles
│   ├── .env                        # Frontend environment variables
│   ├── package.json                # Frontend dependencies
│   ├── vite.config.js              # Vite configuration
│   └── tailwind.config.js          # Tailwind CSS configuration
├── server/                         # Backend Node.js application
│   ├── Config/
│   │   └── Mongodb.js              # Database connection
│   ├── Controllers/                # Business logic
│   │   ├── UserController.js       # User authentication & credits
│   │   └── ImageController.js      # Image generation logic
│   ├── Middlewares/
│   │   └── Auth.js                 # JWT authentication middleware
│   ├── Models/
│   │   └── UserModel.js            # User data schema
│   ├── Routes/                     # API route definitions
│   │   ├── UserRoutes.js           # User-related endpoints
│   │   └── ImageRoutes.js          # Image generation endpoints
│   ├── .env                        # Backend environment variables
│   ├── package.json                # Backend dependencies
│   └── server.js                   # Express server entry point
└── readme.md                       # This file
```

## 🚀 Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB Atlas** account
- **ClipDrop API** key

### 1. Clone the Repository
```bash
git clone https://github.com/Praharsh7270/ImageGenrator.git
cd ImageGenrator
```

### 2. Backend Setup
```bash
cd server
npm install
```

### 3. Frontend Setup
```bash
cd ../Client
npm install
```

## 🔧 Environment Variables

### Backend (.env in server folder)
```env
PORT=5000
MONGO_URI="your_mongodb_connection_string"
JWT_SECRET="your_jwt_secret_key"
CLIPDROP_api="your_clipdrop_api_key"
```

### Frontend (.env in Client folder)
```env
VITE_BACKENDURL="http://localhost:5000"
```

### Get Your API Keys

1. **MongoDB Atlas**: 
   - Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create cluster and get connection string

2. **ClipDrop API**:
   - Sign up at [ClipDrop](https://clipdrop.co/apis)
   - Get your API key from dashboard

## 🌐 API Endpoints

### User Authentication
```
POST /api/user/register    # Register new user
POST /api/user/login       # User login
POST /api/user/credits     # Get user credits (Protected)
```

### Image Generation
```
POST /api/image/generateImage    # Generate AI image (Protected)
```

### Request/Response Examples

#### Register User
```javascript
// Request
POST /api/user/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

// Response
{
  "success": true,
  "user": { ... },
  "token": "jwt_token_here"
}
```

#### Generate Image
```javascript
// Request (with JWT token in headers)
POST /api/image/generateImage
Headers: { "token": "your_jwt_token" }
{
  "prompt": "a beautiful sunset over mountains"
}

// Response
{
  "success": true,
  "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  "message": "Image generated successfully",
  "resultImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}
```

## 🧩 Components Overview

### Core Components

#### 🔐 Authentication System
- **Login.jsx**: Modal with animated form for login/register
- **Auth.js**: JWT middleware for protected routes
- **AppContext.jsx**: Global state management for user data

#### 🎨 Image Generation
- **Result.jsx**: Main image generation interface with loading states
- **ImageController.js**: Backend logic for ClipDrop API integration
- **GenrateBtn.jsx**: Call-to-action button with animations

#### 🏠 Landing Page
- **Home.jsx**: Combines all sections for landing page
- **Header.jsx**: Hero section with animated elements
- **Descrip.jsx**: Feature descriptions
- **Steps.jsx**: How-to-use section
- **Testimonials.jsx**: User feedback section

#### 🧭 Navigation & Layout
- **Navbar.jsx**: Responsive navigation with user info
- **Fotter.jsx**: Footer with social links

## 🔐 Authentication

### JWT Token Flow
1. User registers/logs in → Server generates JWT token
2. Token stored in localStorage and React state
3. All protected API calls include token in headers
4. Server validates token using middleware
5. Auto-redirect to login if token invalid/expired

### Security Features
- **Password Hashing**: bcrypt with salt rounds
- **JWT Expiration**: 30-day token validity
- **Protected Routes**: Authentication required for image generation
- **Input Validation**: Server-side validation for all inputs

## 💰 Credits System

### How It Works
- **Free Credits**: 5 credits given on registration
- **Credit Deduction**: 1 credit per image generation
- **Credit Tracking**: Real-time updates in UI
- **Credit Protection**: Frontend and backend validation
- **Purchase Flow**: Redirect to buy credits page when insufficient

### Credit Management
```javascript
// Frontend credit check
if (credits <= 0) {
    toast.error("Insufficient credits!");
    navigate("/buycredit");
    return;
}

// Backend credit validation
if (user.credits <= 0) {
    return res.status(400).json({ 
        success: false, 
        message: "Insufficient credits" 
    });
}
```

## 🎯 Usage

### Running the Application

1. **Start Backend Server**
```bash
cd server
npm run server    # Uses nodemon for development
# or
npm start         # For production
```

2. **Start Frontend Development Server**
```bash
cd Client
npm run dev       # Starts Vite dev server
```

3. **Access Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

### User Journey

1. **Landing Page**: User sees hero section, features, and testimonials
2. **Sign Up**: Click "Get Started" → Register with email/password
3. **Dashboard**: Access to image generation with 5 free credits
4. **Generate Image**: Enter prompt → Beautiful loading animation → Generated image
5. **Download**: Save generated image to device
6. **Credits**: Monitor remaining credits in navbar
7. **Buy Credits**: Redirect when credits run out

## 🎬 Key Features in Action

### Animation System
- **Framer Motion**: Smooth page transitions and micro-interactions
- **Loading States**: Beautiful progress indicators during image generation
- **Hover Effects**: Interactive buttons and cards
- **Page Transitions**: Seamless navigation between pages

### Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Tailwind CSS**: Utility-first CSS framework
- **Flexible Layouts**: Adapts to different screen sizes
- **Touch-Friendly**: Mobile gesture support

### Error Handling
- **Toast Notifications**: User-friendly error messages
- **Network Errors**: Graceful handling of API failures
- **Validation**: Client and server-side input validation
- **Loading States**: Clear feedback during async operations

## 🔄 State Management

### Global State (AppContext)
```javascript
const AppContext = {
  user: null,              // Current user data
  token: "jwt_token",      // Authentication token
  credits: 5,              // Available credits
  showLogin: false,        // Login modal visibility
  generateImage: fn,       // Image generation function
  getUserCredits: fn,      // Fetch user credits
  logout: fn              // Logout function
}
```

## 🐛 Debugging & Development

### Common Issues & Solutions

1. **CORS Errors**
   - Ensure CORS is enabled in server.js
   - Check frontend/backend URLs match

2. **Authentication Failures**
   - Verify JWT_SECRET in environment variables
   - Check token format in API calls

3. **Image Generation Issues**
   - Validate ClipDrop API key
   - Check credit availability
   - Monitor API rate limits

### Development Tips
- Use React DevTools for component debugging
- Monitor Network tab for API call issues
- Check browser console for JavaScript errors
- Use MongoDB Compass for database inspection

## 📱 Screenshots

*Note: Add screenshots of your application here*

- Landing page with hero section
- Image generation interface
- Generated image with download options
- User authentication modal
- Credits tracking in navigation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Praharsh Singh**
- GitHub: [@Praharsh7270](https://github.com/Praharsh7270)
- Email: praharshsingh471@gmail.com

## 🙏 Acknowledgments

- **ClipDrop API** for AI image generation
- **MongoDB Atlas** for cloud database hosting
- **Vercel/Netlify** for deployment options
- **React Community** for excellent documentation
- **Tailwind CSS** for utility-first styling

## 🔮 Future Enhancements

- [ ] Payment integration for credit purchases
- [ ] Image history and gallery
- [ ] Advanced prompt suggestions
- [ ] Social sharing features
- [ ] Image editing tools
- [ ] Batch image generation
- [ ] User profile customization
- [ ] Admin dashboard
- [ ] API rate limiting
- [ ] Image optimization and compression

---

Made with ❤️ by Praharsh Singh