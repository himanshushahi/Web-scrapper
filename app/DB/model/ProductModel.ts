import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:String,
    url:String,
    currentPrice:Number,
    lowestPrice:Number,
    highestPrice:Number,
    image:String,
    discount:String,
    description:String,
    subscriber:Array,
    provider:{
        type:String,
        enum:['Amazon','Flipkart']
    },
},{timestamps:true})


const ProductModel = mongoose.models.products ||  mongoose.model('products',ProductSchema);

export default ProductModel;