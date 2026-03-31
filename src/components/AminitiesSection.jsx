import {
  FaCar,
  FaSwimmingPool,
  FaShieldAlt,
  FaStethoscope,
  FaBook,
  FaBed,
  FaHome,
  FaChild,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const amenities = [
  { id: 1, title: "Parking Space", icon: FaCar },
  { id: 2, title: "Swimming Pool", icon: FaSwimmingPool },
  { id: 3, title: "Private Security", icon: FaShieldAlt },
  { id: 4, title: "Medical Center", icon: FaStethoscope },
  { id: 5, title: "Library Area", icon: FaBook },
  { id: 6, title: "King Size Beds", icon: FaBed },
  { id: 7, title: "Smart Homes", icon: FaHome },
  { id: 8, title: "Kid’s Playland", icon: FaChild },
];

function AmenityCard({ title, Icon }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:bg-orange-500 transition-all duration-300 py-10 px-5 text-center">
      {/* Icon Circle */}
      <div className="mx-auto mb-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-50 flex items-center justify-center group-hover:scale-110 transition">
        <Icon className="text-orange-400 text-3xl" />
      </div>

      {/* Title */}
      <h4 className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-800 my-5">{title}</h4>

      {/* Bottom Decorative Dot */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center shadow-3xl">
        <HiOutlineArrowNarrowRight className="text-gray-500 text-2xl" />
      </div>
    </div>
  );
}

export default function AminitiesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 text-sm sm:text-[16px] font-semibold bg-orange-50 text-orange-400 rounded-full mb-4">
            Our Amenities
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Building Amenities
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 sm:gap-x-8 gap-y-15">
          {amenities.map((item) => (
            <AmenityCard key={item.id} title={item.title} Icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
