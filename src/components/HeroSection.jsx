import { IoHome } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-gray-100 overflow-hidden">
        {/* -- ================= HERO CONTENT ================= -- */}
        <div className="max-w-7xl mx-auto px-6 pt-24 flex flex-col lg:flex-row items-center justify-between">
          {/* !-- LEFT CONTENT -- */}
          <div className="max-w-xl">
            <p class="text-sm font-medium mb-4 flex items-center gap-2">
              <span className="text-orange-500">
                <IoHome />
              </span>{" "}
              Real Estate Agency
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-none text-gray-900 mb-6">
              Find Your Dream <br />
              House By Us
            </h1>

            <div className="border-l-4 border-gray-300 pl-6 text-gray-500 mb-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>

            {/* !-- Buttons -- */}
            <div className="flex items-center gap-6">
              <button
                className="bg-orange-500 hover:bg-orange-600 
                       text-white px-8 py-4 font-medium 
                       shadow-md hover:shadow-lg 
                       transition-all duration-300"
              >
                Make An Enquiry
              </button>

              <button
                className="w-14 h-14 rounded-full 
                       bg-white shadow-md 
                       flex items-center justify-center 
                       hover:scale-105 
                       transition-transform duration-300"
              >
                <FaPlay className="text-orange-500" />
              </button>
            </div>
          </div>

          {/* !-- RIGHT IMAGE -- */}
          <div className="mt-16 lg:mt-0">
            <img
              src="/src/assets/images/Home1.png"
              alt="House"
              className="w-112.5 lg:w-137.5 object-contain"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 py-6">
          {/* !-- Active Dot -- */}
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>

          {/* !-- Inactive Dot -- */}
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        </div>

        

      </section>
    </>
  );
};

export default HeroSection;
