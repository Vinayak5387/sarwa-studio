import { NextResponse } from 'next/server';
import { generateOTP, storeOTP } from '@/lib/otp';
import clientPromise from '@/lib/mongodb';
import { compare } from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Get the user from MongoDB
    const client = await clientPromise;
    const db = client.db('SarwaStudio');
    const user = await db.collection('users').findOne({ email });

    if (!user || !await compare(password, user.password)) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // For non-admin users, return error
    if (user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized access' },
        { status: 403 }
      );
    }

    // Generate and store OTP
    const otp = generateOTP();
    storeOTP(email, otp);

    // In a real application, you would send this OTP via email
    // For demo purposes, we'll return it in the response
    console.log(`OTP for ${email}: ${otp}`); // This will show in server logs

    return NextResponse.json({ 
      message: 'OTP has been sent to your email',
      tempToken: Buffer.from(email).toString('base64') // Simple temporary token
    });
  } catch (error) {
    console.error('Login verification error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
