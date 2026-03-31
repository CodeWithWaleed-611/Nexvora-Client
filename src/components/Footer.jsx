import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { VscMail } from "react-icons/vsc";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import NexvoraLogo from "./NexvoraLogo";

export default function Footer() {
  return (
    <footer className="bg-[#0B0D17] text-gray-300 pt-28 mt-28">
      {/* CTA BAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 -mt-52 mb-20">
        <div className="flex justify-center items-center">
          <div className="w-full bg-orange-500 py-10 px-6 md:px-14 flex flex-col lg:flex-row justify-between sm:items-center gap-6 shadow-lg">
            <div className="">
              <h2 className="text-white text-2xl sm:text-[26px] lg:text-3xl xl:text-4xl font-extrabold">
                Looking for a dream home?
              </h2>
              <p className="text-white/80 mt-1 text-sm sm:text-base">
                We can help you make your dream of a new home
              </p>
            </div>

            <a
              href="#"
              className="w-50 self-center bg-white text-orange-500 font-medium text-sm sm:text-base px-6 py-3 flex items-center gap-2 hover:bg-gray-100 transition-all"
            >
              Explore Properties →
            </a>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 px-6 md:px-10 pb-14">
        {/* COMPANY INFO */}
        <div>
          <h3 className="text-white text-xl font-semibold flex items-center gap-2 mb-4">
            <span className="text-[#FF5A3C]">
              <NexvoraLogo size={38} />
            </span>{" "}
          </h3>

          <p className="text-sm font-normal lg:text-base leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is dummy text of the printing.
          </p>

          <ul className="space-y-2 list-none font-normal text-sm leading-loose lg:text-base">
            <li className="flex items-start gap-2">
              <IoLocationOutline className="text-2xl" />
              <span className="leading-tight">
                Brooklyn, New York, United States
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneVolume className="text-base" />
              <p className="leading-tight">+123-456789</p>
            </li>
            <li className="flex items-start gap-2">
              <VscMail className="text-lg" />
              <p className="leading-tight">example@example.com</p>
            </li>
          </ul>

          <div className="flex gap-4 mt-4 text-lg">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaPinterestP className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* COLUMN 1 */}
        <div>
          <h3 className="text-white text-[22px] font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm leading-loose lg:text-base">
            <li>About</li>
            <li>Blog</li>
            <li>All Products</li>
            <li>Service</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="text-white text-[22px] font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm leading-loose lg:text-base">
            <li>Cart</li>
            <li>Wish List</li>
            <li>Login</li>
            <li>Checkout</li>
            <li>Terms & Conditions</li>
            <li>Promotional Offers</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="text-white text-[22px] font-bold mb-4">
            Customer Care
          </h3>
          <ul className="space-y-2 text-sm leading-loose lg:text-base">
            <li>Login</li>
            <li>My Account</li>
            <li>Wishlist</li>
            <li>Add Listing</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="md:col-span-1">
          <h3 className="text-white text-[22px] font-bold mb-3">Newsletter</h3>
          <p className="text-sm lg:text-base mb-4 leading-relaxed">
            Subscribe to our weekly newsletter and receive updates via email.
          </p>

          <div className="flex">
            <input
              type="text"
              placeholder="Email*"
              className="w-full p-3 bg-white text-sm text-gray-950 outline-none"
            />
            <button className="bg-[#FF5A3C] px-4 text-white hover:bg-[#ff775c] transition-all">
              <BsFillSendFill />
            </button>
          </div>

          <p className="mt-4 text-sm font-bold lg:text-base">We Accept</p>
          <img
            className="mt-2 w-52 bg-white"
            src="https://www.diveriksperformance.com/wp-content/uploads/2023/05/payment-methods-epicerie-ludo.png"
            alt="Payment Icons"
          />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#282b38]  p-6 md:px-10 flex flex-wrap justify-center items-center content-center gap-6 sm:justify-between text-gray-400">
        <p className="text-sm lg:text-base font-semibold">
          All Rights Reserved @ Company 2026
        </p>

        <div className="flex flex-wrap justify-center items-center content-center gap-x-6 gap-y-2 text-sm font-bold">
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white">
            Claim
          </a>
          <a href="#" className="hover:text-white">
            Privacy & Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
