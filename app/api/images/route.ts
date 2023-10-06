import { NextRequest, NextResponse } from "next/server";
import { getClient } from '../../_lib/client'

export async function GET(request: NextRequest) {
  const ids = []
  const client = getClient()
  
  const searchParams = request.nextUrl.searchParams
  const length = searchParams.get("length") || ''
  console.log('route', length)


  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const photos = await client.db("Instadb").collection("photos").find()

    for await (const doc of photos) {
      ids.push(doc._id)
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  return NextResponse.json(ids);
}
