import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";
import SearchComponent from "./components/SearchComponent";

async function getProducts() {
  try {
    const response = await fetch(process.env.DOMAIN_URL + "/api/get-products", {
      method: "GET",
    });
    if(response.ok){
      return response.json();
    }else{
      return {products:{}}
    }
  } catch (error) {
    console.log(error);
  }
}

export default async function Page() {
  const { products } = await getProducts();
  return (
    <div>
      <HeroSection />
      <SearchComponent />
      <div className="flex justify-center">
        <div className=" wrapper flex flex-wrap max-md:justify-center gap-2 mt-2">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
