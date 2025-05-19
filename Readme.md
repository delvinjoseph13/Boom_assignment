# BOOM Short-Video App

A lightweight short-video viewing and uploading app built for a decentralized entertainment ecosystem. This project includes user authentication, video feed, upload functionality, and basic like system.

---

##  Features

- User registration and login (JWT-based)
- Upload short videos with titles
- Scrollable video feed (React Player)
- Like button with real-time counter
- Clean UI built with Tailwind CSS
- Media uploads handled using `multer`
- MongoDB for database management

---

## 🛠 Tech Stack

### Frontend
- React
- React Router
- Axios
- Tailwind CSS
- React Player

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Bcrypt for password hashing
- Multer for video file uploads
- Dotenv for environment variables

---

## 📁 Folder Structure

🛠️ Setup Instructions
📁 Backend Setup
1. Clone the Repository

   git clone https://github.com/delvinjoseph13/Boom_assignment.git

   cd backend

2. Install Dependencies

   npm install

3. Environment Variables

   Create a .env file with the following contents: MONGODB_URL=mongodb://localhost:27017/agent-distributor,SECRET_KEY="SECRET_KEY"
  or use MongoDb Atlas

4. Run the Server
   
   npm start

Frontend Setup

1. Navigate to Frontend Folder

   cd frontend
   cd vite-project

2. Install Dependencies

   npm install

3. Start the Frontend
 
   npm run dev


backend/
  controllers/
  middleware/
  model/
  routes/
  uploads/
  server.js
  .env

frontend/vite-project
  src/
    components/
    App.js
    index.css
  tailwind.config.js
  package.json

### API Endpoints
- POST /api/register — User registration
- POST /api/login — User login
- POST /api/upload — Upload video 
- GET /api/videos — Get all videos
- PUT /api/like/:videoId — Like a video