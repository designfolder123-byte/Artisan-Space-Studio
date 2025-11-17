
import React, { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../types';
import { CloseIcon } from '../components/icons/Icons';

type Category = 'All' | 'Residential' | 'Commercial' | 'Makeovers' | 'Luxury Concepts';

const categories: Category[] = ['All', 'Residential', 'Commercial', 'Makeovers', 'Luxury Concepts'];

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-brand-bg rounded-sm shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-brand-text hover:text-brand-primary text-2xl z-10">
          <CloseIcon />
        </button>
        <div className="grid md:grid-cols-2">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover min-h-[300px]" />
            <div className="p-8">
                <span className="text-sm bg-brand-accent text-white px-2 py-1 rounded-sm mb-4 inline-block">{project.category}</span>
                <h2 className="text-3xl font-serif text-brand-primary mb-4">{project.title}</h2>
                <div className="space-y-4 text-brand-text-muted">
                    <div>
                        <h4 className="font-semibold text-brand-primary">Concept</h4>
                        <p>{project.concept}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-brand-primary">Style & Materials</h4>
                        <p>{project.style}. Featuring {project.materials}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-brand-primary">Transformation</h4>
                        <p>{project.transformation}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-brand-primary">Results</h4>
                        <p>{project.results}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in pt-24 bg-brand-bg min-h-screen">
      {/* Page Header */}
      <section className="py-16 text-center bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-primary">Our Portfolio</h1>
          <p className="text-lg text-brand-text-muted mt-4 max-w-3xl mx-auto">
            Explore a curated selection of our projects, showcasing our commitment to quality, creativity, and client satisfaction.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 sticky top-[80px] bg-brand-bg/90 backdrop-blur-sm z-40 border-b border-gray-200">
        <div className="container mx-auto px-6 flex justify-center flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeFilter === category
                  ? 'bg-brand-primary text-white'
                  : 'bg-white text-brand-text hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="overflow-hidden rounded-sm">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="pt-4">
                  <p className="text-sm text-brand-accent">{project.category}</p>
                  <h3 className="text-xl font-serif text-brand-primary mt-1 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default PortfolioPage;
