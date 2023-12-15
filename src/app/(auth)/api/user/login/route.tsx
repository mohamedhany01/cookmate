import { NextResponse } from 'next/server';
import prisma from '@/prisma/db';
import { hash } from 'bcrypt';

export async function POST(request: Request) {
  return NextResponse.json({
    message: 'Login successful',
  });
}
