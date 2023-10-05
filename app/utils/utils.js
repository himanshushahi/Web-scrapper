import axios from "axios";
import cheerio from "cheerio";
import ProductModel from "../DB/model/ProductModel";
import { NextResponse } from "next/server";
import connectdb from "../DB/connetdb";

const amazonTitle = "#productTitle";
const amazonImage = "#landingImage";
const amazonPrice = ".a-price-whole";
const featureBullets = ".f.a-vertical";

const getData = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      // Parse the HTML content using cheerio
      const $ = cheerio.load(response.data);
      const title = $(amazonTitle).text().trim();
      const image = $(amazonImage);
      const imageUrl = image.attr("src");
      const price = $(amazonPrice).text().trim().split(".")[0];
      const bulletsPoints = $(featureBullets).text().trim();
      const discount = $(".savingPriceOverride").text();

      connectdb();
      const product = await ProductModel.findOne({ url });
      if (product) {
        const heighestPrice =
          product.heighestPrice < parseFloat(price.replace(/,/g, ""))
            ? parseFloat(price.replace(/,/g, ""))
            : product.heighestPrice;
        const lowestPrice =
          product.lowestPrice > parseFloat(price.replace(/,/g, ""))
            ? parseFloat(price.replace(/,/g, ""))
            : product.lowestPrice;
        const newProduct = await ProductModel.findOneAndUpdate(
          { url },
          {
            currentPrice: parseFloat(price.replace(/,/g, "")),
            heighestPrice,
            lowestPrice,
            discount,
            provider: "Amazon",
          },
          { new: true }
        ).select("_id");

        return { success: true, product: newProduct };
       
      } else {
        const product = await ProductModel.create({
          title,
          url,
          currentPrice: parseFloat(price.replace(/,/g, "")),
          lowestPrice: parseFloat(price.replace(/,/g, "")),
          highestPrice: parseFloat(price.replace(/,/g, "")),
          image: imageUrl,
          description: bulletsPoints,
          discount,
          provider: "Amazon",
        });
        return { success: true, product: { _id: product._id }}
      }
    }
  } catch (error) {
   return {success:false,product:{}}
  }
};

export default getData;
