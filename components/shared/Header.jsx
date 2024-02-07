"use client";

import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RiShoppingCartFill } from "react-icons/ri";

import Link from "next/link";

import SearchForm from "../SearchForm";
import CategoryNavMobile from "../Category/CategoryNavMobile";
import Cart from "../Cart/Cart";
import Image from "next/image";
import { CartContext } from "../../context/CartContext";

function Header() {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [categoryNavMobile, setCategoryNavMobile] = useState(false);
  return (
      <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
        <div className="container mx-auto">
          <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0">
            <div
              onClick={() => setCategoryNavMobile(true)}
              className="text-3xl xl:hidden cursor-pointer"
            >
              <FiMenu />
            </div>

            <div
              className={`${
                categoryNavMobile ? "left-0" : "-left-full"
              } fixed top-0 bottom-0 z-30 w-full
          h-screen transition-all duration-200`}
            >
              <CategoryNavMobile setCategoryNavMobile={setCategoryNavMobile} />
            </div>

            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={150} height={80} />
            </Link>

            <div className="hidden w-full xl:flex xl:max-w-[734px] ">
              <SearchForm />
            </div>

            <div className="flex items-center gap-x-[10px]">
              <div className="hidden xl:flex uppercase xl:gap-x-1">
                <span className="text-accent">Need Help ? </span> +20 101 434
                4053
              </div>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="relative cursor-pointer"
              >
                <RiShoppingCartFill className="text-2xl" />
                <div
                  className="bg-accent text-white absolute w-[18px] h-[18px] rounded-full top-3 
              -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]"
                >
                  {itemsAmount}
                </div>
              </div>
              {/* Cart */}
              <div
                className={`
              ${isOpen ? "right-0" : "-right-full"}
              bg-transparent backdrop-blur-3xl shadow-xl fixed top-0 bottom-0 w-full z-10
            md:max-w-[500px] transition-all duration-700`}
              >
                <Cart />
              </div>
            </div>
          </div>

          {/* SearchForm */}
          <div className="xl:hidden">
            <SearchForm />
          </div>
        </div>
      </header>
  );
}

export default Header;
