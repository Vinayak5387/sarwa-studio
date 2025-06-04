import clientPromise from '../src/lib/mongodb';
import { hash } from 'bcryptjs';

async function createAdmin() {
  try {
    const email = process.env.ADMIN_EMAIL || 'admin@sarwastudio.com';
    const password = process.env.ADMIN_PASSWORD || 'admin123';

    const client = await clientPromise;
    const db = client.db('SarwaStudio');

    // Check if admin already exists
    const existingAdmin = await db.collection('users').findOne({ email });

    if (existingAdmin) {
      console.log('\x1b[33m%s\x1b[0m', 'Admin user already exists');
      console.log('Email:', email);
      console.log('Password: [Use the password you set in .env.local or the default]');
      return;
    }

    // Create admin user
    const hashedPassword = await hash(password, 12);
    await db.collection('users').insertOne({
      email,
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date()
    });

    console.log('\x1b[32m%s\x1b[0m', 'Admin user created successfully!');
    console.log('Email:', email);
    console.log('Password:', password);
    
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', 'Error creating admin user:', error);
  } finally {
    process.exit();
  }
}

createAdmin();
