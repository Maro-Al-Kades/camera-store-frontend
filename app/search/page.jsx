"use client";

import CategroyNav from "../../components/Category/CategroyNav";
import Product from "../../components/Products/Product";
import useFetch from "../../hooks/useFetch";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function Search() {
  const router = useRouter();
  const searchParams = new useSearchParams(router.search);
  const searchTerm = searchParams.get("query");

  // console.log(searchTerm);

  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );
  // console.log(data);

  return (
    <div className="mb-[30px] pt-44 md:pt-4 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategroyNav />

          <div className="">
            {/* title */}
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {data?.length > 0
                ? `${data.length} results for ${searchTerm}`
                : `no results for ${searchTerm}`}
            </div>
            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

// Thanks God Jesus for everything
