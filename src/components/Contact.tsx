import React from "react";
import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Labels } from "../data/labels";

interface ContactProps {
  labels: Labels;
}

const Contact: React.FC<ContactProps> = ({ labels }) => {
  const [isHovered, setIsHovered] = React.useState<string | null>(null);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {labels.contact.title}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-2xl border-t-4 border-black">
            <div className="space-y-6">
              <div
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setIsHovered("phone")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div
                  className={`w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isHovered === "phone" ? "scale-110" : ""
                  }`}
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {labels.contact.phone}
                  </h3>
                </div>
              </div>

              <div
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setIsHovered("email")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div
                  className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isHovered === "email" ? "scale-110" : ""
                  }`}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {labels.contact.email}
                  </h3>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-black mb-4 text-center">
                  {labels.contact.social}
                </h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://www.facebook.com/profile.php?id=61579258452535"
                    target="_blank"
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/athos.karate/"
                    target="_blank"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-lg hover:shadow-xl"
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
