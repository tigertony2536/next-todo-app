import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

interface signupRequest extends NextRequest {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: signupRequest) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await prisma.user.create({
      data: { name: name, email: email, password: hashedPassword },
    });
    return Response.json({ message: "User created", user });
  } catch (error) {
    return Response.json({ error: `User could not be created. ${error}` });
  }
}
