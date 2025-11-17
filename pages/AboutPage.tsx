
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in pt-24 bg-brand-bg">
      {/* Page Header */}
      <section className="py-16 text-center bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-primary">About Artisan Space Studio</h1>
          <p className="text-lg text-brand-text-muted mt-4 max-w-3xl mx-auto">Discover the story, passion, and philosophy behind Kolkata's emerging leader in luxury interior design.</p>
        </div>
      </section>

      {/* Founder's Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <img src="https://picsum.photos/seed/sibangi/800/1000" alt="Sibangi Gupta, Founder" className="rounded-sm shadow-xl object-cover w-full h-full" />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-4">Meet the Founder: Sibangi Gupta</h2>
            <p className="text-brand-text-muted mb-4 leading-relaxed">
              Sibangi Gupta, the creative force behind Artisan Space Studio, founded the firm with a singular vision: to create spaces that are not just aesthetically beautiful, but are deeply personal expressions of the people who inhabit them. With years of experience in the industry, she brings a unique blend of artistic flair and meticulous project management to every project.
            </p>
            <p className="text-brand-text-muted mb-6 leading-relaxed">
              Based in her beloved city of Kolkata, Sibangi draws inspiration from the rich cultural heritage of India, seamlessly weaving traditional artistry into contemporary, globally-inspired designs. Her approach is rooted in understanding the client's story, lifestyle, and aspirations, ensuring that every space is a true reflection of their individuality.
            </p>
            <div className="border-l-4 border-brand-accent pl-4 italic text-brand-primary">
              "Design is a silent ambassador of your brand, and a home is the ultimate story of who you are. My goal is to tell that story with elegance, passion, and authenticity."
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <h3 className="text-2xl font-serif text-brand-primary mb-3">Our Mission</h3>
            <p className="text-brand-text-muted">To craft bespoke, luxurious, and functional interiors that enrich lives, celebrate Indian craftsmanship, and deliver unparalleled client satisfaction through a transparent and collaborative process.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-serif text-brand-primary mb-3">Our Vision</h3>
            <p className="text-brand-text-muted">To be Kolkata's most sought-after interior design studio, recognized for our creative excellence, ethical practices, and our ability to create timeless spaces that resonate with soul and purpose.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-serif text-brand-primary mb-3">Our Values</h3>
            <p className="text-brand-text-muted">Creativity, Integrity, Quality, Collaboration, and Passion. These pillars guide every decision we make and every space we create.</p>
          </div>
        </div>
      </section>

      {/* Design Philosophy & Approach */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-4">Our Design Philosophy</h2>
            <p className="text-brand-text-muted leading-relaxed">
              We believe great design is a harmonious blend of art and science. It’s about creating beauty that is also intelligent and functional. Our motto is to keep the clients’ requirement and budget in mind and deliver a qualitative result on time. We are the right balance between efficient planning and customised creativity.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <h4 className="text-xl font-serif font-semibold text-brand-primary mb-2">Years of Experience</h4>
              <p className="text-brand-text-muted">With extensive experience in both residential and commercial projects, we bring a wealth of knowledge and a network of trusted artisans and vendors to ensure flawless execution.</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <h4 className="text-xl font-serif font-semibold text-brand-primary mb-2">Our Brand Promise</h4>
              <p className="text-brand-text-muted">We promise transparency, personalized service, and a commitment to quality. Your vision is our blueprint, and your satisfaction is our ultimate measure of success.</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <h4 className="text-xl font-serif font-semibold text-brand-primary mb-2">Our Design Approach</h4>
              <p className="text-brand-text-muted">Our process is collaborative and client-centric. We listen, we understand, and then we create. From 3D renderings to material samples, we ensure you are a part of the creative journey at every step.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
