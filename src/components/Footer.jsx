import React from 'react';
import {FaInstagram, FaLinkedinIn, FaFacebook, FaTiktok, FaMapMarkerAlt, FaEnvelope,FaPhoneAlt} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 px-5 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div className="flex flex-col mb-8 sm:mb-0">
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p>
            At Rukkys Natural, we specialize in natural herbal products designed
            to promote wellness and vitality. Our commitment is to provide
            products crafted from the finest, sustainably sourced ingredients.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col mb-8 sm:mb-0">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/allProducts" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col mb-8 sm:mb-0">
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex flex-wrap justify-start sm:space-x-4 space-x-2">
            <a
              href="https://www.instagram.com/rukkys.naturals/"
              className="p-2 bg-white text-green-900 text-2xl rounded-full hover:bg-green-800 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/rukkysnaturals/"
              className="p-2 bg-white text-green-900 text-2xl rounded-full hover:bg-green-800 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://web.facebook.com/rukkysnatural"
              className="p-2 bg-white text-green-900 text-2xl rounded-full hover:bg-green-800 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com/@rukkysnaturals"
              className="p-2 bg-white text-green-900 text-2xl rounded-full hover:bg-green-800 hover:text-white transition"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <div className="space-y-4">
            <a
              href="https://www.google.com/maps?q=Ashaley+Botwe+Lakeside+Road,+Accra,+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 flex-wrap text-yellow-400 hover:text-white transition"
            >
              <FaMapMarkerAlt className="text-yellow-400 text-xl" />
              <span>Ashaley Botwe Lakeside Road, Accra-Ghana</span>
            </a>
            <a
              href="mailto:rukkysnaturals@gmail.com"
              className="flex items-center gap-3 flex-wrap text-yellow-400 hover:text-white transition"
            >
              <FaEnvelope className="text-yellow-400 text-xl" />
              <span>rukkysnaturals@gmail.com</span>
            </a>
            <a
              href="tel:+2330554599729"
              className="flex items-center gap-3 flex-wrap text-yellow-400 hover:text-white transition"
            >
              <FaPhoneAlt className="text-yellow-400 text-xl" />
              <span>+233 (0) 55 459 9729</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-green-800 pt-4">
        <p>&copy; 2025 Rukkys Natural. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
