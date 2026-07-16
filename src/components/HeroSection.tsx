import { heroImage } from '../content';
import type { ProductImage } from '../types';

type HeroSectionProps = {
  onImageSelect: (image: ProductImage) => void;
};

function HeroSection({ onImageSelect }: HeroSectionProps) {
  return (
    <section className="hero" id="top">
      <div className="product-visual" aria-label="Main product image">
        <div className="image-placeholder image-placeholder-large">
          <button
            className="image-zoom-button"
            type="button"
            onClick={() => onImageSelect(heroImage)}
            aria-label="Open main product image full screen"
          >
            <img src={heroImage.src} alt={heroImage.alt} />
          </button>
        </div>
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Premium weighted hex dumbbell sleeve</p>

        <h1>Upgrade Your Hex Dumbbells Without Crowding Your Grip.</h1>

        {/* <span className="patent-badge patent-badge-hero">
          Patent Pending Design
        </span> */}

        <p className="hero-text">
          JellyFish is a patent-pending weighted sleeve system that adds weight
          at the dumbbell head, keeping the handle clear. Built for compatible
          rubber hex dumbbells so home gyms can get more range without buying
          another pair every time they need a jump.
        </p>

        <div className="hero-actions" id="buy">
          <span className="price">Expected Founder Price: $99.99</span>
          <a className="button" href="#email">
            Join Founder Batch 001
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
