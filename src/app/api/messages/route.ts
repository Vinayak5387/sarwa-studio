import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    // Check authentication
    const cookieStore = await cookies();
    const authCookie = cookieStore.get('admin-auth');
    
    if (!authCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get messages from MongoDB
    const client = await clientPromise;
    const db = client.db('SarwaStudio');
    
    const messages = await db.collection('messages')
      .find({})
      .sort({ timestamp: -1 })
      .toArray();

    // Convert MongoDB _id to string id
    const processedMessages = messages.map(message => ({
      id: message._id.toString(),
      firstName: message.firstName,
      lastName: message.lastName,
      email: message.email,
      phone: message.phone,
      message: message.message,
      services: message.services,
      timestamp: message.timestamp,
      status: message.status
    }));

    return NextResponse.json(processedMessages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Error fetching messages' },
      { status: 500 }
    );
  }
}
