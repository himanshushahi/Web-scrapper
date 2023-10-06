"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

function Pagination({documentCount }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageNumbers = Array.from(
    { length: Math.ceil(documentCount/6) },
    (_, index) => index + 1
  );
  return (
    <div className="flex justify-center mt-12">
      <div className="wrapper flex justify-center items-center gap-1">
        {Number(searchParams.get("page")) > 1 && (
          <button
            className="border-none bg-blue-500 text-white rounded py-1 min-w-[25px] transition-colors duration-200 hover:bg-blue-400 px-1"
            onClick={() =>
              router.push(
                `${pathname}?page=${Number(searchParams.get("page")) - 1}`
              )
            }
          >
            <FaRegArrowAltCircleLeft size={25} />
          </button>
        )}

        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`border-none ${Number(searchParams.get('page'))===pageNumber&&'bg-yellow-500 scale-125'} bg-blue-500 text-white rounded py-1 min-w-[25px] mx-1`}
            onClick={() => router.push(`${pathname}?page=${pageNumber}`)}
          >
            {pageNumber}
          </button>
        ))}

        {Math.ceil(documentCount/6) > Number(searchParams.get('page')) && (
          <button
            className="border-none bg-blue-500 text-white rounded py-1 min-w-[25px] transition-colors duration-200 hover:bg-blue-400 px-1"
            onClick={() =>
              router.push(
                `${pathname}?page=${
                  searchParams.get("page") == undefined
                    ? "2"
                    : Number(searchParams.get("page")) + 1
                }`
              )
            }
          >
            <FaRegArrowAltCircleRight size={25} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Pagination;
