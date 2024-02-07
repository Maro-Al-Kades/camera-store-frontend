import { FiX } from "react-icons/fi";
import useFetch from "../../hooks/useFetch";
import Link from "next/link";

function CategoryNavMobile({ setCategoryNavMobile }) {
  // get categories
  const { data } = useFetch("/categories");
  return (
    <div className="w-full h-full bg-primary p-8">
      {/* Close Icon */}
      <div
        className="flex justify-end mb-8 cursor-pointer"
        onClick={() => setCategoryNavMobile(false)}
      >
        <FiX className="text-3xl text-accent" />
      </div>

      <div className="flex flex-col gap-y-8 ">
        {data?.map((category) => {
          return (
            <Link
              href={`products/${category.id}`}
              className=" text-white uppercase font-medium tracking-wider"
              key={category.id}
            >
              {category.attributes.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryNavMobile;
