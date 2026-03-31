import {
  FaThLarge,
  FaList,
  FaSearch,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaVectorSquare,
  FaHeart,
  FaExchangeAlt,
  FaInfoCircle,
} from "react-icons/fa";

// data/properties.js
export const properties = [
  {
    id: 1,
    type: "FOR RENT",
    title: "New Apartment Nice View",
    location: "Belmont Gardens, Chicago",
    beds: 3,
    baths: 2,
    area: 3450,
    price: 34900,
    image: "https://picsum.photos/400/250?random=1",
    agent: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    type: "FOR SALE",
    title: "Modern Apartment Interior",
    location: "Belmont Gardens, Chicago",
    beds: 3,
    baths: 2,
    area: 3450,
    price: 34900,
    image: "https://picsum.photos/400/250?random=2",
    agent: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    type: "FOR RENT",
    title: "Luxury Staircase House",
    location: "Belmont Gardens, Chicago",
    beds: 4,
    baths: 3,
    area: 4200,
    price: 52000,
    image: "https://picsum.photos/400/250?random=3",
    agent: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    type: "FOR SALE",
    title: "Modern Living Space",
    location: "Belmont Gardens, Chicago",
    beds: 2,
    baths: 2,
    area: 2200,
    price: 28000,
    image: "https://picsum.photos/400/250?random=4",
    agent: "https://i.pravatar.cc/40?img=4",
  },
];

// components/PropertyCard.jsx
export function PropertyCard({ property }) {
  return (
    <div className="bg-white overflow-hidden shadow-lg group transition duration-300">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-70 object-cover group-hover:scale-110 
          ease-[cubic-bezier(0.22,1,0.36,1)] transition-transform duration-1000"
        />

        {/* AGENT */}
        <img
          src={property.agent}
          className="absolute top-6 right-7 w-12 h-12 rounded-full border-2 border-white"
        />
      </div>

      {/* CONTENT */}
      <div className="pt-7.5 px-5">
        {/* TAG */}
        <span className="text-base font-medium text-orange-500 ">
          {property.type}
        </span>
        <h3 className="font-bold text-lg lg:text-2xl leading-tight mt-5 mb-4">
          {property.title}
        </h3>

        <p className="text-sm text-gray-500 flex items-center gap-1.5 mb-5">
          <span className="text-orange-500">
            <FaMapMarkerAlt />
          </span>
          {property.location}
        </p>

        <div className="text-sm text-gray-500 mb-5 flex gap-2">
          <div>
            <span className="font-bold">{property.beds}</span> Bed{" "}
          </div>
          <div>
            <span className="font-bold">{property.baths}</span> Bath{" "}
          </div>
          <div>
            <span className="font-bold">{property.area}</span> Sq Ft
          </div>
        </div>

        {/* ACTION ICONS */}
        <div className="flex items-center gap-3 text-gray-400 mb-6">
          <button className="bg-gray-100 hover:text-orange-500 p-3">
            <FaBed />
          </button>
          <button className="bg-gray-100 hover:text-orange-500 p-3">
            <FaHeart />
          </button>
          <button className="bg-gray-100 hover:text-orange-500 p-3">
            <FaInfoCircle />
          </button>
        </div>
      </div>
      {/* PRICE */}
      <div className="text-orange-500 font-bold text-lg p-5 border-t border-t-gray-100">
        ${property.price.toLocaleString()}
        <span className="text-orange-400 text-sm font-medium">/Month</span>
      </div>
    </div>
  );
}

// components/Filters.jsx

const filterSections = [
  {
    title: "Property Type",
    options: [
      "House",
      "Single Family",
      "Apartment",
      "Office Villa",
      "Luxury Home",
      "Studio",
    ],
  },
  {
    title: "Amenities",
    options: [
      "Dishwasher",
      "Floor Coverings",
      "Internet",
      "Build Wardrobes",
      "Supermarket",
      "Kids Zone",
    ],
  },
  {
    title: "Price Range",
    options: ["Low Budget", "Medium", "High Budget"],
  },
];

export function Filters() {
  return (
    <div className="bg-white">
      <h2 className="font-bold text-lg lg:text-2xl mb-3">
        Advance Information
      </h2>
      <p className="text-[12px] text-gray-400 mb-7.5">
        About 9,620 results (0.62 seconds)
      </p>

      <div className="pt-8.5 px-5 pb-10 border-2 border-gray-100">
        {filterSections.map((section, idx) => (
          <div key={idx} className="">
            <h3 className="font-semibold text-lg mb-6">{section.title}</h3>

            {section.options.map((opt, i) => (
              <label
                key={i}
                className="flex items-center justify-between text-sm mb-4 cursor-pointer"
              >
                <div className="flex items-center gap-3 text-gray-500 font-bold">
                  <input type="checkbox" className=" accent-orange-500" />
                  {opt}
                </div>
                <span className="text-gray-400 text-sm font-bold">
                  {(Math.random() * 4000).toFixed(0)}
                </span>
              </label>
            ))}
            <div
              className={`${idx == filterSections.length - 1 ? "hidden" : ""} my-8 w-full h-0.5 bg-gray-100`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}



// pages/PropertyListing.jsx
export default function PropertyListing() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto w-full p-4 sm:px-6 lg:px-8 flex flex-wrap gap-7.5">
        {/* LEFT */}
        <div className="flex-1">
          {/* TOP BAR */}
          <div className="flex flex-wrap items-center gap-7.5 mb-12">
            <div className="flex gap-6">
              <button className="bg-white text-3xl text-orange-500">
                <FaThLarge />
              </button>
              <button className="bg-white text-3xl text-gray-500">
                <FaList />
              </button>
            </div>

            <div className="flex flex-wrap gap-7.5">
              <select className="min-w-47.5 p-3 border-2 bg-white text-sm font-semibold text-gray-400  border-gray-100">
                <option>Default Sorting</option>
              </select>

              <select className="min-w-47.5 p-3 border-2 bg-white text-sm font-semibold text-gray-400 border-gray-100">
                <option>Per Page: 12</option>
              </select>
            </div>
          </div>

          {/* SEARCH */}
          <div className="flex mb-7.5">
            <input
              className="flex-1 p-3 border-2 border-gray-100 bg-gray-50 outline-none"
              placeholder="Search your keyword..."
            />
            <button className="bg-orange-500 px-5 text-white rounded-r">
              <FaSearch />
            </button>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 gap-7.5">
            {properties.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:max-w-[320px]">
          <Filters />
        </div>
      </div>
    </div>
  );
}
