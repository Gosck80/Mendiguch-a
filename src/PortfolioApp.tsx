import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from './constants';

const PortfolioApp = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      {/* Header / Profile Info */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="mb-12">
          {/* Personal Logotype Placeholder */}
          <img 
            src="/logo.png" 
            alt="Personal Logo" 
            className="h-12 w-auto grayscale" 
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {PORTFOLIO_DATA.name}
            </h1>
            <p className="text-xl text-secondary font-medium mb-6">
              {PORTFOLIO_DATA.title} <span className="text-gray-300 mx-2">|</span> {PORTFOLIO_DATA.location}
            </p>
            {PORTFOLIO_DATA.bio && (
              <p className="text-lg text-secondary leading-relaxed max-w-xl">
                {PORTFOLIO_DATA.bio}
              </p>
            )}
          </div>
          
          <div className="flex flex-col gap-3">
            <a 
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="flex items-center gap-3 text-sm font-bold hover:text-gray-500 transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              Email Me
            </a>
            <a 
              href="#"
              className="flex items-center gap-3 text-sm font-bold hover:text-gray-500 transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </div>
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Project Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {PORTFOLIO_DATA.projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden mb-4 border border-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-bold group-hover:underline underline-offset-4 decoration-1">
                {project.title}
              </h3>
              <p className="text-sm text-secondary mt-1">
                {project.category}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-secondary">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.name}
        </p>
        <div className="flex gap-8 text-sm font-bold">
          <a href="#" className="hover:text-gray-500 transition-colors">Instagram</a>
          <a href="#" className="hover:text-gray-500 transition-colors">Behance</a>
          <a href="#" className="hover:text-gray-500 transition-colors">Coroflot</a>
        </div>
      </footer>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="fixed top-6 right-6 md:top-12 md:right-12 p-2 hover:bg-gray-100 rounded-full transition-all z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-16">
                <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">
                  {selectedProject.category}
                </p>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">{selectedProject.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-12">
                  {selectedProject.tools.map((tool: string) => (
                    <span key={tool} className="px-3 py-1 border border-gray-200 text-xs font-bold uppercase tracking-wider">
                      {tool}
                    </span>
                  ))}
                </div>

                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full aspect-video object-cover rounded-sm border border-gray-100 mb-16"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-16">
                <div className="md:col-span-2 space-y-16">
                  <section>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">01 / The Brief</h3>
                    <p className="text-xl text-primary leading-relaxed">{selectedProject.process.brief}</p>
                  </section>
                  <section>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">02 / Research & Insight</h3>
                    <p className="text-xl text-primary leading-relaxed">{selectedProject.process.research}</p>
                  </section>
                  <section>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">03 / CAD & Development</h3>
                    <p className="text-xl text-primary leading-relaxed">{selectedProject.process.cad}</p>
                  </section>
                  <section>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">04 / Final Result</h3>
                    <p className="text-xl text-primary leading-relaxed">{selectedProject.process.final}</p>
                  </section>
                </div>
                
                <div className="space-y-12">
                  <div className="pt-8 border-t border-gray-100">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Role</h4>
                    <p className="text-sm font-medium">Lead Industrial Designer</p>
                  </div>
                  <div className="pt-8 border-t border-gray-100">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Deliverables</h4>
                    <ul className="text-sm space-y-2 font-medium">
                      <li>Production CAD</li>
                      <li>Technical Drawings</li>
                      <li>Functional Prototype</li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-4 border border-black text-sm font-bold hover:bg-black hover:text-white transition-all uppercase tracking-widest"
                  >
                    Back to Projects
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioApp;
