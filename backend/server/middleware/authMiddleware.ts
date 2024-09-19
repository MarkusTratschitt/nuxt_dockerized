import { defineEventHandler, getCookie, sendError } from 'h3';
import {H3Event} from "h3";

// Simulation of a User-Session
const sessionStore: {[key: string]: {userId: string; username: string }} = {};

// Middleware for authentication
const authMiddleware = defineEventHandler(async (event: H3Event) => {
  const sessionId = getCookie(event, 'sessionId');

  if (!sessionId || !sessionStore[sessionId]) {
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized' }));
  }
  const user = sessionStore[sessionId];
  event.context.user = user;
});

export default authMiddleware;

