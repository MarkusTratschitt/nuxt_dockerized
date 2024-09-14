// backend/server/index.ts
import express from 'express';
import { createServer } from 'http';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from "./middleware/authMiddleware";

const app = express();
const prisma = new PrismaClient();

// Middleware to parse JSON
app.use(express.json());

// Custom middleware for authentication
app.use(authMiddleware);

// Register API routes
app.use('/api/auth', require('./api/auth/login.post'));


// Start the server
const server = createServer(app);
server.listen(8000, () => {
    console.log("BackendServer started on http://localhost:8000");
});

