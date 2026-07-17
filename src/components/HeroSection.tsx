import { heroImage } from '../content';
import type { ProductImage } from '../types';

type HeroSectionProps = {
  onImageSelect: (image: ProductImage) => void;
};

function HeroSection({ onImageSelect }: HeroSectionProps) {
  return (
    <section className="hero" id="top">
      <div
        className="product-visual"
        aria-label="JellyFish dumbbell weight add-on product image"
      >
        <div className="image-placeholder image-placeholder-large">
          <button
            className="image-zoom-button"
            type="button"
            onClick={() => onImageSelect(heroImage)}
            aria-label="Open JellyFish dumbbell weight add-on image full screen"
          >
            <img src={heroImage.src} alt={heroImage.alt} />
          </button>
        </div>
      </div>

      <div className="hero-heading">
        <p className="eyebrow">Premium dumbbell weight add-on</p>

        <h1>Add Weight to Your Dumbbells Without Crowding Your Grip.</h1>
      </div>

      <div className="hero-copy hero-copy-lower">
        <p className="hero-text">
          JellyFish is a patent-pending dumbbell weight add-on that mounts at
          the dumbbell head, keeping the handle clear while helping lifters get
          more range from the dumbbells they already own.
        </p>

        <div className="hero-badges" aria-label="Product highlights">
          <span>Head-Mounted Weight</span>
          <span>Clear Handle</span>
          <span>Patent Pending</span>
          <span>Founder Batch 001</span>
        </div>

        <div className="hero-actions" id="buy">
          <div className="price-stack">
            <span className="price-label">Expected Founder Price</span>
            <span className="price">$99.99</span>
          </div>

          <a className="button" href="#email">
            Join Founder Batch 001
          </a>
        </div>

        <p className="hero-note">
          Built for controlled strength training with compatible fixed dumbbells.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
