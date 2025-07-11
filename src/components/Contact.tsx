import React from "react";
import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Labels } from "../data/labels";

interface ContactProps {
  labels: Labels;
}

const Contact: React.FC<ContactProps> = ({ labels }) => {
  const [isHovered, setIsHovered] = React.useState<string | null>(null);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-red-50 via-white to-yellow-50 relative overflow-hidden"
    >
      {/* Playful background elements */}
      <div
        className="absolute top-10 left-10 w-32 h-32 bg-red-500/10 rounded-full animate-bounce"
        style={{ animationDuration: "4s" }}
      ></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-500/10 rounded-full animate-pulse"></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full animate-ping"
        style={{ animationDuration: "3s" }}
      ></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div
              className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto animate-spin"
              style={{ animationDuration: "8s" }}
            >
              <Phone className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:text-red-600 transition-colors cursor-default">
            {labels.contact.title}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-t-4 border-red-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 animate-pulse"></div>
            <div className="space-y-6">
              <div
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setIsHovered("phone")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isHovered === "phone" ? "scale-110 rotate-12" : ""
                  }`}
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                    {labels.contact.phone}
                  </h3>
                </div>
              </div>

              <div
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setIsHovered("email")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isHovered === "email" ? "scale-110 rotate-12" : ""
                  }`}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {labels.contact.email}
                  </h3>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                  {labels.contact.social}
                </h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-800 rounded-full flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
