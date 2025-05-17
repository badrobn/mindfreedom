import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ArticlesPage from '@/pages/ArticlesPage';
import ProductsPage from '@/pages/ProductsPage';
import ContactPage from '@/pages/ContactPage';
import StartHerePage from '@/pages/StartHerePage';
import SocialLinksPage from '@/pages/SocialLinksPage';
import SuccessStoriesPage from '@/pages/SuccessStoriesPage';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const AnimatedPage = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="flex-grow"
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-brand-beige text-brand-darkText font-sans">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
            <Route path="/articles" element={<AnimatedPage><ArticlesPage /></AnimatedPage>} />
            <Route path="/products" element={<AnimatedPage><ProductsPage /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
            <Route path="/start-here" element={<AnimatedPage><StartHerePage /></AnimatedPage>} />
            <Route path="/social-links" element={<AnimatedPage><SocialLinksPage /></AnimatedPage>} />
            <Route path="/success-stories" element={<AnimatedPage><SuccessStoriesPage /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;