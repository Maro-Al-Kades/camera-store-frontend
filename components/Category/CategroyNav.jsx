import useFetch from "../../hooks/useFetch";
import Link from "next/link";

function CategroyNav() {
  const { data } = useFetch("/categories");

  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="bg-accent py-4 tracking-widest text-white uppercase font-semibold flex items-center justify-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => {
            return (
              <Link
                key={category.id}
                href={`/products/${category.id}`}
                className="uppercase hover:bg-accent p-3 transition-all rounded-b-none rounded-lg border-b-[1px] border-accent"
              >
                {category.attributes.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default CategroyNav;
