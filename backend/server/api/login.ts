import { defineEventHandler, setCookie } from 'h3';
import { H3Event } from "h3";

// Simulation of a User Session
const sessionStore: {[key: string]: {userId: string; username: string }} = {};

// Login handler to create a session
export default defineEventHandler(async (event: H3Event) =>{
    const body = await useBody(event);
    
    // Dummy logic for authentication
    const user = {userId: '123', username: 'user123'};
    
    // Create a session-ID and save user data
    const sessionId = Math.random().toString(36).substring(2);
    sessionStore[sessionId] = user;

    // Set session cookie
    setCookie(event, 'session_id', sessionId, { httpOnly: true, path: '/' });

    // Return user data
    return { message: 'Login erfolgreich', user };
});

function useBody(event: H3Event<import("h3").EventHandlerRequest>) {
    throw new Error('Function not implemented.');
}
