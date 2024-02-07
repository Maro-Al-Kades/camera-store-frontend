"use client";

import React, { Suspense, useEffect, useState } from "react"; // Import Suspense
import CategoryNav from "../../components/Category/CategroyNav";
import Product from "../../components/Products/Product";
import useFetch from "../../hooks/useFetch";
import { useRouter } from "next/navigation"; // Corrected import

function SearchContent() {
  const router = useRouter();
  // Initialize searchTerm state
  const [searchTerm, setSearchTerm] = useState('');

  // Use useEffect to set searchTerm when router.query is updated
  useEffect(() => {
    // Check both if router and router.query are defined
    if (router && router.query && router.query.query) {
      setSearchTerm(router.query.query);
    }
  }, [router, router.query]);
  

  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains=${searchTerm}]`
  );

  return (
    <div className="mb-[30px] pt-44 md:pt-4 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav />

          <div className="">
            {/* Conditional rendering based on searchTerm */}
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {data?.length > 0
                ? `Results for '${searchTerm}'`
                : searchTerm ? `No results for '${searchTerm}'` : 'Enter a search term'}
            </div>
            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}

export default Search;
