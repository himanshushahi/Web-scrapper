import connectdb from "../../../DB/connetdb";
import ProductModel from '../../../DB/model/ProductModel'
import getData from '../../../utils/utils'
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest, { params }) {
  const id = params.id;
  try {
   await connectdb();
    const product = await ProductModel.findById(id).select("_id url");
    await getData(product.url);
    const newProducts = await ProductModel.findById(id);
    const moreProducts = await ProductModel.find({ _id: { $ne: id } }) // Exclude the product with the specified _id
      .limit(6)
      .select("title image currentPrice provider");
    return NextResponse.json(
      { product: newProducts, moreProducts },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { product: {}, moreProducts: [] },
      { status: 500 }
    );
  }
}
