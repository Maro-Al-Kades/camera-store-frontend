"use client";

import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation"; // Import useRouter from next/router

function SearchForm() {
  const router = useRouter(); // Use useRouter instead of useNavigate
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    if (searchTerm.length > 0) {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    } else {
      setIsAnimating(true);
      // console.log("Please search for something...");
    }
  };

  return (
    <form
      className={`${
        isAnimating ? "animate-shake" : "animate-none"
      } w-full relative`}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleSearchInput}
        type="text"
        className="input"
        placeholder="Search for a product..."
        value={searchTerm}
      />
      <button
        className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none"
        type="submit"
      >
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
}

export default SearchForm;
