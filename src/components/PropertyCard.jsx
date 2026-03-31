import {
  BedDouble,
  Bath,
  Square,
  MapPin,
  Camera,
  Video,
  Maximize2,
  Heart,
  Plus,
} from "lucide-react";
import {useState } from "react";

const PropertyCard = ({ property, style }) => {
  const [liked, setLiked] = useState(false)
  return (
    <div className="bg-white w-full border border-gray-100 lg:shadow-lg hover:shadow-xl transition-all duration-300 group" style={style}>
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Status Badge */}
        <span
          className={`absolute top-4 right-4 text-xs px-4 py-1.5 uppercase font-bold text-white 
          ${property.badge === "FOR RENT" ? "bg-green-500" : property.badgeColor}`}
        >
          {property.badge}
        </span>

        {/* Location */}
        <div className="absolute bottom-4 left-4 w-11/12 flex items-center text-white text-sm">
          <MapPin size={16} className="mr-1" />
          <span>{property.location}</span>
          <div className="flex gap-2 ml-auto font-medium">
            <div className="flex gap-1 p-1 xl:bg-[#dcdfda80]">
              <Camera size={18} />
              <span>4</span>
            </div>
            <div className="flex gap-1 p-1 xl:bg-[#dcdfda80]">
              <Video size={18} />
              <span>2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-orange-500 font-semibold mb-2">
          {property.price.toLocaleString()}
          <span className="text-sm font-normal">{property.period}</span>
        </p>

        <h3 className="text-xl font-bold  text-gray-900 mb-2 line-clamp-2 hover:text-orange-500 transition">
          {property.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4">{property.description}</p>

        {/* Divider */}
        <div className="pt-4 flex items-center gap-2 text-gray-600 text-sm font-normal">
          <div className="">
            <div className="flex items-center gap-1">
              <div className="font-medium">{property.bedrooms}</div>{" "}
              <BedDouble size={16} />
            </div>
            Bedrooms
          </div>
          <div className="border-l border-l-gray-300 p-3">
            <div className="flex items-center gap-1">
              <div className="font-medium">{property.bathrooms} </div>{" "}
              <Bath size={16} />
            </div>
            <div>Bathrooms</div>
          </div>
          <div className="border-l border-l-gray-300 p-3">
            <div className="flex items-center gap-1">
              <div className="font-medium">{property.sqft} </div>{" "}
              <Square size={16} />
            </div>
            <div>sqft</div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-between border-t border-t-gray-100 p-5">
        {/* Agent Info */}
        <div className="flex items-center gap-3">
          <img
            src={property.agentImg}
            alt="William Seklo"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              {property.agent}
            </h4>
            <p className="text-xs text-gray-500">{property.agentRole}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-orange-500 hover:text-white transition duration-300">
            <Maximize2 size={16} />
          </button>

          <button onClick={() => setLiked(true)} className={`w-9 h-9 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-orange-500 hover:text-white transition duration-300 ${liked && "text-orange-500"}`}>
            <Heart size={16} />
          </button>

          <button className="w-9 h-9 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-orange-500 hover:text-white transition duration-300">
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
