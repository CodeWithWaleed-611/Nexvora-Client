import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";
import { TbParking } from "react-icons/tb";
import { PiBracketsSquare } from "react-icons/pi";

const TodaySellsProperty = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Small Badge */}
          <span className="inline-block bg-orange-100 text-orange-500 text-sm sm:text-[16px] font-semibold px-4 py-1 rounded-full mb-6">
            About Us
          </span>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Today Sells Properties
          </h2>

          {/* Description */}
          <p className="text-gray-500 mb-6 leading-relaxed">
            Houzez allow you to design unlimited panels and real estate custom
            forms to capture leads and keep record of all information.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 mb-8">
            {[
              "Live Music Concerts at Luviana",
              "Our Secret Island Boat Tour is just for You",
              "Live Music Concerts at Luviana",
              "Live Music Concerts at Luviana",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>

          {/* Property Stats */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="border-l border-l-gray-500 pl-2 text-gray-500 text-sm">
              <div className="flex gap-1 ">
                <h3 className="font-bold ">3</h3>
                <IoBedOutline />
              </div>
              <p className="text-gray-500">Bedrooms</p>
            </div>
            <div className="border-l border-l-gray-500 pl-2 text-gray-500 text-sm">
              <div className="flex gap-1">
                <h3 className="font-bold ">2</h3>
                <MdOutlineBathroom />
              </div>
              <p>Bathrooms</p>
            </div>
            <div className="border-l border-l-gray-500 pl-2 text-gray-500 text-sm">
              <div className="flex gap-1">
                <h3 className="font-bold">2</h3>
                <TbParking />
              </div>
              <p>Car Parking</p>
            </div>
            <div className="border-l border-l-gray-500 pl-2 text-gray-500 text-sm">
              <div className="flex gap-1">
                <h3 className="text-sm font-bold ">3450</h3>
                <PiBracketsSquare />
              </div>
              <p>Square Ft</p>
            </div>
          </div>

          {/*LEFT IMAGE FLEX */}
          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Interior"
              className="object-cover w-2/10"
            />
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="Dining"
              className="object-cover  w-2/10"
            />
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
              alt="Bedroom"
              className="object-cover w-2/10"
            />
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
              alt="House"
              className="object-cover w-2/10"
            />
          </div>
        </div>

        {/*Right IMAGE GRID */}
        <div className="grid w-full grid-cols-2 grid-rows-2 gap-2">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Interior"
            className=" object-cover h-full w-full row-span-2"
          />
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="Dining"
            className=" object-cover h-full w-full row-span-1"
          />
          <img
            src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
            alt="Bedroom"
            className="object-cover h-full w-full row-span-1"
          />
          
        </div>
      </div>
    </section>
  );
};

export default TodaySellsProperty;
