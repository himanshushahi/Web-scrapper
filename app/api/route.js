import { NextResponse } from "next/server";
import getData from "../utils/utils";

export async function POST(req) {
  const { url } = await req.json();
  const {success,product} = await getData(url);
  if (success) {
    return NextResponse.json({success,product}, { status: 200 });
  } else {
    return NextResponse.json({success,product}, { status: 500 });
  }
}
