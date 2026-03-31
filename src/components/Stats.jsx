import { FaChartArea } from "react-icons/fa6";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { GiTowTruck } from "react-icons/gi";
import { RiSofaLine } from "react-icons/ri";


const Stats = () => {
  const stats = [
    { number: "560+", label: "Total Area Sq", icon: <FaChartArea/>, },
    { number: "197K+", label: "Apartments Sold", icon: <PiBuildingApartmentLight/>, },
    { number: "268+", label: "Total Constructions", icon: <GiTowTruck/>, },
    { number: "340+", label: "Apartio Rooms", icon: <RiSofaLine/>, },
  ];

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, i) => (
          <div key={i}>
            <div className="text-7xl text-orange-500 flex justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-4">
              {item.number}
            </h3>
            <p className="text-gray-500 font-bold mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
