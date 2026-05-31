import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const body = await req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    return Response.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  const validPassword = await bcrypt.compare(
    body.password,
    user.password
  );

  if (!validPassword) {
    return Response.json(
      { error: "Invalid password" },
      { status: 401 }
    );
  }

  const token = jwt.sign(
    {
      userId: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.NEXTAUTH_SECRET!,
    {
      expiresIn: "7d",
    }
  );

  return Response.json({
    success: true,
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
}