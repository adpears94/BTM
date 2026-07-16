import { productStoryRows } from '../content';
import type { ProductImage } from '../types';

type DetailsSectionProps = {
  onImageSelect: (image: ProductImage) => void;
};

function DetailsSection({ onImageSelect }: DetailsSectionProps) {
  return (
    <section className="product-story" aria-label="Product details">
      {productStoryRows.map((row, index) => (
        <article
          className={`feature-row image-${row.imagePosition}`}
          id={row.id}
          key={row.title}
        >
          <div className="feature-media">
            <button
              className="image-zoom-button"
              type="button"
              onClick={() => onImageSelect(row.image)}
              aria-label={`Open ${row.image.alt} full screen`}
            >
              <img src={row.image.src} alt={row.image.alt} />
            </button>
          </div>

          <div className="feature-copy">
            <p className="eyebrow">{row.eyebrow}</p>
            <h2>{row.title}</h2>
            <p>{row.copy}</p>

            <ul className="feature-list">
              {row.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}

export default DetailsSection;
