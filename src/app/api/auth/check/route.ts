import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('admin-auth');
  
  if (!authCookie) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // In a real application, you would verify the auth token here
  // For now, we'll just check if it exists

  return NextResponse.json({ status: 'ok' });
}
