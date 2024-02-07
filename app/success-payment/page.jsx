"use client";

import { useRouter } from "next/navigation";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

function SuccessPayment() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-10 text-center md:mt-0 mt-44">
      <div className="text-[150px] text-accent">
        <IoCheckmarkDoneSharp />
      </div>

      <div className="text-5xl">
        <h2>Payment Done Successfully !</h2>
      </div>

      <button
        className="btn btn-accent text-xl mb-10"
        onClick={() => router.push("/")}
      >
        Go to Home Page
      </button>
    </div>
  );
}

export default SuccessPayment;
