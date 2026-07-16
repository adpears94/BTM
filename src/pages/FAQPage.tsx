import { faqCategories } from '../content';

function FAQPage() {
  const productBasics = faqCategories.find(
    (category) => category.title === 'Product Basics',
  );
  const expandableCategories = faqCategories.filter(
    (category) => category.title !== 'Product Basics',
  );

  return (
    <main className="faq-page">
      <section className="faq-hero">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h1>JellyFish FAQ</h1>
          <p className="faq-intro">
            Product details, fit notes, safety guidance, launch timing, and
            shipping expectations for Founder Batch 001.
          </p>

          <div className="hero-actions">
            <a className="button" href="/#email">
              Join Founder Batch 001
            </a>
            <a className="text-link" href="/">
              Back to product page
            </a>
          </div>
        </div>

        {productBasics ? (
          <div className="faq-hero-basics" aria-label="Product basics">
            {productBasics.items.map((item) => (
              <article className="faq-basic-card" key={item.question}>
                <h2>{item.question}</h2>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        ) : null}
      </section>

      <section className="faq-section" aria-label="Frequently asked questions">
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
        <h2>Want launch updates before the first run opens?</h2>
        <a className="button" href="/#email">
          Join the List
        </a>
      </section>
    </main>
  );
}

export default FAQPage;
