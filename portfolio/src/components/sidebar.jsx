import React, { useState, useEffect } from 'react';
import meImage from '../images/me.jpg';

const Sidebar = ({ onCollapsedChange }) => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    return saved ? JSON.parse(saved) : false;
  });

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      // On mobile, collapse sidebar after navigation
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'about', 'projects', 'timeline'];
      let currentSection = sections[0];
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) { // Adjust this value based on your header height
            currentSection = sectionId;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(isCollapsed));
    onCollapsedChange?.(isCollapsed);
  }, [isCollapsed, onCollapsedChange]);

  return (
    <>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed top-4 left-4 z-50 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isCollapsed ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'} />
        </svg>
      </button>

      <aside className={`fixed top-0 left-0 h-screen w-100 bg-gradient-to-br from-blue-50 via-white to-purple-50 shadow-lg z-40 transition-transform duration-200 ${isCollapsed ? '-translate-x-full' : 'translate-x-0'}`}>
      <div className="p-8 h-full flex flex-col">
        {/* Profile Section */}
        <br />
        <div className="text-center mb-8">
          <div 
            className="w-64 h-64 mx-auto rounded-full bg-cover bg-center mb-4 border-4 border-white shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden ring-2 ring-purple-100 ring-offset-4 ring-offset-white" 
          >
            <img 
              src={meImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <br />
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Hazel Grace Flores</h1>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a 
              href="mailto:floreshazelgrace@gmail.com"
              className="text-lg hover:text-blue-600 transition-colors duration-200"
            >
              floreshazelgrace@gmail.com
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-6 text-center">
            {[
              { id: 'introduction', label: 'INTRODUCTION', href: '#introduction' },
              { id: 'about', label: 'ABOUT', href: '#about' },
              { id: 'projects', label: 'PROJECTS', href: '#projects' },
              { id: 'timeline', label: 'TIMELINE', href: '#timeline' }
            ].map(item => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`block py-2 px-4 rounded-lg transition-all duration-200 ${
                    activeSection === item.id 
                    ? 'text-blue-600 font-medium bg-blue-50/50 scale-105' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/30 hover:scale-105'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="mt-auto pt-6 flex justify-center space-x-6">
          {[
            { href: 'https://www.facebook.com/heyyzl', icon: 'facebook', color: '#1877f2', hoverColor: '#1559b7' },
            { href: 'https://twitter.com/heyyzl_', icon: 'twitter', color: '#1da1f2', hoverColor: '#1681bf' },
            { href: 'https://www.instagram.com/heyyzl_', icon: 'instagram', color: '#e4405f', hoverColor: '#b3314b' },
            { href: 'https://www.linkedin.com/in/hazel-grace-flores/', icon: 'linkedin', color: '#0077b5', hoverColor: '#005c8c' },
            { href: 'https://github.com/hzlgrce', icon: 'github', color: '#333', hoverColor: '#000' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-200 hover:scale-125"
            >
              <i 
                className={`fab fa-${social.icon} text-2xl`}
                style={{ 
                  color: social.color,
                  transition: 'color 0.2s ease-in-out'
                }}
                onMouseEnter={e => e.target.style.color = social.hoverColor}
                onMouseLeave={e => e.target.style.color = social.color}
              ></i>
            </a>
          ))}
        </div>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
