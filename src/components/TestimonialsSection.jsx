import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { CarouselButton } from "./CarouselButton";
import { useCallback, useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Adam Joseph",
    role: "SELLING AGENTS",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ipsum dolor sit amet, consecte",
  },
  {
    id: 2,
    name: "James Carter",
    role: "SELLING AGENTS",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    message:
      "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ipsum dolor sit amet, consecte",
  },
  {
    id: 3,
    name: "Jacob William",
    role: "SELLING AGENTS",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    message:
      "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ipsum dolor sit amet, consecte",
  },
  {
    id: 4,
    name: "Adam Joseph",
    role: "SELLING AGENTS",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ipsum dolor sit amet, consecte",
  },
  {
    id: 5,
    name: "James Carter",
    role: "SELLING AGENTS",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    message:
      "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ipsum dolor sit amet, consecte",
  },
  {
    id: 6,
    name: "Jacob William",
    role: "SELLING AGENTS",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    message:
      "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ipsum dolor sit amet, consecte",
  },
];

// calc number of visible cards
/* ─────────────────────────────────────────
   BREAKPOINTS
   mobile  < 640px  → 1 card
   tablet  640-1023 → 2 cards
   desktop ≥ 1024   → 3 cards
───────────────────────────────────────── */
const getCardsVisible = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const GAP = 20;

function TestimonialCard({ message, name, role, image, style }) {
  return (
    <div
      className="relative bg-white rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.05)] group hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
      style={style}
    >
      <span
        className="absolute bottom-0 left-0 h-0.75 w-0 bg-orange-400 
                       transition-all duration-500 ease-out
                       group-hover:w-full"
      ></span>

      {/* Quote Icon */}
      <FaQuoteLeft className="text-orange-300 text-xl mb-4" />

      {/* Message */}
      <p className="text-gray-600 leading-relaxed text-lg mb-8">{message}</p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-sm font-semibold text-gray-900">{name}</h4>
          <p className="text-xs text-gray-500 tracking-wide">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [cardsWidth, setCardsWidth] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(getCardsVisible);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(null);

  const wrapperRef = useRef(null);

  /* Each step moves exactly one full card + one gap */
  const translateX = (cardsWidth + GAP) * currentIndex;
  const maxIndex = Math.max(0, testimonials.length - cardsVisible);

  /* Measure card width from actual DOM width — no calc() guessing */
  const recalc = useCallback(() => {
    if (!wrapperRef.current) return "null";
    const cv = getCardsVisible();
    const totalWidth = wrapperRef.current.offsetWidth;
    const cw = (totalWidth - GAP * (cv - 1)) / cv;
    setCardsWidth(Math.floor(cw));
  }, []);

  // handle window resize + clamp index + updated VisibleCards
  useEffect(() => {
    let timeout;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const text = getCardsVisible();
        setCardsVisible(text);
        recalc();
      }, 100);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timeout);
    };
  }, [recalc]);

  // ResizeObserver for container-level changes (e.g. panel open/close, sidebars)
  useEffect(() => {
    recalc();
    if (!wrapperRef.current) return;
    const ro = new ResizeObserver(recalc);
    ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [recalc, cardsVisible]);

  useEffect(() => {
    setCurrentIndex((prev) => {
      if (prev > maxIndex) {
        return maxIndex;
      }
      return prev;
    });
  }, [maxIndex]);

  // cards slider function
  const goTo = useCallback(
    (index) => {
      if (transitioning) return;
      const clmaped = Math.max(0, Math.min(index, maxIndex));
      if (currentIndex === clmaped) return;
      setCurrentIndex(clmaped);
      setTransitioning(true);
    },
    [transitioning, currentIndex, maxIndex],
  );

  return (
    <section className="relative py-24 bg-linear-to-b from-[#f6f7fb] to-white overflow-hidden">
      {/* Decorative Large Quote Background */}
      <div className="absolute right-10 top-10 hidden sm:block text-[220px] text-orange-100 font-bold opacity-40 pointer-events-none select-none">
        <FaQuoteRight />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm sm:text-[16px] font-semibold bg-orange-50 text-orange-400 rounded-full mb-4">
            Our Testimonial
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Clients Feedback
          </h2>
        </div>

        {/* Slider */}
        <div className={`relative group/CButton`}>
          {/* Slider Buttons */}
          <div className="absolute w-full z-50 flex justify-between items-center top-1/4 group-hover/CButton:scale-[115%] transition-all duration-1000 ease-in-out">
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
            {/* track */}
            <div
              className="flex "
              style={{
                gap: `${GAP}px`,
                transform: `translateX(-${translateX}px)`,
                transition:
                  transitioning && cardsWidth
                    ? "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    : "none",
                willChange: "transform",
              }}
              onTransitionEnd={() => setTransitioning(false)}
            >
              {testimonials.map((item) => (
                <TestimonialCard
                  key={item.id}
                  message={item.message}
                  name={item.name}
                  role={item.role}
                  image={item.image}
                  style={{
                    width: `${cardsWidth}px`,
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
