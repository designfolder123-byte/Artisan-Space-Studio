
import React from 'react';
import type { Page } from '../types';
import { PhoneIcon, MailIcon, MapPinIcon } from './icons/Icons';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold tracking-wider mb-4">Artisan Space Studio</h3>
            <p className="text-gray-300 max-w-md">
              Crafting bespoke luxury interiors that harmonize Indian artistry with contemporary design. Based in Kolkata, we transform spaces into personal sanctuaries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('About')} className="text-gray-300 hover:text-brand-accent transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('Services')} className="text-gray-300 hover:text-brand-accent transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('Portfolio')} className="text-gray-300 hover:text-brand-accent transition-colors">Portfolio</button></li>
              <li><button onClick={() => onNavigate('Contact')} className="text-gray-300 hover:text-brand-accent transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-serif mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-3 mt-1 text-brand-accent flex-shrink-0" />
                <span>Kolkata, West Bengal, India</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0" />
                <a href="tel:8621824204" className="hover:text-brand-accent transition-colors">8621824204</a>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0" />
                <a href="mailto:contact@artisanspacestudio.com" className="hover:text-brand-accent transition-colors">contact@artisanspacestudio.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {year} Artisan Space Studio. All Rights Reserved. Designed with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
