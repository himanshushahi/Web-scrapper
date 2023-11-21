import { NextRequest, NextResponse } from "next/server";
import getData from "../utils/utils";

export async function POST(req:NextRequest) {
  const { url } = await req.json();
  const {success,product}:{success:boolean,product:any} = await getData(url);
  if (success) {
    return NextResponse.json({success,product}, { status: 200 });
  } else {
    return NextResponse.json({success,product}, { status: 500 });
  }
}
