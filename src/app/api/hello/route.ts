import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Hello from Jokers69 Studio API!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  
  return NextResponse.json({
    message: 'Received your data!',
    data: body,
    timestamp: new Date().toISOString()
  })
}
