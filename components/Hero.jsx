import Image from "next/image";
import CategroyNav from "./Category/CategroyNav";
import MainSlider from "./MainSlider";
import Link from "next/link";

function Hero() {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* Sidebar */}
          <div className="">
            <CategroyNav />
          </div>
          {/* main slider */}
          <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          {/* Promo images */}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px] ">
            {/* 1 */}
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 35% all sony Cameras
                </div>

                <Link href="/" className="uppercase text-accent ">Shop Now</Link>
              </div>
              {/* img */}
              <Image
                src="/promos/1.png"
                alt="promo"
                width={150}
                height={100}
                className="absolute z-20 top-10 right-5"
              />
            </div>
            {/* 2 */}
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 25% all canon Cameras
                </div>

                <Link href="/" className="uppercase text-accent ">Shop Now</Link>
              </div>
              {/* img */}
              <Image
                src="/promos/3.png"
                alt="promo"
                width={150}
                height={100}
                className="absolute z-20 top-10 right-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
