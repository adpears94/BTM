import DetailsSection from '../components/DetailsSection';
import EmailSection from '../components/EmailSection';
import HeroSection from '../components/HeroSection';
import type { ProductImage } from '../types';

type HomePageProps = {
  onImageSelect: (image: ProductImage) => void;
};

function HomePage({ onImageSelect }: HomePageProps) {
  return (
    <main>
      <HeroSection onImageSelect={onImageSelect} />
      <DetailsSection onImageSelect={onImageSelect} />
      <EmailSection />
    </main>
  );
}

export default HomePage;
