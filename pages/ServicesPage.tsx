
import React from 'react';
import { services } from '../data/services';

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fade-in pt-24 bg-brand-bg">
      {/* Page Header */}
      <section className="py-16 text-center bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-primary">Our Services</h1>
          <p className="text-lg text-brand-text-muted mt-4 max-w-3xl mx-auto">
            We offer a comprehensive suite of interior design services, from initial concept to final execution. Explore how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${index > 0 ? 'mt-12 pt-12 border-t border-gray-200' : ''}`}
              >
                {/* Image on left for even, right for odd */}
                <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <img src={service.imageUrl} alt={service.title} className="rounded-sm shadow-xl w-full h-auto object-cover" />
                </div>
                {/* Content on right for even, left for odd */}
                <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                   <div className="flex items-center mb-4">
                        <service.icon className="w-8 h-8 text-brand-accent mr-4"/>
                        <h2 className="text-3xl font-serif text-brand-primary">{service.title}</h2>
                   </div>
                  <p className="text-brand-text-muted leading-relaxed">
                    {service.longDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
       <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-4">Have a Project in Mind?</h2>
            <p className="text-brand-text-muted max-w-2xl mx-auto mb-8">
                Let's discuss how our expertise can align with your vision. We're here to answer your questions and start the journey.
            </p>
            <a href="tel:8621824204" className="bg-brand-accent text-white font-semibold py-4 px-10 rounded-sm hover:bg-opacity-90 transition-all duration-300 text-lg">
                Call Us: 8621824204
            </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
