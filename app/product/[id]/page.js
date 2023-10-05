import Notify from "@/app/components/Notify";
import ProductCard from "@/app/components/ProductCard";
import Image from "next/image";
import { FaArrowDown, FaArrowUp, FaPercent, FaRupeeSign } from "react-icons/fa";

const getBlog = async (id)=>{
    try {
        const response = await fetch(process.env.DOMAIN_URL+"/api/get-products/"+id);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export default async function Page({params}){
    const {id} = params;
    const {product,moreProducts} = await getBlog(id);
    return(
        <div>
        <div className="flex justify-center py-10 bg-gray-100">
        <div className="flex max-md:gap-4 max-md:flex-col relative wrapper">
          <div className="basis-1/2 h-[300px] max-md:flex justify-center">
            <Image
              src={product.image}
              alt={product.image}
              width={500}
              height={500}
              className=" rounded-md h-full w-full"
            />
          </div>
          <div className="basis-1/2 px-4 ">
            <h2>{product.title}</h2>
            {product.description && <p>{product.description}</p>}
            <div className="grid md:grid-cols-2 gap-2 mt-2">
              <div className="bg-gray-200 rounded-md px-2 py-3 flex gap-1 items-center">
                <FaRupeeSign className="text-green-600" /> {product.currentPrice}
              </div>
              <div className="bg-gray-200 rounded-md px-2 py-3 flex gap-1 items-center">
                <FaArrowDown className="text-green-600" /> {product.lowestPrice}
              </div>
              <div className="bg-gray-200 rounded-md px-2 py-3 flex gap-1 items-center">
                <FaArrowUp className="text-red-600" /> {product.highestPrice}
              </div>
              <div className="bg-gray-200 rounded-md px-2 py-3 flex gap-1 items-center">
                <FaPercent className="text-blue-600" /> {product.discount}
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href={product.url}
                target="_blank"
                className=" rounded px-2 py-2 w-full bg-blue-500 transition-colors duration-300 hover:bg-blue-600 text-center text-white"
              >
                Buy
              </a>
            </div>
            <Notify id={product._id}/>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" wrapper flex max-md:justify-center max-md:px-2 flex-wrap gap-2 mt-2">
          {moreProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      </div>
    )
}