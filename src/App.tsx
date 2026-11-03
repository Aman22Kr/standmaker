import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { AboutPage } from './pages/AboutPage';
import { PerspectivesPage } from './pages/PerspectivesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { SavedPage } from './pages/SavedPage';
import { NotFoundPage } from './pages/NotFoundPage';

// ScrollToTop component for smooth view transitions on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100 selection:bg-amber-400 selection:text-neutral-950">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/work/:slug" element={<CaseStudyDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/perspectives" element={<PerspectivesPage />} />
              <Route path="/perspectives/:slug" element={<ArticleDetailPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/saved" element={<SavedPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AppProvider>
  );
}
