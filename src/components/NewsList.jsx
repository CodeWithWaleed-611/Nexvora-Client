import { useState, useEffect } from "react";
import NewsCard from "./NewsCard.jsx";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const newsData = [
  {
    id: 1,
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
    title: "7 home trends that will shape your house in 2021",
    tags: ["Admin", "Interior", "Trends"],
    date: "June 24, 2021",
    link: "#",
  },
  {
    id: 2,
    image: "https://cdn.pixabay.com/photo/2020/08/29/10/24/home-5526691_1280.jpg",
    title: "10 Brilliant Ways To Decorate Your Home",
    tags: ["Admin", "Interior", "Decorate"],
    date: "June 24, 2021",
    link: "#",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/7598128/pexels-photo-7598128.jpeg",
    title: "The Most Inspiring Interior Design Of 2021",
    tags: ["Admin", "Interior", "Interior"],
    date: "July 23, 2021",
    link: "#",
  },
  {
    id: 4,
    image: "https://static.vecteezy.com/system/resources/previews/030/312/110/non_2x/photorealistic-interior-living-room-indoor-stylish-modern-created-with-ai-generative-free-photo.jpg",
    title: "7 home trends that will shape your house in 2021",
    tags: ["Admin", "Interior", "Trends"],
    date: "June 24, 2021",
    link: "#",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/7214726/pexels-photo-7214726.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Minimalist Luxury Living Room Ideas",
    tags: ["Admin", "Interior", "Decorate"],
    date: "June 24, 2021",
    link: "#",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?fm=jpg&q=80&w=1600",
    title: "The Most Inspiring Interior Design Of 2021",
    tags: ["Admin", "Interior", "Interior"],
    date: "July 23, 2021",
    link: "#",
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/7214726/pexels-photo-7214726.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Minimalist Luxury Living Room Ideas",
    tags: ["Admin", "Interior", "Decorate"],
    date: "June 24, 2021",
    link: "#",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?fm=jpg&q=80&w=1600",
    title: "The Most Inspiring Interior Design Of 2021",
    tags: ["Admin", "Interior", "Interior"],
    date: "July 23, 2021",
    link: "#",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?fm=jpg&q=80&w=1600",
    title: "The Most Inspiring Interior Design Of 2021",
    tags: ["Admin", "Interior", "Interior"],
    date: "July 23, 2021",
    link: "#",
  },
  {
    id: 10,
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
    title: "7 home trends that will shape your house in 2021",
    tags: ["Admin", "Interior", "Trends"],
    date: "June 24, 2021",
    link: "#",
  },
  {
    id: 11,
    image: "https://cdn.pixabay.com/photo/2020/08/29/10/24/home-5526691_1280.jpg",
    title: "10 Brilliant Ways To Decorate Your Home",
    tags: ["Admin", "Interior", "Decorate"],
    date: "June 24, 2021",
    link: "#",
  },
  {
    id: 12,
    image: "https://images.pexels.com/photos/7598128/pexels-photo-7598128.jpeg",
    title: "The Most Inspiring Interior Design Of 2021",
    tags: ["Admin", "Interior", "Interior"],
    date: "July 23, 2021",
    link: "#",
  },
];


const ITEMS_PER_PAGE = 9;

const NewsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = newsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // 🔥 Smooth scroll on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // 🔥 Smart pagination logic (with dots)
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">

            {/* Prev */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-full border-2 border-gray-100 flex items-center justify-center transition cursor-pointer
                ${currentPage === 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-100"}`}
            >
              <MdOutlineKeyboardDoubleArrowLeft/>
            </button>

            {/* Pages */}
            {pageNumbers.map((page, i) =>
              page === "..." ? (
                <span key={i} className="px-2 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-full border-2 border-gray-100 flex items-center cursor-pointer justify-center transition
                    ${
                      currentPage === page
                        ? "bg-orange-500 text-white border-orange-500"
                        : "hover:bg-gray-100"
                    }`}
                >
                  {page}
                </button>
              )
            )}

            {/* Next */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-full border-2 border-gray-100 flex items-center justify-center transition cursor-pointer
                ${currentPage === totalPages
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-100"}`}
            >
              <MdOutlineKeyboardDoubleArrowRight/>
            </button>

          </div>
        )}
      </div>
    </section>
  );
};

export default NewsGrid;