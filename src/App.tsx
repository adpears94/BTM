import { useCallback, useEffect, useState } from 'react';
import ImageModal from './components/ImageModal';
import IntroVideo from './components/IntroVideo';
import SiteHeader from './components/SiteHeader';
import AboutPage from './pages/AboutPage/AboutPage';
import FAQPage from './pages/FAQPage/FAQPage';
import HomePage from './pages/HomePage/HomePage';
import TermsPage from './pages/TermsPage/TermsPage';
import type { ProductImage } from './types';

type Page = 'home' | 'faq' | 'about' | 'terms';

function getCurrentPage(): Page {
  const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/';

  if (normalizedPath === '/faq') {
    return 'faq';
  }

  if (normalizedPath === '/about') {
    return 'about';
  }

  if (normalizedPath === '/terms') {
    return 'terms';
  }

  return 'home';
}

function setOrCreateMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setCanonical(path: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.href = `https://biggerthanmost.com${path}`;
}

function updateSeo(page: Page) {
  if (page === 'faq') {
    document.title = 'Dumbbell Weight Add-On FAQ | Bigger Than Most';
    setOrCreateMeta(
      'description',
      'Answers about patent-pending dumbbell weight add-on that adds weight at the dumbbell head while keeping the handle clear.',
    );
    setCanonical('/faq');
    return;
  }

  if (page === 'about') {
    document.title = 'About Bigger Than Most | Premium Dumbbell Weight Add-Ons';
    setOrCreateMeta(
      'description',
      'Bigger Than Most builds premium dumbbell weight add-ons for lifters who want more range from the dumbbells they already own.',
    );
    setCanonical('/about');
    return;
  }

  if (page === 'terms') {
    document.title = 'Terms of Use | Bigger Than Most';
    setOrCreateMeta(
      'description',
      'Read the terms governing use of the Bigger Than Most website, products, content, and services.',
    );
    setCanonical('/terms');
    return;
  }

  document.title = 'Dumbbell Weight Add-On | Bigger Than Most';
  setOrCreateMeta(
    'description',
    'Patent-pending dumbbell weight add-on that adds weight at the dumbbell head while keeping your handle clear.',
  );
  setCanonical('/');
}

function App() {
  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(null);
  const currentPage = getCurrentPage();
  const closeModal = useCallback(() => setSelectedImage(null), []);

  useEffect(() => {
    updateSeo(currentPage);
  }, [currentPage]);

  return (
    <div className="page-shell">
      <SiteHeader page={currentPage} />

      {currentPage === 'about' ? (
        <AboutPage />
      ) : currentPage === 'faq' ? (
        <FAQPage />
      ) : currentPage === 'terms' ? (
        <TermsPage />
      ) : (
        <HomePage onImageSelect={setSelectedImage} />
      )}

      <ImageModal image={selectedImage} onClose={closeModal} />
      <IntroVideo />
    </div>
  );
}

export default App;
