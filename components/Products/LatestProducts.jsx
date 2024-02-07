import useFetch from "../../hooks/useFetch";
import ProductSlider from "../../components/Products/ProductSlider";

function LatestProducts() {
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");

  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left font-semibold"><span className="text-accent">Latest</span> Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
}

export default LatestProducts;
