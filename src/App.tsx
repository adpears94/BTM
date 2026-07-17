import { useCallback, useEffect, useState } from 'react';
import ImageModal from './components/ImageModal';
import IntroVideo from './components/IntroVideo';
import SiteHeader from './components/SiteHeader';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import HomePage from './pages/HomePage';
import type { ProductImage } from './types';

type Page = 'home' | 'faq' | 'about';

function getCurrentPage(): Page {
  const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/';

  if (normalizedPath === '/faq') {
    return 'faq';
  }

  if (normalizedPath === '/about') {
    return 'about';
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
    document.title = 'JellyFish Dumbbell Weight Add-On FAQ | Bigger Than Most';
    setOrCreateMeta(
      'description',
      'Answers about JellyFish, a patent-pending dumbbell weight add-on that adds weight at the dumbbell head while keeping the handle clear.',
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

  document.title = 'Dumbbell Weight Add-On | JellyFish by Bigger Than Most';
  setOrCreateMeta(
    'description',
    'JellyFish is a patent-pending dumbbell weight add-on that adds weight at the dumbbell head while keeping your handle clear.',
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
      ) : (
        <HomePage onImageSelect={setSelectedImage} />
      )}

      <ImageModal image={selectedImage} onClose={closeModal} />
      <IntroVideo />
    </div>
  );
}

export default App;
