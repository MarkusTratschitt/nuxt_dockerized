// backend/middleware/session.ts

import { useSession } from "h3";  // Import session handling functionality from h3
import { H3Event } from "h3";     // Import type for the event handler
import type { SessionData } from "h3";  // Import base session data type for customization

// Define a custom session interface that extends the base SessionData
// This interface allows storing user details (id, username, role) in the session
interface CustomSession extends SessionData {
  user?: {
    id: number;
    username: string;
    role: string;
  };
}

// Define the event handler for managing session-related logic
export default defineEventHandler(async (event: H3Event) => {
  // Initialize or retrieve session data using the useSession function
  // The session is secured with a password for encryption, and cookie options are set
  const session = await useSession<CustomSession>(event, {
    password: "your_secure_session_password", // Secure password for session encryption
    cookie: {
      httpOnly: true, // Cookie can only be accessed by the server, preventing client-side access (security measure)
      maxAge: 60 * 60 * 24 * 365, // Set cookie expiration to 1 year
      secure: process.env.NODE_ENV === "production", // Use secure cookies (HTTPS) in production environments
    },
  });

  // Attach the session to the event context, making it available throughout the request lifecycle
  event.context.session = session;
});
