// backend/server/middleware/authMiddleware.ts

import type { Request, Response, NextFunction } from "express";

// Middleware function to check if a user is authenticated
export function authMiddleware(
  req: Request,   // Express request object, which contains the session and user data
  res: Response,  // Express response object, used to send responses to the client
  next: NextFunction  // Function to pass control to the next middleware if authentication succeeds
) {
  // Check if the session contains a 'user' object, indicating the user is authenticated
  const user = req.session?.user;

  if (user) {
    // If the user is authenticated, proceed to the next middleware or route handler
    next();
  } else {
    // If the user is not authenticated, return a 401 Unauthorized response
    res.status(401).json({ message: "Unauthorized" });
  }
};
