import { NextRequest, NextResponse } from "next/server";

import { getImages } from "@/app/lib/client";
import { auth } from "../auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  const { id } = await auth() as any
  const result = Array.from(await getImages(id))
  const page = parseInt(request.nextUrl.searchParams.get("page") || "0")
  const pageSize = parseInt(request.nextUrl.searchParams.get("page_size") || "3")
  const offset = page * pageSize

  const r = result.slice(offset, offset + pageSize)
  return NextResponse.json(r);
}
