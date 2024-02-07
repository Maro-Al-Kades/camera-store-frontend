"use client";

import { useParams } from "next/navigation";
import useFetch from "../../../hooks/useFetch";
import RelatedProducts from "../../../components/Products/RelatedProducts";
import { CartContext } from "../../../context/CartContext";
import { FaCartPlus } from "react-icons/fa6";
import Image from "next/image";
import { useContext } from "react";

function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  if (!data) {
    return <div className="container mx-auto">Loading....</div>;
  }

  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  const imageUrl = data[0].attributes.image.data.attributes.url;

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div
            className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center
          items-center p-5 border border-accent/45"
          >
            {/* Use the image URL directly without prefixing */}
            <Image
              width={350}
              height={350}
              src={imageUrl}
              alt={data[0].attributes.title}
              className=""
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* Category title */}
            <div className="uppercase text-accent text-lg font-medium mb-2 ">
              {data[0].attributes.categories.data[0].attributes.title} Cameras
            </div>
            {/* title */}
            <h2 className="h2 mb-4">{data[0].attributes.title}</h2>
            {/* desc */}
            <p className="mb-12">{data[0].attributes.description}</p>
            {/* Price & btn */}
            <div className="flex items-center gap-x-8">
              <div className="text-3xl text-accent font-semibold">
                $ {data[0].attributes.price}
              </div>
              <button
                onClick={() => addToCart(data, id)}
                className="btn btn-accent flex items-center justify-center gap-2"
              >
                Add to Cart <FaCartPlus className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
}

export default ProductDetails;
