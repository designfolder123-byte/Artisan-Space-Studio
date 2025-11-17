
import React from 'react';
import { designStyles } from '../data/designStyles';

const DesignStylesPage: React.FC = () => {
  return (
    <div className="animate-fade-in pt-24 bg-brand-bg min-h-screen">
      {/* Page Header */}
      <section className="py-16 text-center bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-primary">Explore Design Styles</h1>
          <p className="text-lg text-brand-text-muted mt-4 max-w-3xl mx-auto">
            Every great design starts with an inspiration. Discover the aesthetic that speaks to you and learn about the key elements that define each style.
          </p>
        </div>
      </section>

      {/* Styles Accordion/List */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-8">
            {designStyles.map(style => (
              <div key={style.id} className="grid md:grid-cols-5 gap-8 bg-white p-8 rounded-sm shadow-md">
                <div className="md:col-span-2">
                  <img src={style.imageUrl} alt={style.name} className="w-full h-full object-cover rounded-sm" />
                </div>
                <div className="md:col-span-3">
                  <h2 className="text-3xl font-serif text-brand-primary mb-3">{style.name}</h2>
                  <p className="text-brand-text-muted mb-4">{style.description}</p>
                  
                  <div className="text-sm space-y-3">
                      <p><strong className="text-brand-primary font-semibold">Best For:</strong> {style.suitableFor}</p>
                      <p><strong className="text-brand-primary font-semibold">Key Materials:</strong> {style.materials.join(', ')}</p>
                      <div className="flex items-center">
                          <strong className="text-brand-primary font-semibold mr-2">Color Palette:</strong>
                          <div className="flex flex-wrap gap-2">
                              {style.colorPalette.map(color => (
                                <span key={color} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">{color}</span>
                              ))}
                          </div>
                      </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignStylesPage;
