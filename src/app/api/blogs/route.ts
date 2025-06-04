import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, image, excerpt } = body;

    // Validate the input
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('SarwaStudio');

    // Add the blog post to MongoDB
    const result = await db.collection('blogs').insertOne({
      title,
      content,
      image,
      excerpt,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Error creating blog post' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Check authentication for admin-only endpoints
    const cookieStore = await cookies();
    const authCookie = cookieStore.get('admin-auth');
    const isAdmin = !!authCookie;

    const client = await clientPromise;
    const db = client.db('SarwaStudio');
    
    // Get blogs from MongoDB
    const blogs = await db.collection('blogs')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    // Convert MongoDB _id to string id and format dates
    const processedBlogs = blogs.map(blog => ({
      id: blog._id.toString(),
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt,
      image: blog.image,
      createdAt: blog.createdAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString(),
      isDraft: blog.isDraft
    }));

    // If not admin, filter out draft posts
    if (!isAdmin) {
      return NextResponse.json(
        processedBlogs.filter(blog => !blog.isDraft).map(blog => ({
          id: blog.id,
          title: blog.title,
          excerpt: blog.excerpt,
          content: blog.content,
          image: blog.image,
          createdAt: blog.createdAt,
          updatedAt: blog.updatedAt,
        }))
      );
    }

    return NextResponse.json(processedBlogs);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Error fetching blog posts' },
      { status: 500 }
    );
  }
}
