import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

let cachedClient = null
async function getDb() {
  if (cachedClient) return cachedClient.db(process.env.DB_NAME || 'kinetalk')
  const client = new MongoClient(process.env.MONGO_URL)
  await client.connect()
  cachedClient = client
  return client.db(process.env.DB_NAME || 'kinetalk')
}

export async function GET(request, { params }) {
  const path = (params?.path || []).join('/')
  if (path === 'health' || path === '') {
    return NextResponse.json({ status: 'ok', service: 'kinetalk-api' })
  }
  if (path === 'leads') {
    try {
      const db = await getDb()
      const leads = await db.collection('leads').find({}).sort({ createdAt: -1 }).limit(100).toArray()
      return NextResponse.json({ leads })
    } catch (e) {
      return NextResponse.json({ error: e.message }, { status: 500 })
    }
  }
  return NextResponse.json({ error: 'not found' }, { status: 404 })
}

export async function POST(request, { params }) {
  const path = (params?.path || []).join('/')
  if (path === 'leads') {
    try {
      const body = await request.json()
      const required = ['name', 'email', 'company']
      for (const k of required) {
        if (!body[k] || String(body[k]).trim() === '') {
          return NextResponse.json({ error: `Missing field: ${k}` }, { status: 400 })
        }
      }
      const doc = {
        id: uuidv4(),
        type: body.type || 'demo', // 'demo' | 'sales'
        name: String(body.name).trim(),
        email: String(body.email).trim().toLowerCase(),
        company: String(body.company).trim(),
        phone: body.phone ? String(body.phone).trim() : '',
        country: body.country ? String(body.country).trim() : '',
        useCase: body.useCase || 'both',
        message: body.message ? String(body.message).trim() : '',
        source: body.source || 'website',
        createdAt: new Date(),
      }
      const db = await getDb()
      await db.collection('leads').insertOne(doc)
      return NextResponse.json({ ok: true, id: doc.id, message: 'Thanks! Our team will reach out within one business day.' })
    } catch (e) {
      return NextResponse.json({ error: e.message }, { status: 500 })
    }
  }
  return NextResponse.json({ error: 'not found' }, { status: 404 })
}
