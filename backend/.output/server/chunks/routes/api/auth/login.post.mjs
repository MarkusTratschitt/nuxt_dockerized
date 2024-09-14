import { d as defineEventHandler, r as readBody, c as createError } from '../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:crypto';

const prisma = new PrismaClient();
const login_post = defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);
  const user = await prisma.user.findUnique({
    where: { username }
  });
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const session = event.context.session;
  session.data.user = { id: user.id, username: user.username, role: user.role };
  return { message: "Login erfolgreich", user: session.data.user };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
