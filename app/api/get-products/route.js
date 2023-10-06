import connectdb from "@/app/DB/connetdb";
import ProductModel from "@/app/DB/model/ProductModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const limit = 6;
    const currentPage = await req.nextUrl.searchParams.get("page") || 1;
    const skip = (currentPage - 1) * limit;

    connectdb(); // Assuming this function sets up your database connection

    const products = await ProductModel.find()
      .select("title currentPrice image provider")
      .skip(skip)
      .limit(limit);

      const count = await ProductModel.countDocuments();

    return NextResponse.json({ products,count }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ products: [] }, { status: 500 });
  }
}
