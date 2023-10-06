import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard({ product }) {
  return (
    <div key={product._id} className="basis-1/3 rounded bg-gray-100 overflow-hidden shadow-lg">
      <Image className="w-full h-80" src={product.image} alt={product.title} width={500} height={500} />
      <div className="px-6 py-4">
        <div className="font-bold text-base mb-2">{product.title.length>80?product.title.slice(0,80)+'...':product.title}</div>
       <div className="flex justify-between">
       <p className="text-green-600 text-base">₹{product.currentPrice}</p> <p className="text-blue-500">{product.provider}</p>
       </div>
      </div>
      <div className="px-6 py-4">
        {/* Create a NextLink with the product's ID in the href */}
        <Link
          href={`/product/${product._id}`}
          className="bg-blue-500 hover:bg-blue-700 transition-colors text-white font-bold py-2 px-4 rounded"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
