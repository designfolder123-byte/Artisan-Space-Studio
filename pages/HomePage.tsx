
import React from 'react';
import type { Page } from '../types';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { ArrowRightIcon } from '../components/icons/Icons';

interface HomePageProps {
    onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredServices = services.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="h-screen min-h-[600px] bg-cover bg-center flex items-center relative" style={{ backgroundImage: `url('https://picsum.photos/seed/hero/1920/1080')` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative text-white text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4">Curating Spaces, Crafting Dreams</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light">
            Welcome to Artisan Space Studio, your destination for personalised luxury interior design in Kolkata. We harmoniously unite Indian artistry with contemporary design to mirror your unique style.
          </p>
          <button 
            onClick={() => onNavigate('Portfolio')}
            className="bg-brand-accent text-white font-semibold py-3 px-8 rounded-sm hover:bg-opacity-90 transition-all duration-300 text-lg"
          >
            Explore Our Work
          </button>
        </div>
      </section>

      {/* About Highlight Section */}
      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/seed/abouthome/800/600" alt="Interior Design Moodboard" className="rounded-sm shadow-xl" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-4">Proudly an Indian Homegrown Brand</h2>
            <p className="text-brand-text-muted mb-6 leading-relaxed">
              Founded by Sibangi Gupta, Artisan Space Studio is born from a passion for creating bespoke luxury residential, office, and commercial interiors. We are specialists in Interior Decoration and Turnkey Execution, striking the perfect balance between efficient planning and customised creativity.
            </p>
            <button onClick={() => onNavigate('About')} className="text-brand-accent font-semibold flex items-center group">
              Learn More About Us
              <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-4">Our Expertise</h2>
          <p className="text-brand-text-muted max-w-2xl mx-auto mb-12">We provide 360-degree services from design and build to the final styling, ensuring a seamless journey to your perfect space.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <div key={service.id} className="bg-white p-8 rounded-sm shadow-lg text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="inline-block bg-brand-accent/10 p-4 rounded-full mb-4">
                  <service.icon className="w-10 h-10 text-brand-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-primary mb-2">{service.title}</h3>
                <p className="text-brand-text-muted mb-4">{service.shortDescription}</p>
                 <button onClick={() => onNavigate('Services')} className="text-brand-accent font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Discover More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
        <section className="py-20 bg-brand-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-4">Why Artisan Space Studio?</h2>
                    <p className="text-brand-text-muted max-w-2xl mx-auto">Experience the best of interior design with a partner who values your vision and dreams.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                    {['Traditional Indian Art Forms', 'Luxury Interior Design', 'Customized Solutions', 'Expert Project Management', 'Honest Pricing & Transparency', '360-degree services'].map((item) => (
                        <div key={item} className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 border border-gray-200">
                                <span className="text-3xl">✨</span>
                            </div>
                            <h3 className="font-semibold text-brand-primary">{item}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-4">Our Signature Projects</h2>
            <p className="text-brand-text-muted max-w-2xl mx-auto">A glimpse into the spaces we've transformed with passion and precision.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {featuredProjects.map(project => (
              <div key={project.id} className="relative overflow-hidden rounded-sm group h-96">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-sm bg-brand-accent px-2 py-1 rounded-sm">{project.category}</span>
                  <h3 className="text-2xl font-serif mt-2">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
             <button onClick={() => onNavigate('Portfolio')} className="bg-brand-primary text-white font-semibold py-3 px-8 rounded-sm hover:bg-opacity-90 transition-all duration-300">
                View All Projects
              </button>
           </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.id} className="bg-white/10 p-8 rounded-sm">
                <p className="text-lg italic mb-6">"{t.quote}"</p>
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-brand-accent">{t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-bg text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-4">Let's Create Something Beautiful Together</h2>
            <p className="text-brand-text-muted max-w-2xl mx-auto mb-8">
                Ready to transform your space? Whether you are looking for the best interior designer, we are just a phone call away.
            </p>
            <button onClick={() => onNavigate('Contact')} className="bg-brand-accent text-white font-semibold py-4 px-10 rounded-sm hover:bg-opacity-90 transition-all duration-300 text-lg">
                Schedule a Consultation
            </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
