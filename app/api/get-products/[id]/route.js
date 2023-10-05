import connectdb from "@/app/DB/connetdb";
import ProductModel from "@/app/DB/model/ProductModel";
import { NextResponse } from "next/server";

export async function GET(req,{ params }) {
  const id = params.id;
  try {
    connectdb();
    const product = await ProductModel.findById(id);
    const moreProducts = await ProductModel.find({ _id: { $ne: id } }) // Exclude the product with the specified _id
      .limit(6)
      .select("title image currentPrice");
    return NextResponse.json({ product, moreProducts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { product: {}, moreProducts: [] },
      { status: 500 }
    );
  }
}
