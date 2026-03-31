import { useState } from "react";
import { Home, Building2, Handshake } from "lucide-react";

const initialServices = [
  {
    id: 1,
    title: "Buy a home",
    description:
      "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    icon: Home,
    highlight: false,
  },
  {
    id: 2,
    title: "Rent a home",
    description:
      "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    icon: Building2,
    highlight: true, // Middle card highlighted
  },
  {
    id: 3,
    title: "Sell a home",
    description:
      "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    icon: Handshake,
    highlight: false,
  },
];

const ServicesSection = () => {
  const [servicesState, setServicesState] = useState(initialServices);

  const onCardHover = (serviceId) => {
    let tempServices;
    tempServices = servicesState.map((service) => {
      if (service.id === serviceId) {
        service.highlight = true;
      } else {
        service.highlight = false;
      }
      return service;
    });
    setServicesState(tempServices);
  };

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <span className="inline-block bg-orange-100 text-orange-500 text-sm sm:text-[16px] font-semibold px-5 py-1 rounded-full mb-4">
          Our Services
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-14">
          Our Main Focus
        </h2>

        {/* Cards Grid */}
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesState.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onMouseEnter={() => onCardHover(service.id)}
                className={`relative bg-white p-10 shadow-md transition-all duration-300 group
                hover:shadow-xl hover:-translate-y-2
                `}
              >
                <span
                  className={`absolute bottom-0 left-0 h-0.75 bg-orange-400 
                       transition-all duration-500 ease-out
                       group-hover:w-full ${service.highlight ? "w-full" : "w-0" } `}
                ></span>

                {/* Icon Wrapper */}
                <div className="flex justify-center mb-6">
                  <div className="bg-orange-50 p-6 rounded-full group-hover:bg-orange-100 transition duration-300">
                    <Icon className="w-10 h-10 text-orange-500" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl cursor-pointer font-bold text-gray-900 mb-4 hover:text-orange-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <button
                  className={`text-sm font-medium cursor-pointer transition duration-300
                  ${
                    service.highlight
                      ? "text-orange-500"
                      : "text-gray-600 group-hover:text-orange-500"
                  }`}
                >
                  Find A Home →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
