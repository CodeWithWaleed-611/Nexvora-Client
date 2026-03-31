import { CiMail } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { LuDribbble } from "react-icons/lu";

const TopBar = () => {
  return (
    <>
      <div className="bg-[#0f2b3d] text-white text-sm font-bold">
        <div className="container m-auto ">
          {/*---- TOP BAR ----*/}
          <div className="flex flex-col items-center justify-center px-6 md:flex-row md:justify-between">
            {/* LEFT SIDE */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 py-3">
                <span className="text-orange-500">
                  <CiMail size={16}/>
                </span>
                <span>info@webmail.com</span>
              </div>
              <div className="flex items-center gap-2 py-2">
                <span className="text-orange-500">
                  <IoLocation size={16}/>
                </span>
                <span> 15/A, Nest Tower, NYC</span>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 py-3">
                <a href="#" className="">
                  <FaFacebookF size={14}/>
                </a>
                <a href="#" className="">
                  <FaTwitter size={14}/>
                </a>
                <a href="#" className="">
                  <GrInstagram size={14}/>
                </a>
                <a href="#" className="">
                  <LuDribbble size={14}/>
                </a>
              </div>

              {/* CTA BUTTON*/}
              <button className="bg-orange-500 px-4 py-3">Add Listing</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
