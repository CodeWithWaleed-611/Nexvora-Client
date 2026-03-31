import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

const apartmentData = {
  studio: {
    title: "The Studio",
    description:
      "Enim ad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore et dolore magna aliqua.",
    details: [
      { label: "Total Area", value: "2800 Sq. Ft" },
      { label: "Bedroom", value: "150 Sq. Ft" },
      { label: "Bathroom", value: "45 Sq. Ft" },
      { label: "Balcony/Pets", value: "Allowed" },
      { label: "Lounge", value: "650 Sq. Ft" },
    ],
    image: "/src/assets//images/apartment-preview.png",
  },
  deluxe: {
    title: "Deluxe Portion",
    description:
      "Enim ad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore et dolore magna aliqua.",
    details: [
      { label: "Total Area", value: "2800 Sq. Ft" },
      { label: "Bedroom", value: "150 Sq. Ft" },
      { label: "Bathroom", value: "45 Sq. Ft" },
      { label: "Balcony/Pets", value: "Allowed" },
      { label: "Lounge", value: "650 Sq. Ft" },
    ],
    image: "/src/assets//images/apartment-preview.png",
  },
  penthouse: {
    title: "Penthouse",
    description:
      "Enim ad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore et dolore magna aliqua.",
    details: [
      { label: "Total Area", value: "2800 Sq. Ft" },
      { label: "Bedroom", value: "150 Sq. Ft" },
      { label: "Bathroom", value: "45 Sq. Ft" },
      { label: "Balcony/Pets", value: "Allowed" },
      { label: "Lounge", value: "650 Sq. Ft" },
    ],
    image: "/src/assets//images/apartment-preview.png",
  },
  garden: {
    title: "Top Garden",
    description:
      "Enim ad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore et dolore magna aliqua.",
    details: [
      { label: "Total Area", value: "2800 Sq. Ft" },
      { label: "Bedroom", value: "150 Sq. Ft" },
      { label: "Bathroom", value: "45 Sq. Ft" },
      { label: "Balcony/Pets", value: "Allowed" },
      { label: "Lounge", value: "650 Sq. Ft" },
    ],
    image: "/src/assets//images/apartment-preview.png",
  },
  double: {
    title: "Double Height",
    description:
      "Enim ad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore et dolore magna aliqua.",
    details: [
      { label: "Total Area", value: "2800 Sq. Ft" },
      { label: "Bedroom", value: "150 Sq. Ft" },
      { label: "Bathroom", value: "45 Sq. Ft" },
      { label: "Balcony/Pets", value: "Allowed" },
      { label: "Lounge", value: "650 Sq. Ft" },
    ],
    image: "/src/assets//images/apartment-preview.png",
  },
};

export default function ApartmentsSection() {
  const [activeTab, setActiveTab] = useState("deluxe");

  const tabs = [
    { id: "studio", label: "The Studio" },
    { id: "deluxe", label: "Deluxe Portion" },
    { id: "penthouse", label: "Penthouse" },
    { id: "garden", label: "Top Garden" },
    { id: "double", label: "Double Height" },
  ];

  const [current, setCurrent] = useState(apartmentData["deluxe"]);

  useEffect(() => {
    setCurrent(apartmentData[activeTab]);
  }, [activeTab]);

  return (
    <section className="bg-white-100">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Top Label */}
        <div className="text-center mb-6">
          <span className="text-sm sm:text-[16px] font-semibold bg-orange-100 text-orange-500 px-4 py-1 rounded-full">
            Apartment Sketch
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-6">Apartments Plan</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-2 transition duration-300 ${
                activeTab === tab.id
                  ? "text-orange-500 font-semibold"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500" />
              )}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Info Card */}
          <div className="bg-orange-500 text-white p-10">
            <h3 className="text-2xl font-semibold mb-4">{current.title}</h3>

            <p className="text-sm leading-relaxed mb-6 opacity-90">
              {current.description}
            </p>

            <div className="space-y-3">
              {current.details.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b border-white/30 pb-1"
                >
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={current.image}
              alt="Floor Plan"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="relative h-86 w-full bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&h=400&fit=crop')] mt-28 bg-fixed bg-cover bg-no-repeat">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-full bg-white text-orange-500">
          <FaPlay/>

        </div>
      </div>
    </section>
  );
}
