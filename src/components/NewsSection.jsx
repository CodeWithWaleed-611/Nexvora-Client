import { useState, useEffect, useCallback, useRef } from "react";
import { CarouselButton } from "./CarouselButton.jsx";
import NewsCard from "./NewsCard.jsx";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */


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
];


/* ─────────────────────────────────────────
   BREAKPOINTS
   mobile  < 640px  → 1 card
   tablet  640-1023 → 2 cards
   desktop ≥ 1024   → 3 cards
───────────────────────────────────────── */
function getCardsVisible() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

const GAP = 20; // px — single source of truth, used in both JS calc and inline style

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(getCardsVisible);
  const [cardWidth, setCardWidth] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const wrapperRef = useRef(null);

  const maxIndex = Math.max(0, newsData.length - cardsVisible);
  /* Measure card width from actual DOM width — no calc() guessing */
  const recalc = useCallback(() => {
    if (!wrapperRef.current) return;
    const cv = getCardsVisible();
    const totalWidth = wrapperRef.current.offsetWidth;
    const cw = (totalWidth - GAP * (cv - 1)) / cv;
    setCardWidth(Math.floor(cw));
  }, []);

  /* Handle window resize — update cardsVisible + clamp index */
  useEffect(() => {
    let timeout;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const next = getCardsVisible();
        setCardsVisible(next);
        recalc();
      }, 100);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timeout);
    };
  }, [recalc, currentIndex]);

  /* Updating currentIndex value if the maxIndex is less then currentIdex */
  useEffect(() => {
    setCurrentIndex((prev) => {
      if (prev > maxIndex) {
        return maxIndex;
      }
      return prev;
    });
  }, [maxIndex]);

  /* ResizeObserver for container-level changes (e.g. panel open/close, sidebars) */
  useEffect(() => {
    recalc();
    if (!wrapperRef.current) return;
    const ro = new ResizeObserver(recalc);
    ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [recalc, cardsVisible]);

  const goTo = useCallback(
    (index) => {
      if (transitioning) return;
      const clamped = Math.max(0, Math.min(index, maxIndex));
      if (clamped === currentIndex) return;
      setCurrentIndex(clamped);
      setTransitioning(true);
    },
    [transitioning, currentIndex, maxIndex],
  );

  /* Each step moves exactly one full card + one gap */
  const translateX = currentIndex * (cardWidth + GAP);

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-500 text-sm sm:text-[16px] font-semibold px-4 py-1 rounded-full mb-4">
            News & Blogs
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Latest News Feeds
          </h2>
        </div>

        {/* Slider */}
        <div className="relative group/CButton">

          {/* Slider Buttons */}
          <div className="absolute w-full z-50 flex justify-between items-center top-1/4 group-hover/CButton:scale-[110%] transition-all duration-1000 ease-in-out">
            {/* Prev button */}
            <span className="hidden group-hover/CButton:block">
              <CarouselButton
                direction="left"
                onClick={() => goTo(currentIndex - 1)}
              />
            </span>

            {/* Next button */}
            <span className="hidden group-hover/CButton:block transition-all duration-1000">
              <CarouselButton
                direction="right"
                onClick={() => goTo(currentIndex + 1)}
              />
            </span>
          </div>

          {/* Overflow mask */}
          <div ref={wrapperRef} className="overflow-hidden">
            {/* Track */}
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(-${translateX}px)`,
                // Only animate when we have a real width — prevents janky first render
                transition:
                  cardWidth && transitioning
                    ? "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    : "none",
                willChange: "transform",
              }}
              onTransitionEnd={() => setTransitioning(false)}
            >
              {newsData.map((item) => (
                <NewsCard
                  key={item.id}
                  item={item}
                  style={{
                    width: `${cardWidth}px`,
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center pt-12">
            {newsData.map(
              (item) =>
                item.id <= maxIndex + 1 && (
                  <div
                    key={item.id}
                    className={`p-1 rounded-full ${item.id === currentIndex + 1 ? "bg-orange-500" : "bg-gray-300"}`}
                  ></div>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
