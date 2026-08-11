import { useCallback, useEffect, useState } from 'react';
import ImageModal from './components/ImageModal';
import IntroVideo from './components/IntroVideo';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import AboutPage from './pages/AboutPage/AboutPage';
import FAQPage from './pages/FAQPage/FAQPage';
import HomePage from './pages/HomePage/HomePage';
import TermsPage from './pages/TermsPage/TermsPage';
import PolicyPage from './pages/PolicyPage/PolicyPage';
import {
  privacyPolicy,
  returnPolicy,
  shippingPolicy,
  warrantyPolicy,
} from './policies';
import type { ProductImage } from './types';

export type Page =
  | 'home'
  | 'faq'
  | 'about'
  | 'terms'
  | 'shipping'
  | 'returns'
  | 'warranty'
  | 'privacy';

function getCurrentPage(): Page {
  const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/';

  if (normalizedPath === '/faq') {
    return 'faq';
  }

  if (normalizedPath === '/about') {
    return 'about';
  }

  if (
    normalizedPath === '/terms-of-service' ||
    normalizedPath === '/terms'
  ) {
    return 'terms';
  }

  if (normalizedPath === '/shipping-policy') {
    return 'shipping';
  }

  if (normalizedPath === '/return-refund-policy') {
    return 'returns';
  }

  if (normalizedPath === '/warranty') {
    return 'warranty';
  }

  if (normalizedPath === '/privacy-policy') {
    return 'privacy';
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
  const policySeo = {
    shipping: ['Shipping Policy', 'Read the Bigger Than Most shipping and delivery policy.', '/shipping-policy'],
    returns: ['Return / Refund Policy', 'Read the Bigger Than Most returns and refunds policy.', '/return-refund-policy'],
    warranty: ['Lifetime Warranty', 'Read the Bigger Than Most JellyFish lifetime warranty.', '/warranty'],
    privacy: ['Privacy Policy', 'Learn how Bigger Than Most collects, uses, and protects information.', '/privacy-policy'],
  } as const;

  if (page in policySeo) {
    const [title, description, path] = policySeo[page as keyof typeof policySeo];
    document.title = `${title} | Bigger Than Most`;
    setOrCreateMeta('description', description);
    setCanonical(path);
    return;
  }

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
    document.title = 'Terms of Service | Bigger Than Most';
    setOrCreateMeta(
      'description',
      'Read the terms governing use of the Bigger Than Most website, products, content, and services.',
    );
    setCanonical('/terms-of-service');
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
      ) : currentPage === 'shipping' ? (
        <PolicyPage policy={shippingPolicy} />
      ) : currentPage === 'returns' ? (
        <PolicyPage policy={returnPolicy} />
      ) : currentPage === 'warranty' ? (
        <PolicyPage policy={warrantyPolicy} />
      ) : currentPage === 'privacy' ? (
        <PolicyPage policy={privacyPolicy} />
      ) : (
        <HomePage onImageSelect={setSelectedImage} />
      )}

      <SiteFooter />

      <ImageModal image={selectedImage} onClose={closeModal} />
      <IntroVideo />
    </div>
  );
}

export default App;
