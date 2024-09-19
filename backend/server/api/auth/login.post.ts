// server/api/auth/login.post.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"; // or 'bcryptjs' if you chose to use bcryptjs
import type { H3Event } from 'h3';

// Instantiate Prisma Client
const prisma = new PrismaClient();

// Define Event Handler
export default defineEventHandler(async (event: H3Event) => {
  const { username, password } = await readBody(event);

  // Fetch user from database using prisma
  const user = await prisma.$queryRaw`SELECT * FROM user WHERE username = ${username}`;

  // Check if user exists

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  // Paswordcheck using bcrypt
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  // start session
  const session = event.context.session;
  session.data.user = { id: user.id, username: user.username, role: user.role };

  return { message: "Login erfolgreich", user: session.data.user };
});
function findUnique(arg0: { where: { username: any; }; }) {
    throw new Error("Function not implemented.");
}

