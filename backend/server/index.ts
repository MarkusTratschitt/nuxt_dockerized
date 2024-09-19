// backend/server/index.ts
import { createApp, toNodeListener } from 'h3';
import { createServer } from 'http';
import { PrismaClient } from '@prisma/client';
import authMiddleware from "./middleware/authMiddleware";

// create h3-app
const app = createApp();
const prisma = new PrismaClient();

// Middleware for authentication
app.use(authMiddleware);

// Register API routes
app.use('/api/auth', defineEventHandler(async (event) => {
    const body = await readBody(event);
    return { message: 'Login erfolgreich', user: body }
}));

// Start the server
const server = createServer(toNodeListener(app));
server.listen(8000, () => {
    console.log("BackendServer started on http://localhost:8000");
});
