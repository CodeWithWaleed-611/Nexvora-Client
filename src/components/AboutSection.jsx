import { FaPlay } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GiLifeBar } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto relative bg-white py-24">
      {/* !-- ================= SEARCH BAR ================= -- */}
      <div className="xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-top-15 w-full px-6">
        <div className="max-w-7xl mx-auto bg-white shadow-xl p-6 flex flex-col lg:flex-row gap-6 items-center font-medium">
          <select className="w-full flex-1 border border-gray-200 p-4 outline-none">
            <option>Choose Area</option>
          </select>

          <select className="w-full flex-1 border border-gray-200 p-4 outline-none">
            <option>Property Status</option>
          </select>

          <select className="w-full flex-1 border border-gray-200 p-4 outline-none">
            <option>Property Type</option>
          </select>

          <button
            className="bg-orange-500 hover:bg-orange-600 
                     text-white px-10 py-4 lg:ml-[5%] font-medium 
                     transition-colors duration-300"
          >
            FIND NOW
          </button>
        </div>
      </div>

      <div className="px-6 pt-24 grid lg:grid-cols-2 items-center">
        {/* About Us Image */}
        <div className="relative w-full mb-10 lg:mb-0">
          <img
            src="/src/assets/images/aboutus1.png"
            alt="Interior"
            className="aspect-3/4 sm:w-5/6 opacity-90"
          />
          <div className="absolute top-2/4 left-1 w-2/4 h-2/6 bg-[url('/src/assets/images/aboutus2.png')] bg-center bg-cover ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md">
              <FaPlay className="text-orange-500" />
            </div>
          </div>
        </div>

        <div>
          <span className="bg-orange-100 text-orange-500 text-sm sm:text-[16px] font-semibold px-4 py-1 rounded-full">
            About Us
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-4 mb-6">
            The Leading Real Estate Rental Marketplace{" "}
            <span className="text-orange-500">.</span>
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Over 39,000 people work for us in more than 70 countries all over
            the world.
          </p>

          <ul className="list-none space-y-3 grid md:grid-cols-2 text-gray-500 mb-8">
            <li className="flex items-center gap-4">
              <div className="p-4 rounded-full text-orange-500 bg-orange-100 text-lg">
                <GiFamilyHouse />
              </div>{" "}
              Smart Home Design
            </li>
            <li className="flex items-center gap-4">
              <div className="p-4 rounded-full text-orange-500 bg-orange-100 text-lg">
                <MdOutlineMapsHomeWork />
              </div>{" "}
              Beautiful Scene Around
            </li>
            <li className="flex items-center gap-4">
              <div className="p-4 rounded-full text-orange-500 bg-orange-100 text-lg">
                <GiLifeBar />
              </div>{" "}
              Exceptional Lifestyle
            </li>
            <li className="flex items-center gap-4">
              <div className="p-4 rounded-full text-orange-500 bg-orange-100 text-lg">
                <MdOutlineSecurity />
              </div>{" "}
              Complete 24/7 Security
            </li>
          </ul>

          <div className="bg-orange-50 p-6 border-l-4 border-l-orange-500 mb-10 text-gray-500">
            <p>
              "Enimad minim veniam quis nostrud exercitation <br></br> llamco
              laboris. Lorem ipsum dolor sit amet"
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 transition duration-300">
            OUR SERVICES
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
