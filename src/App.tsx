import { useCallback, useState } from 'react';
import ImageModal from './components/ImageModal';
import IntroVideo from './components/IntroVideo';
import SiteHeader from './components/SiteHeader';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import HomePage from './pages/HomePage';
import type { ProductImage } from './types';

function getCurrentPage() {
  const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/';

  if (normalizedPath === '/faq') {
    return 'faq';
  }

  if (normalizedPath === '/about') {
    return 'about';
  }

  return 'home';
}

function App() {
  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(null);
  const currentPage = getCurrentPage();
  const closeModal = useCallback(() => setSelectedImage(null), []);

  return (
    <div className="page-shell">
      <SiteHeader page={currentPage} />

      {currentPage === 'about' ? (
        <AboutPage />
      ) : currentPage === 'faq' ? (
        <FAQPage />
      ) : (
        <HomePage onImageSelect={setSelectedImage} />
      )}

      <ImageModal image={selectedImage} onClose={closeModal} />
      <IntroVideo />
    </div>
  );
}

export default App;
