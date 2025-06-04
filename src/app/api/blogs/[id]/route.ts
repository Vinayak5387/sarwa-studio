import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Helper function to check admin authentication
async function checkAuth() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('admin-auth');
  
  if (!authCookie) {
    return false;
  }
  return true;
}

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('SarwaStudio');
    const segments = request.nextUrl.pathname.split('/');
    const id = segments[segments.length - 1];
    
    const blog = await db.collection('blogs').findOne({
      _id: new ObjectId(id)
    });
    
    if (!blog) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json({
      id: blog._id.toString(),
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt,
      image: blog.image,
      createdAt: blog.createdAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString(),
      isDraft: blog.isDraft
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Error fetching blog post' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    if (!await checkAuth()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const segments = request.nextUrl.pathname.split('/');
    const id = segments[segments.length - 1];
    const body = await request.json();
    const { title, content, image, excerpt } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('SarwaStudio');

    await db.collection('blogs').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title,
          content,
          image,
          excerpt,
          updatedAt: new Date()
        }
      }
    );

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: 'Error updating blog post' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!await checkAuth()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const segments = request.nextUrl.pathname.split('/');
    const id = segments[segments.length - 1];
    const client = await clientPromise;
    const db = client.db('SarwaStudio');
    
    await db.collection('blogs').deleteOne({
      _id: new ObjectId(id)
    });

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Error deleting blog post' },
      { status: 500 }
    );
  }
}
