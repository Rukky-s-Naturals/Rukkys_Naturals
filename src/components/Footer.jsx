import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p>
            At Rukkys Natural, we specialize in natural herbal products designed
            to promote wellness and vitality. Our commitment is to provide
            products crafted from the finest, sustainably sourced ingredients.
          </p>
        </div>

        {/* Social Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Social Links</h3>
          <div className="flex space-x-4">
            
            <a
              href="https://www.instagram.com/"
              className="p-2 bg-white text-green-900 text-2xl rounded-full hover:bg-green-800 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://gh.linkedin.com/company/rukkysnaturals"
              className="p-2 bg-white text-green-900 text-2xl rounded-full hover:bg-green-800 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.whatsapp.com/"
              className="p-2 bg-white text-green-900 text-2xl rounded-full hover:bg-green-800 hover:text-white transition"
              aria-label="Whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p className="mb-2">Phone: +233 456 6875</p>
          <p className="mb-2">Email: support@rukkysnatural.com</p>
          <p className="mb-2">Address: 123 Herbal Street, Accra, Ghana</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-green-800 pt-4">
        <p>&copy; 2025 Rukkys Natural. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
