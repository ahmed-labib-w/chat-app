# Chat App 💬

A full-stack real-time messaging application built with the MERN stack and Socket.io.

## Features

- 🔐 Authentication & Authorization with JWT
- 💬 Real-time messaging with Socket.io
- 🟢 Online user status
- 🖼️ Image sharing via Cloudinary
- 🎨 Multiple themes with DaisyUI
- 📦 Global state management with Zustand
- ❌ Error handling on both client and server

## Tech Stack

**Frontend:**
- React 19
- Tailwind CSS + DaisyUI
- Zustand (state management)
- Socket.io Client
- Axios
- React Router DOM
- React Hot Toast

**Backend:**
- Node.js + Express 5
- MongoDB + Mongoose
- Socket.io
- JWT Authentication
- Bcrypt.js
- Cloudinary (image uploads)

## Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account
- Cloudinary account

### Setup

1. Clone the repo
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```

2. Install dependencies
   ```bash
   npm run build
   ```

3. Create a `.env` file inside the `backend` folder
   ```env
   MONGODB_URI=your_mongodb_uri
   PORT=5001
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   NODE_ENV=development
   ```

4. Run the app
   ```bash
   # Run backend
   cd backend && npm run dev

   # Run frontend (in a separate terminal)
   cd frontend && npm run dev
   ```

## Deployment

This app is deployed on [Railway](https://railway.app). The backend serves the frontend in production so only one deployment is needed.

## Live Demo

🔗 [chat-app6767.up.railway.app](https://chat-app6767.up.railway.app)
