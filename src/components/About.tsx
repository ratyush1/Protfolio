import React from 'react';
import { Code, Palette, Zap, Heart, Mail } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with modern technologies and frameworks'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful and intuitive user interfaces and experiences'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Dedicated to creating meaningful digital solutions'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Image Left */}
          <div className="lg:w-1/3">
            <div className="w-full h-72 lg:h-96 rounded-3xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-200 to-purple-200 flex items-center justify-center">
              <img
                src="/image.png"
                alt="Pratyush Thapa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:w-2/3 text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hi, I'm <span className="font-semibold text-blue-600">Pratyush Thapa</span>, a passionate and dedicated Bachelor of Information Technology student at Itahari International College.
              I love turning ideas into real-world solutions through code and design. Over the past few years, 
              I’ve worked on several projects including <span className="font-medium text-purple-600">Tension to Topper</span> — an e-learning platform built with Java, 
              and <span className="font-medium text-purple-600">Easy Reserve</span> — a hotel reservation system using React and Django.
              <br /><br />
              I’m skilled in Java, JDBC, Servlets, JSP, MySQL, React, Django, PostgreSQL, and more. Outside tech, I create content for Trio Tales on TikTok and play Mobile Legends competitively.
              My goal is to become a full-stack developer building scalable solutions. Let’s connect and build something impactful together!
            </p>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Let's Work Together
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            I'm always interested in new opportunities and challenging projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <a
            href="mailto:pratyush33.16@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105 font-medium"
          >
            Get In Touch
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
