
import React, { useState, useEffect } from 'react';
import type { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import DesignStylesPage from './pages/DesignStylesPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'About':
        return <AboutPage />;
      case 'Services':
        return <ServicesPage />;
      case 'Portfolio':
        return <PortfolioPage />;
      case 'Blog':
        return <BlogPage />;
      case 'Design Styles':
        return <DesignStylesPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow pt-[81px]">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
