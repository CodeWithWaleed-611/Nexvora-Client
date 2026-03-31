import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function CarouselButton({ direction = "left", onClick }) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className={`
        group
        w-12 h-12
        rounded-full
        bg-white
        flex items-center justify-center
        shadow-[0_8px_25px_rgba(0,0,0,0.08)]
        transition-all duration-300 ease-out
        hover:scale-110
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)]
        active:scale-95
        cursor-pointer
      `}
    >
      {isLeft ? (
        <FaChevronLeft className="text-gray-700 text-sm transition-transform duration-300 group-hover:-translate-x-1" />
      ) : (
        <FaChevronRight className="text-gray-700 text-sm transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}