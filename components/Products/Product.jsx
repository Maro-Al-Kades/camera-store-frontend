import Image from "next/image";
import Link from "next/link";

function Product({ product }) {
  return (
    <Link href={`/product-details/${product.id}`}>
      <div className="grad w-full h-max rounded-[8px] overflow-hidden relative group border border-accent/30">
        {/* Badge */}
        {product.attributes.isNew ? (
          <div className="absolute bg-accent text-white text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            new
          </div>
        ) : (
          ""
        )}
        {/* Image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <Image
            className="w-[160px] h-[160px] group-hover:scale-90 transition-all duration-300"
            src={product.attributes.image.data.attributes.url}
            key={product.attributes.title}
            width={160}
            height={200}
          />
        </div>
        {/* Text */}
        <div className="px-6 pb-8 flex flex-col">
          {/* category title */}
          <div className="text-sm text-accent capitalize mb-2">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* title */}
          <div className="line-clamp-1 text-[18px] tracking-wide  mb-4 lg:mb-9">
            {product.attributes.title}
          </div>
          {/* price */}
          <div className="text-lg text-accent">
            $ {product.attributes.price}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
