import Link from "next/link";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa6";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="pt-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center ">
          <h2 className="h2 uppercase mb-6 font-semibold tracking-widest">
            Subscirbe to our <span className="text-accent">newsletter</span>
          </h2>
          <p className="text-white/70 text-lg">
            Be the first to get the latest news about trends, promotions and
            much more!
          </p>
        </div>
        {/* form */}
        <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14">
          <input
            type="text"
            placeholder="Your email address"
            className="input"
          />
          <button className="btn btn-accent min-w-[150px]">Join</button>
        </form>
        {/* links */}
        <div className="text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9">
          <Link href="/" className="hover:text-white transition-all">
            Returns Policy
          </Link>
          <Link href="/" className="hover:text-white transition-all">
            Track Your Order
          </Link>
          <Link href="/" className="hover:text-white transition-all">
            Shipping & delivery
          </Link>
        </div>

        {/* socials */}
        <div className="flex gap-x-6 max-w-max mx-auto text-2xl mb-10">
          <Link href="/" className="hover:text-accent transition-all">
            <FaYoutube />
          </Link>
          <Link href="/" className="hover:text-accent transition-all">
            <FaFacebook />
          </Link>
          <Link href="/" className="hover:text-accent transition-all">
            <FaInstagram />
          </Link>
          <Link href="/" className="hover:text-accent transition-all">
            <FaTwitter />
          </Link>
        </div>
      </div>

      {/* copyright */}
      <div className="py-10 border-t border-t-white/10">
        <div className="container mx-auto">
          <div className="text-center text-sm text-white/60">
            Copyright &copy; FocusCamera {year}. All Rights Reserved
            <br />
            Made With{" "}
            <Link
              href="https://maro-al-kades.github.io/Maro-Al-Kades/"
              className="text-accent/80"
              target="_blank"
            >
              Maro Asam
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
