import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);
  const imageUrl = item.attributes.image.data.attributes.url;

  return (
    <div className="flex gap-x-8 border border-accent/40 rounded-lg p-2 bg-pink-50/5">
      <Link href={`${item.id}`}>
        <Image
          width={70}
          height={70}
          src={imageUrl}
          alt={item.attributes.title}
        />
      </Link>

      <div className="flex-1">
        {/* title and remove icon */}
        <div className="flex gap-x-4 mb-3">
          <Link href={`${item.id}`} className="line-clamp-1">
            {item.attributes.title}
          </Link>

          <div
            onClick={() => removeFromCart(item.id)}
            className="cursor-pointer text-[24px] hover:text-accent transition-all"
          >
            <IoClose />
          </div>
        </div>

        {/* price */}
        <div>
          <span className="text-accent text-lg font-bold">
            <span className="text-white">price:</span> $
            {item.attributes.price * item.amount}
          </span>
        </div>
        <div className="text-accent text-md"><span className="text-white">number:</span>  {item.amount}</div>
      </div>
    </div>
  );
}

export default CartItem;
