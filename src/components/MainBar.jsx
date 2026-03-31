import {Link} from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import { MdOutlinePerson2 } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

export function useMediaQuery(query) {
  const getMatches = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState(getMatches);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);

    const onChange = (e) => setMatches(e.matches);

    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    } else {
      mql.addListener(onChange);
      return () => mql.removeListener(onChange);
    }
  }, [query]);
  return matches;
}

function useSticky(threshold = 0, minWidthPx = 1024) {
  const isLaptop = useMediaQuery(`(min-width: ${minWidthPx}px)`);
  const [isSticky, setIsSticky] = useState(() =>
    typeof window !== "undefined"
      ? window.scrollY > threshold && isLaptop
      : false,
  );
  const ticking = useRef(false);
  useEffect(() => {
    const onScroll = () => {
      if (!isLaptop) {
        setIsSticky(false);
        return;
      }

      const getScroll = () =>
        typeof window !== "undefined" ? window.scrollY : 0;
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          setIsSticky(getScroll() > threshold);
          ticking.current = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLaptop, threshold]);

  return { isSticky, isLaptop };
}

const MainBar = () => {
  const { isSticky, isLaptop } = useSticky(500, 1280);

  return (
    <>
      {/*-------- MAIN NAVBAR --------*/}
      <div
        className={[
          "w-full bg-white transition-all duration-300",
          isSticky && isLaptop
            ? "fixed top-0 left-0 z-[9999] shadow-2xl"
            : "relative",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={`container mx-auto flex flex-col items-center justify-center gap-4 px-6 ${isSticky && isLaptop ? "py-5" : "py-8"} font-medium text-lg sm:flex-row sm:justify-between`}>
          {/* Logo */}
          <div className="">
            <div></div>
            <span>Nexvora</span>
          </div>

          {/* Menu */}
          <nav className="hidden xl:flex items-center text-gray-700 gap-8">
            <Link to="/" className="">
              Home+
            </Link>
            <Link to="/about" className="">
              About+
            </Link>
            <Link to="/shop" className="">
              Shop+
            </Link>
            <Link to="/news" className="">
              News+
            </Link>
            <Link to="/" className="">
              Pages+
            </Link>
            <Link to="/contact" className="">
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4 text-2xl text-gray-700">
            <button className="p-3 hover:bg-orange-500 shadow-xl transition-colors duration-300">
              <IoSearch />
            </button>
            <button className="p-3 hover:bg-orange-500 shadow-xl transition-colors duration-300">
              <MdOutlinePerson2 />
            </button>
            <button className="p-3 hover:bg-orange-500 shadow-xl transition-colors duration-300">
              <FiShoppingCart />
            </button>
            <button className="p-3 hover:bg-orange-500 shadow-xl transition-colors duration-300 xl:hidden">
              <IoMdMenu />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBar;
