import { NextResponse } from 'next/server';
import prisma from '@/prisma/db';
import { hash } from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    const isDuplicated = await isEmailExist(email);

    if (isDuplicated) {
      return NextResponse.json({
        message: 'Email already exists',
        type: 'error',
      });
    }

    const newUser = await createUser(username, email, password);

    return NextResponse.json({
      user: newUser,
      message: 'New user created',
      type: 'success',
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Something went wrong!',
      type: 'error',
    });
  }
}

// Helper functions
async function isEmailExist(email: string) {
  const dbEmail = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (dbEmail) {
    return true;
  }

  return false;
}

async function createUser(username: string, email: string, password: string) {
  const hashedPassword = await hash(password, 10);

  const date = {
    username,
    email,
    password: hashedPassword,
  };

  await prisma.user.create({
    data: date,
  });

  return date;
}
