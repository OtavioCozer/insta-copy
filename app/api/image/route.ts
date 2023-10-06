import { NextRequest, NextResponse } from "next/server";
import { getClient } from '../../_lib/client'
import { ObjectId } from "mongodb";

export async function GET(request: NextRequest) {
  let image
  const searchParams = request.nextUrl.searchParams
  const objId = new ObjectId(searchParams.get("id") || '')

  const client = getClient()
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const photos = await client.db("Instadb").collection("photos").find({ _id: objId })

    for await (const doc of photos) {
      image = doc.binData.buffer
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  const response = new NextResponse(image)
  response.headers.set('content-type', 'image/jpg');
  return response;
}
