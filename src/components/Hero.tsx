
import React from 'react';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';



const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
             Pratyush Thapa
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 font-light">
            Aspiring Software Developer & Web Designer
            </p>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            I'm a passionate developer with expertise in creating beautiful, functional, and user-centered digital experiences. 
            I combine technical skills with creative vision to bring ideas to life through clean, efficient code and thoughtful design.
          </p>

          {/* Social Links */}
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

          {/* CTA Button */}
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105 font-medium text-lg"
          >
            Learn More About Me
            <ArrowDown size={20} />
          </button>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {/* Placeholder for profile image */}
                <img
                  src="/pratyush.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-2xl">✨</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
