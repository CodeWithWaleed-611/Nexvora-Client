import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className=" relative">
      <div className="py-20 px-6 md:px-16 relative z-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-white p-8 border-2 border-gray-200 text-center hover:shadow-md transition">
              <Mail className="mx-auto mb-4 text-orange-500" size={40} />
              <h3 className="font-semibold text-lg mb-2">Email Address</h3>
              <p className="text-gray-500">info@webmail.com</p>
              <p className="text-gray-500">jobs@webexample.com</p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 border-2 border-gray-200 text-center hover:shadow-md transition">
              <Phone className="mx-auto mb-4 text-orange-500" size={40} />
              <h3 className="font-semibold text-lg mb-2">Phone Number</h3>
              <p className="text-gray-500">+0123-456789</p>
              <p className="text-gray-500">+987-6543210</p>
            </div>

            {/* Address */}
            <div className="bg-white p-8 border-2 border-gray-200 text-center hover:shadow-md transition">
              <MapPin className="mx-auto mb-4 text-orange-500" size={40} />
              <h3 className="font-semibold text-lg mb-2">Office Address</h3>
              <p className="text-gray-500">18/A, New Born Town Hall</p>
              <p className="text-gray-500">New York, US</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 border-2 border-gray-200 shadow-sm">
            <form className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-2 border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <User
                  className="absolute right-3 top-3 text-orange-500"
                  size={18}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full border-2 border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Mail
                  className="absolute right-3 top-3 text-orange-500"
                  size={18}
                />
              </div>

              {/* Service */}
              <div className="relative">
                <select className="w-full border-2 border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Select Service Type</option>
                  <option>Buy Property</option>
                  <option>Sell Property</option>
                  <option>Rent Property</option>
                </select>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full border-2 border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Phone
                  className="absolute right-3 top-3 text-orange-500"
                  size={18}
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2 relative">
                <textarea
                  rows="5"
                  placeholder="Enter message"
                  className="w-full border-2 border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
                <MessageSquare
                  className="absolute right-3 top-3 text-orange-500"
                  size={18}
                />
              </div>

              {/* Checkbox */}
              <div className="md:col-span-2 flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-sm text-gray-500">
                  Save my name, email, and website for next time
                </p>
              </div>

              {/* Button */}
              <div className="md:col-span-2">
                <button className="bg-orange-500 text-white px-6 py-3 hover:bg-orange-600 transition">
                  GET A FREE SERVICE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-150 pb-25">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Brooklyn,New York&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
