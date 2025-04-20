import React from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/projects'
import Timeline from './components/timeline'

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    return saved ? JSON.parse(saved) : false;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="flex flex-col lg:flex-row">
        <Sidebar onCollapsedChange={setIsSidebarCollapsed} />
        <main className={`flex-1 overflow-x-hidden transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'lg:ml-0' : 'lg:ml-[25rem]'
          }`}>
          <div className="h-full w-full px-3 flex flex-col gap-16"> {/* Added gap-4 for a small gap */}
            <section id="introduction" className="h-screen flex items-center"> {/* Keep full height for the first section if needed */}
              <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 backdrop-blur-sm rounded-xl p-4 shadow-xl transition-shadow duration-300">
                <Introduction />
              </div>
            </section>

            <section id="about" className="h-auto flex items-center">
              <div className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-xl transition-shadow duration-300">
                <About />
              </div>
            </section>

            <section id="projects" className="h-auto flex items-center">
              <div className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-xl transition-shadow duration-300">
                <Projects />
              </div>
            </section>

            <section id="timeline" className="h-auto flex items-center">
              <div className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-xl transition-shadow duration-300">
                <Timeline />
              </div>
            </section>
            <br />            <br />

          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
