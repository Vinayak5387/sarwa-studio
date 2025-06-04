import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  // Clear the auth cookie
  const cookieStore = await cookies();
  cookieStore.delete('admin-auth');
  
  return NextResponse.json({ status: 'success' });
}
