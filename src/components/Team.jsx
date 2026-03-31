import { useState } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const initialAgents = [
  {
    id: 1,
    image:
      "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/team/4.jpg",
    name: "Rosalina D. William",
    designation: "Real Estate Broker",
    socialAccounts: [
      { type: "facebook", url: "#", icon: <Facebook /> },
      { type: "twitter", url: "#", icon: <Twitter /> },
      { type: "linkedin", url: "#", icon: <Linkedin /> },
    ],
  },
  {
    id: 2,
    image:
      "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/team/2.jpg",
    name: "Rosalina D. William",
    designation: "Real Estate Broker",
    socialAccounts: [
      { type: "facebook", url: "#", icon: <Facebook /> },
      { type: "twitter", url: "#", icon: <Twitter /> },
      { type: "linkedin", url: "#", icon: <Linkedin /> },
    ],
  },
  {
    id: 3,
    image:
      "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/team/5.jpg",
    name: "Rosalina D. William",
    designation: "Real Estate Broker",
    socialAccounts: [
      { type: "facebook", url: "#", icon: <Facebook /> },
      { type: "twitter", url: "#", icon: <Twitter /> },
      { type: "linkedin", url: "#", icon: <Linkedin /> },
    ],
  },
];

const Team = () => {
  const [agentsState, setAgentsState] = useState(initialAgents);

  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <span className="inline-block bg-orange-100 text-orange-500 text-sm sm:text-[16px] font-semibold px-5 py-1 rounded-full mb-4">
          Team
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-14">
          Property Agents
        </h2>

        {/* Cards Grid */}
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentsState.map((agent) => {
            return (
              <div
                key={agent.id}
                className={`relative bg-white transition-all duration-300 border border-gray-100 group
                hover:shadow-xl
                `}
              >
                {/* Icon Wrapper */}
                <div className="w-full">
                  <img
                    className="w-full object-cover"
                    src={agent.image}
                    alt={agent.designation}
                  />
                </div>

                <div className="my-6">
                  {/* Title */}
                  <h3 className="text-[17px] sm:text-lg lg:text-xl cursor-pointer font-bold text-gray-900 mb-4 hover:text-orange-500">
                    {agent.name}
                  </h3>

                  {/* Description */}
                  <p className="text-orange-500 text-sm sm:text-[15px] lg:text-base font-bold leading-relaxed mb-6">
                    {agent.designation}
                  </p>

                  <div className="flex justify-center gap-2">
                    {agent.socialAccounts.map((account) => {
                      return (
                        <>
                          {/* CTA */}
                          <button
                            key={account.type}
                            className={`text-sm text-gray-600 hover:text-orange-500 font-medium cursor-pointer transition duration-300`}
                          >
                            {account.icon}
                          </button>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
