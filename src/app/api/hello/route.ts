import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  return NextResponse.json({
    message: 'Hello from Jokers69 Studio API!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  })
}
