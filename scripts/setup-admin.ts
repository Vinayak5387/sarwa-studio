import clientPromise from '@/lib/mongodb';
import { hash } from 'bcryptjs';

async function setupAdmin() {
  try {
    const client = await clientPromise;
    const db = client.db('SarwaStudio');

    // Check if admin user already exists
    const existingAdmin = await db.collection('users').findOne({
      email: process.env.ADMIN_EMAIL
    });

    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Create admin user
    const hashedPassword = await hash(process.env.ADMIN_PASSWORD || 'admin123', 12);
    await db.collection('users').insertOne({
      email: process.env.ADMIN_EMAIL || 'admin@sarwastudio.com',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date()
    });

    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error setting up admin user:', error);
  } finally {
    process.exit();
  }
}

setupAdmin();
