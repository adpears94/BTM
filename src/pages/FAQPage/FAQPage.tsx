import { faqCategories } from '../../content';
import './FAQPage.css';

function FAQPage() {
  const productBasics = faqCategories.find(
    (category) => category.title === 'Product Basics',
  );

  const warrantyCategory = faqCategories.find((category) =>
    category.title.toLowerCase().includes('warranty'),
  );

  const expandableCategories = faqCategories.filter(
    (category) =>
      category.title !== 'Product Basics' &&
      !category.title.toLowerCase().includes('warranty'),
  );

  return (
    <main className="faq-page">
      <section className="faq-hero">
        <div className="section-heading">
          <p className="eyebrow">JellyFish FAQ</p>
          <h1>Dumbbell Weight Add-On Questions, Answered.</h1>
          <p className="faq-intro">
            Clear answers about fit, setup, safety, materials, shipping, and the
            JellyFish lifetime warranty.
          </p>

          <div className="hero-actions faq-hero-actions">
            <a className="button" href="/#email">
              Join Founder Batch 001
            </a>
            <a className="text-link" href="/">
              Back to product page
            </a>
          </div>
        </div>
      </section>

      {productBasics ? (
        <section className="faq-basics-section" aria-label="Product basics">
          <div className="faq-section-heading">
            <p className="eyebrow">Start Here</p>
            <h2>Product Basics</h2>
          </div>

          <div className="faq-hero-basics">
            {productBasics.items.map((item) => (
              <article className="faq-basic-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {warrantyCategory ? (
        <section className="faq-warranty-section" aria-label="Lifetime warranty">
          <div className="faq-warranty-card">
            <div className="faq-warranty-card-header">
              <p className="eyebrow">Lifetime Warranty</p>
              <h2>Built to be backed.</h2>
              <p>
                If your JellyFish is damaged, send it back and pay the return
                shipping. Bigger Than Most will replace it at no product cost.
              </p>
            </div>

            <div className="faq-list">
              {warrantyCategory.items.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="faq-section" aria-label="Frequently asked questions">
        <div className="faq-section-heading">
          <p className="eyebrow">Details</p>
          <h2>Everything Else</h2>
        </div>

        <div className="faq-layout">
          {expandableCategories.map((category) => (
            <section className="faq-category" key={category.title}>
              <h2>{category.title}</h2>

              <div className="faq-list">
                {category.items.map((item) => (
                  <details className="faq-item" key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="faq-cta">
        <p className="eyebrow">Founder Batch 001</p>
        <h2>Want first access to JellyFish?</h2>
        <p>
          Join the list for launch updates, fit guide information, and first
          access when the first production run opens.
        </p>
        <a className="button" href="/#email">
          Join the List
        </a>
      </section>
    </main>
  );
}

export default FAQPage;
