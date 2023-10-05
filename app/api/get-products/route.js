import connectdb from "@/app/DB/connetdb";
import ProductModel from "@/app/DB/model/ProductModel";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        connectdb()
        const products = await ProductModel.find().select('title currentPrice image');
        return NextResponse.json({products},{status:200})
      } catch (error) {
        return NextResponse.json({
          products:[]
        })
      }
}
