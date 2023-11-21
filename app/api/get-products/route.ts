import connectdb from "../../DB/connetdb";
import ProductModel from "../../DB/model/ProductModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  try {
    const limit = 6;
    const currentPage = req.nextUrl.searchParams.get("page") || 1;
    const skip = (Number(currentPage) - 1) * limit;

   await connectdb(); // Assuming this function sets up your database connection

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
