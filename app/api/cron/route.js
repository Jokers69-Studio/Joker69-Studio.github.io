import { NextResponse } from 'next/server';

export async function GET(request) {
  // Check for authorization header
  const authHeader = request.headers.get('Authorization');
  const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;
  
  if (!authHeader || authHeader !== expectedAuth) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // Add your cron job logic here
    console.log('Cron job executed at:', new Date().toISOString());
    
    // Example: You could update data, send notifications, etc.
    // await updateSomeData();
    // await sendNotifications();
    
    return NextResponse.json({ 
      ok: true, 
      message: 'Cron job executed successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Cron job error:', error);
    return NextResponse.json({ 
      ok: false, 
      error: error.message 
    }, { status: 500 });
  }
}