import axios from "axios";
import cheerio from "cheerio";
import ProductModel from "../DB/model/ProductModel";
import connectdb from "../DB/connetdb";

const amazonTitle = "#productTitle";
const amazonImage = "#landingImage";
const amazonPrice = ".a-price-whole";
const featureBullets = ".f.a-vertical";
const amazonDiscount = ".savingPriceOverride";

const flipkartTitle = ".B_NuCI";
const flipkartImage = "._396cs4._2amPTt._3qGmMb";
const flipkartPrice = "._30jeq3";
const description = "._1mXcCf.RmoJUa";
const flipkartDiscount = "._3Ay6Sb._31Dcoz";

const getData = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      // Parse the HTML content using cheerio
      const $ = cheerio.load(response.data);
      let title;
      let price;
      let bulletsPoints;
      let discount;
      let imageUrl;

      if (url.includes("flipkart.com")) {
        title = $(flipkartTitle).text().trim();
        let image = $(flipkartImage);
        imageUrl = image.attr("src");
        price = $(flipkartPrice).text().trim().split("₹")[1];
        bulletsPoints = $(description).text().trim();
        discount = $(flipkartDiscount).text().trim().split("off")[0];
      } else if (url.includes("amazon.in")) {
        title = $(amazonTitle).text().trim();
        let image = $(amazonImage);
        imageUrl = image.attr("src");
        price = $(amazonPrice).text().trim().split(".")[0];
        bulletsPoints = $(featureBullets).text().trim();
        discount = $(amazonDiscount).text();
      } else {
        return { success: false, product: {} };
      }
      connectdb();
      const product = await ProductModel.findOne({ url }).select(
        "heighestPrice lowestPrice"
      );
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
            provider: url.includes("flipkart.com") ? "Flipkart" : "Amazon",
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
          provider: url.includes("www.amazon.in") ? "Amazon" : "Flipkart",
        });
        return { success: true, product: { _id: product._id } };
      }
    }
  } catch (error) {
    console.log(error);
    return { success: false, product: {} };
  }
};

export default getData;
