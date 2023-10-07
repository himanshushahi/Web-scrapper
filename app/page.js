import HeroSection from "./components/HeroSection";
import Pagination from "./components/Pagination";
import ProductCard from "./components/ProductCard";
import SearchComponent from "./components/SearchComponent";

async function getProducts(page) {
  try {
    const response = await fetch(`${process.env.DOMAIN_URL}/api/get-products?page=${page}`,{next:{revalidate:300}});

    if (response.ok) {
      return response.json();
    } else {
      return { products: [] };
    }
  } catch (error) {
    console.log(error);
  }
}

export default async function Page({_,searchParams}) {
  const { products,count } = await getProducts(searchParams.page);
  return (
    <div>
      <HeroSection />
      <SearchComponent />
      <section className="flex justify-center" >
        <div className=" wrapper flex flex-wrap max-md:justify-center mt-2">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </section>
      <Pagination documentCount={count}/>
    </div>
  );
}
