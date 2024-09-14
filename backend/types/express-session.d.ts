// backend/types/express-session.d.ts

// Import the base express-session module to extend its types
import "express-session";

// Extend the express-session module to include custom session data
declare module "express-session" {
  // Extend the SessionData interface to allow a flexible user object
  interface SessionData {
    // Optional 'user' object to store user-related information in the session
    // The 'user' object can contain any key-value pairs (defined as [key: string]: any)
    user?: { [key: string]: any };
  }
}
