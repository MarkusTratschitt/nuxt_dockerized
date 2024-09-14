/*// backend/server/middleware/authMiddleware.ts
/*
/*import authMiddleware from '~~/server/middleware/authMiddleware';
/*
/* Middleware function to check if a user is authenticated
/*export default function authMiddleware(
/*  req: Request,   // Express request object, which contains the session and user data
/*  res: Response,  // Express response object, used to send responses to the client
/*  next: NextFunction  // Function to pass control to the next middleware if authentication succeeds
/*) {
/*  // Check if the session contains a 'user' object, indicating the user is authenticated
/*  const user = req.session?.user;
/*
/*  if (user) {
/*    // If the user is authenticated, proceed to the next middleware or route handler
/*    next();
/*  } else {
/*    // If the user is not authenticated, return a 401 Unauthorized response
/*    res.status(401).json({ message: "Unauthorized" });
/*  }
/*};*/

import { fromNodeMiddleware } from 'h3';
import type { Request, Response, NextFunction } from 'express';

// Middleware function to check if a user is authenticated
export const authMiddleware = fromNodeMiddleware(
  (req: Request, res: Response, next: NextFunction) => {
    const user = req.session?.user;

    if (user) {
      next(); // Wenn der Benutzer authentifiziert ist, fahre fort
    } else {
      res.status(401).json({ message: 'Unauthorized' }); // Wenn nicht authentifiziert, Fehler 401
    }
  }
);

