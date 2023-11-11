import { NextRequest, NextResponse } from "next/server";
import {
  S3Client,
  GetObjectCommand,
  S3ClientConfig,
} from "@aws-sdk/client-s3";

export async function GET(request: NextRequest) {
  const s3Client = new S3Client()
  const bucketName = 'my-insta-user'

  const searchParams = request.nextUrl.searchParams
  const key = searchParams.get("id") || ''

  // Read the object.
  const { Body } = await s3Client.send(
    new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    })
  );

  const response = new NextResponse(await Body?.transformToByteArray())
  response.headers.set('content-type', 'image/jpg');
  return response;
}
