import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { IoArrowForward, IoClose } from "react-icons/io5";
import CartItem from "./CartItem";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Cart() {
  const router = useRouter();
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);
  return (
    <div className="w-full h-full p-4 text-white">
      {/* close */}
      <div>
        <div
          className="text-4xl h-[98px] flex justify-between
          items-center"
        >
          <h2>Your Cart</h2>
          <IoClose
            onClick={() => setIsOpen(false)}
            className="w-20 cursor-pointer"
          />
        </div>
      </div>
      <div className="overflow-y-auto overflow-x-hidden h-[90vh] flex flex-col justify-between">
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        {/* subtotal & total */}
        {cart.length >= 1 && (
          <div className="px-6 py-10 flex flex-col ">
            <div className="mb-4">
              {/* subtotal */}
              <div className="flex justify-between text-lg ">
                <div className="">subtotal</div>
                <div>${total}</div>
              </div>
              {/* total */}
              <div className="flex justify-between text-2xl">
                <div className="">Total</div>
                <div className="text-accent">$ {total}</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="">
              {cart.length >= 1 ? (
                <div className="flex justify-between gap-x-4">
                  <button
                    onClick={clearCart}
                    className="btn btn-accent hover:bg-accent-hover"
                  >
                    clear cart
                  </button>
                  <button
                    onClick={() => router.push(`/checkout?amount=${total}`)}
                    className="btn btn-accent hover:bg-accent-hover flex-1 px-2 gap-x-2"
                  >
                    Checkout
                    <IoArrowForward className="text-lg" />
                  </button>
                </div>
              ) : (
                <div className="text-accent">Your Cart is empty</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
