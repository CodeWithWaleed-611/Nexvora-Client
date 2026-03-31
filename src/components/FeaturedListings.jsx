import { Shrink } from "lucide-react";
import PropertyCard from "./PropertyCard.jsx";
import { useState, useEffect, useCallback, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CarouselButton } from "./CarouselButton.jsx";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const properties = [
  {
    id: 1,
    badge: "FOR RENT",
    badgeColor: "bg-green-500",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    price: "$34,900",
    period: "/Month",
    title: "Beautiful Flat in Manhattan",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 3450,
    location: "Belmont Gardens, Chicago",
    agent: "William Seklo",
    agentRole: "Estate Agents",
    agentImg: "https://i.pravatar.cc/40?img=11",
  },
  {
    id: 2,
    badge: "FOR RENT",
    badgeColor: "bg-green-500",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop",
    price: "$34,900",
    period: "/Month",
    title: "New Apartment Nice View",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 3450,
    location: "Belmont Gardens, Chicago",
    agent: "William Seklo",
    agentRole: "Estate Agents",
    agentImg: "https://i.pravatar.cc/40?img=12",
  },
  {
    id: 3,
    badge: "FOR SALE",
    badgeColor: "bg-orange-500",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    price: "$34,900",
    period: "/Month",
    title: "Modern Apartments",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 3450,
    location: "Belmont Gardens, Chicago",
    agent: "William Seklo",
    agentRole: "Estate Agents",
    agentImg: "https://i.pravatar.cc/40?img=13",
  },
  {
    id: 4,
    badge: "FOR RENT",
    badgeColor: "bg-green-500",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    price: "$34,900",
    period: "/Month",
    title: "Comfortable Apartment",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 3450,
    location: "Belmont Gardens, Chicago",
    agent: "William Seklo",
    agentRole: "Estate Agents",
    agentImg: "https://i.pravatar.cc/40?img=14",
  },
  {
    id: 5,
    badge: "FOR SALE",
    badgeColor: "bg-orange-500",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
    price: "$42,000",
    period: "/Month",
    title: "Luxury Villa Estate",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 4200,
    location: "Belmont Gardens, Chicago",
    agent: "William Seklo",
    agentRole: "Estate Agents",
    agentImg: "https://i.pravatar.cc/40?img=15",
  },
  {
    id: 6,
    badge: "FOR RENT",
    badgeColor: "bg-green-500",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop",
    price: "$28,500",
    period: "/Month",
    title: "Cozy Studio Downtown",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 2100,
    location: "Belmont Gardens, Chicago",
    agent: "William Seklo",
    agentRole: "Estate Agents",
    agentImg: "https://i.pravatar.cc/40?img=16",
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

const FeaturedListings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(getCardsVisible);
  const [cardWidth, setCardWidth] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const wrapperRef = useRef(null);

  const maxIndex = Math.max(0, properties.length - cardsVisible);
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
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-500 text-sm sm:text-[16px] font-semibold px-4 py-1 rounded-full mb-4">
            Properties
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Featured Listings
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
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  style={{
                    width: `${cardWidth}px`,
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center pt-12">
            {properties.map(
              (property) =>
                property.id <= maxIndex + 1 && (
                  <div
                    key={property.id}
                    className={`p-1 rounded-full ${property.id === currentIndex + 1 ? "bg-orange-500" : "bg-gray-300"}`}
                  ></div>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
