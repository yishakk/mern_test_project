# Song Management Application

A full-stack application for managing songs, built with **React**, **Redux**, **Express**, and **MongoDB**. The application allows users to create, read, update, and delete songs, as well as view detailed statistics about the music library.

**Developed by:** [Yishak Kibru](https://github.com/yishakk)  
**Live Demo:** [https://mern-test-project-yishakk-yishakks-projects.vercel.app/](https://mern-test-project-yishakk-yishakks-projects.vercel.app/)

---

## Features

- **CRUD Operations**:
  - Create, Read, Update, and Delete songs.
  - Real-time updates without page reload.
- **Statistics Dashboard**:
  - Total number of songs, artists, albums, and genres.
  - Number of songs per genre.
  - Number of songs and albums per artist.
  - Number of songs per album.
- **Modern UI**:
  - Responsive design with a clean and intuitive interface.
  - Beautiful cards and buttons styled with **Emotion** and **Styled System**.
- **Filtering**:
  - Filter songs by genre.
- **Backend API**:
  - RESTful API built with **Express** and **MongoDB**.
  - Dockerized for easy deployment.

---

## Technologies Used

### Frontend
- **React**: JavaScript library for building the user interface.
- **Redux Toolkit**: State management for the application.
- **Redux Saga**: Middleware for handling side effects (API calls).
- **TypeScript**: Strongly typed JavaScript for better code quality.
- **Emotion**: CSS-in-JS library for styling components.
- **Styled System**: Utility-first styling for consistent design.

### Backend
- **Express**: Node.js framework for building the REST API.
- **MongoDB**: NoSQL database for storing song data.
- **Mongoose**: ODM for MongoDB.
- **Docker**: Containerization for easy deployment.

---

## Getting Started

### Prerequisites

- **Node.js**: Install Node.js (v16 or higher).
- **MongoDB**: Install MongoDB or use a cloud instance (e.g., MongoDB Atlas).
- **Docker** (optional): Install Docker for containerized deployment.

---

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yishakk/mern_test_project.git
   cd song-management-app
   ```

2. **Install dependencies**:
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For the backend:
     ```bash
     cd backend
     npm install
     ```

3. **Set up environment variables**:
   - Create a `.env` file in the `backend` directory:
     ```env
     MONGODB_URI=mongodb://localhost:27017/songs
     PORT=3000
     CORS_ORIGIN=http://localhost:3001
     ```
   - Create a `.env` file in the `frontend` directory:
     ```env
     VITE_API_URL=http://localhost:3000
     ```

4. **Start the backend**:
   - Run the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Alternatively, run with Docker:
     ```bash
     docker-compose up --build
     ```

5. **Start the frontend**:
   - Run the frontend development server:
     ```bash
     cd frontend
     npm start
     ```
   - Open your browser and navigate to `http://localhost:3001`.

---

## Project Structure

### Frontend
```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── redux/           # Redux store, slices, and sagas
│   ├── types/           # TypeScript types
│   ├── theme.ts         # Theme configuration
│   ├── App.tsx          # Main application component
│   └── index.tsx        # Entry point
├── package.json         # Frontend dependencies
└── tsconfig.json        # TypeScript configuration
```

### Backend
```
backend/
├── src/
│   ├── controllers/     # API controllers
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── server.ts        # Entry point
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose configuration
├── package.json         # Backend dependencies
└── tsconfig.json        # TypeScript configuration
```

---

## Usage

### Add a Song
1. Click the **Add New Song** button.
2. Fill in the song details (Title, Artist, Album, Genre).
3. Click **Create**.

### Edit a Song
1. Click the **Edit** button on a song card.
2. Update the song details.
3. Click **Update**.

### Delete a Song
1. Click the **Delete** button on a song card.
2. Confirm the deletion.

### View Statistics
- The **Statistics Dashboard** displays:
  - Total number of songs, artists, albums, and genres.
  - Number of songs per genre.
  - Number of songs and albums per artist.
  - Number of songs per album.

### Filter Songs
- Use the **Genre Filter** dropdown to filter songs by genre.

---

## Deployment

### Backend
- Deploy the backend to **Render**:
  1. Create a new Web Service on Render.
  2. Connect your GitHub repository.
  3. Set environment variables:
     ```
     MONGODB_URI=<your-mongodb-uri>
     PORT=3000
     CORS_ORIGIN=<frontend-url>
     ```

### Frontend
- Deploy the frontend to **Vercel**:
  1. Install Vercel CLI:
     ```bash
     npm install -g vercel
     ```
  2. Deploy:
     ```bash
     cd frontend
     vercel deploy
     ```

---

## Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## Acknowledgments

- **React**: For building a powerful and flexible UI.
- **Redux Toolkit**: For simplifying state management.
- **MongoDB**: For providing a scalable database solution.
- **Docker**: For making deployment easy and consistent.

---

Enjoy managing your music library! 🎵

**Developed by:** [Yishak Kibru](https://github.com/yishakk)  
**Live Demo:** [https://mern-test-project-yishakk-yishakks-projects.vercel.app/](https://mern-test-project-yishakk-yishakks-projects.vercel.app/)
