
import React, { useState } from 'react';
import type { Page } from '../types';
import { MenuIcon, CloseIcon } from './icons/Icons';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navLinks: Page[] = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Design Styles', 'Contact'];

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const NavLink: React.FC<{ page: Page }> = ({ page }) => (
    <button
      onClick={() => handleNavigation(page)}
      className={`px-4 py-2 text-sm font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:bg-brand-accent after:transition-all after:duration-300 after:-translate-x-1/2 ${
        currentPage === page ? 'text-brand-accent after:w-1/2' : 'text-brand-text hover:text-brand-accent after:w-0 hover:after:w-1/2'
      }`}
    >
      {page}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => handleNavigation('Home')} className="text-2xl font-serif font-bold text-brand-primary tracking-wider">
          Artisan Space Studio
        </button>
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((page) => (
            <NavLink key={page} page={page} />
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-primary text-2xl">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-brand-bg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen shadow-lg' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center py-4">
          {navLinks.map((page) => (
             <button
              key={page}
              onClick={() => handleNavigation(page)}
              className={`py-3 text-lg w-full text-center ${currentPage === page ? 'text-brand-accent font-semibold' : 'text-brand-text'}`}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
