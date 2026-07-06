import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  return NextResponse.json({ status: 'ok', service: 'kinetalk' })
}

export async function POST(request, { params }) {
  const body = await request.json().catch(() => ({}))
  return NextResponse.json({ received: body, status: 'ok' })
}
