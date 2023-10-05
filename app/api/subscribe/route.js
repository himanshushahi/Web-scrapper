import connectdb from "@/app/DB/connetdb";
import ProductModel from "@/app/DB/model/ProductModel";
import { NextResponse } from "next/server";

export  async function POST(req) {
  const { productId, email } = await req.json();
  if (!productId || email) {
    return NextResponse.json(
      { success: false, message: "Fill All Required Field" },
      { status: 400 }
    );
  }
  try {
    connectdb()
    const product = await ProductModel.findById(id);
    if (product) {
      await ProductModel.findByIdAndUpdate(productId, {
        $push: { subscribers: email },
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
        return NextResponse.json({ success: false, message: "Enter Valid Url" },{status:400});
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "internal server error",
    },{status:500});
  }
}
