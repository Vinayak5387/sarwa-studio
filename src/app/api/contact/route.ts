import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// Define the expected request body type
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  services: string[];
}

export async function POST(req: Request) {
  try {
    const data = await req.json() as ContactFormData;

    // Enhanced validation
    const requiredFields = ['email', 'firstName', 'lastName', 'message'];
    const missingFields = requiredFields.filter(field => !data[field as keyof ContactFormData]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          error: 'Missing required fields', 
          fields: missingFields 
        },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Store the message in MongoDB
    const client = await clientPromise;
    const db = client.db('SarwaStudio');
    
    // Insert the message into MongoDB
    const result = await db.collection('messages').insertOne({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      services: data.services,
      timestamp: new Date(),
      status: 'unread'
    });

    // Return success response with the processed data
    return NextResponse.json({
      message: 'Contact form submitted successfully',
      data: {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        timestamp: new Date().toISOString()
      }
    }, { 
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // More specific error handling
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    
    return NextResponse.json({
      error: errorMessage,
      timestamp: new Date().toISOString()
    }, {
      status: 500
    });
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}