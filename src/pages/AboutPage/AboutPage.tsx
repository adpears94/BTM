import './AboutPage.css';

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-copy">
          <p className="eyebrow">About Bigger Than Most</p>
          <h1>Built by lifters. Built for dumbbell training.</h1>

          <div className="about-story">
            <p>
              Bigger Than Most started with two lifelong friends who grew up
              playing sports, lifting weights, and pushing each other to get
              stronger.
            </p>

            <p>
              Years later, we ran into the same problem a lot of lifters face:
              dumbbells are expensive, space is limited, and every jump in
              weight feels like another hit to the wallet. We wanted a smarter
              way to add weight to dumbbells without crowding the handle or
              buying another pair every time training moved up.
            </p>

            <p>
              That idea became JellyFish, a patent-pending dumbbell weight
              add-on designed to help lifters get more range from the dumbbells
              they already own. It adds usable weight at the dumbbell head while
              keeping the grip area clear.
            </p>
          </div>
        </div>
      </section>

      <section className="about-belief" aria-label="Brand belief">
        <p className="eyebrow">What We Believe</p>
        <blockquote>
          Training equipment should be strong, smart, and worth what you pay
          for.
        </blockquote>
      </section>

      <section className="about-section">
        <div className="about-story about-story-narrow">
          <p>
            We are not here to make cheap, disposable gear. We are here to build
            premium dumbbell add-on weight solutions that help everyday lifters
            save space, keep progressing, and get more from the equipment they
            already own.
          </p>

          <p>
            JellyFish is our first step toward solving the dumbbell problem, and
            Bigger Than Most will keep innovating for lifters who expect more
            from their equipment.
          </p>

          <div className="about-signoff">
            <p>Built by lifters. Built for dumbbell training. Built to be</p>
            <h2>BIGGER THAN MOST</h2>
          </div>

          <div className="hero-actions">
            <a className="button" href="/#email">
              Join Founder Batch 001
            </a>
            <a className="text-link" href="/">
              Back to JellyFish
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
