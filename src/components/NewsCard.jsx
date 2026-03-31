import { IoPersonOutline } from "react-icons/io5";
import { PiCardsFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

export default function NewsCard({ item, style }) {
  return (
    <article
      className="bg-white shadow-md rounded-lg overflow-hidden transition-all hover:shadow-xl h-full flex flex-col"
      style={style}
    >
      {/* Image */}
      <div className="h-56 w-full overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
          onError={(e) => {
            // optional graceful fallback
            e.currentTarget.src =
              "https://via.placeholder.com/640x360?text=News+Image";
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Tags */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3 flex-wrap">
          {item.tags?.map((tag, i) => (
            <span key={`${tag}-${i}`} className="flex items-center gap-1">
              {i === 0 ? (
                <span className="text-orange-500 text-base">
                  <IoPersonOutline />
                </span>
              ) : (
                <span className="text-orange-500 text-base">
                  <PiCardsFill />
                </span>
              )}
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-900 leading-tight line-clamp-2">
          <a
            href={item.link}
            className="hover:text-orange-500 transition-all duration-300 focus:outline-none "
          >
            {item.title}
          </a>
        </h3>

        {/* Footer */}
        <div className="mt-5 pt-5 flex items-center justify-between text-sm border-t border-t-gray-100">
          <div className="flex gap-2 items-center">
            <span className="text-orange-500">
              <SlCalender></SlCalender>
            </span>
            <time
              className="text-gray-500"
              dateTime={new Date(item.date).toISOString()}
            >
              {item.date}
            </time>
          </div>
          <a
            href={item.link}
            className="text-orange-500 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-sm"
            aria-label={`Read more about: ${item.title}`}
          >
            READ MORE
          </a>
        </div>
      </div>
    </article>
  );
}
