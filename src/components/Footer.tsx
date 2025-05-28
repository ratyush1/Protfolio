import React from 'react';
import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Pratyush Thapa
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional developer passionate about creating innovative digital solutions 
              that make a difference in people's lives.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/ratyush1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-gray-700 hover:text-blue-600"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-gray-700 hover:text-blue-600"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/__pratyushthapa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-gray-700 hover:text-pink-500"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <span>pratyush33.16@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <span>9862130504 / 9816303784</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>Dharan, Nepal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => {
                  const homeSection = document.getElementById('home');
                  if (homeSection) {
                    homeSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                About Me
              </button>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv.jpeg'; // Make sure cv.jpeg is in /public
                  link.download = 'Pratyush_Thapa_CV.jpeg';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pratyush Thapa. All rights reserved. Built with passion and dedication.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
