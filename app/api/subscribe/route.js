import connectdb from "@/app/DB/connetdb";
import ProductModel from "@/app/DB/model/ProductModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { productId, email } = await req.json();
  if (!productId || !email) {
    return NextResponse.json(
      { success: false, message: "Fill All Required Field" },
      { status: 400 }
    );
  }
  try {
    connectdb();
    const product = await ProductModel.findById(productId);

    if (product) {
      const match = product.subscriber.includes(email);
      if (match) {
        return NextResponse.json(
          { success: false, message: "You Are Already Subscribe This Product" },
          { status: 400 }
        );
      }

      await ProductModel.findByIdAndUpdate(productId, {
        $push: { subscriber: email },
      });

      return NextResponse.json(
        {
          success: true,
          message:
            "Congrats Now You have access to price drop alert on Your email",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Enter Valid Url" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        success: false,
        message: "internal server error",
      },
      { status: 500 }
    );
  }
}
