function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-copy">
          <p className="eyebrow">About Bigger Than Most</p>
          <h1>Built by lifters. Built for home gyms.</h1>

          <div className="about-story">
            <p>
              Bigger Than Most started with two lifelong friends who grew up
              playing sports, lifting weights, and pushing each other to get
              stronger.
            </p>

            <p>
              Years later, we found ourselves running into the same problem a
              lot of home gym owners face: dumbbells are expensive, space is
              limited, and every jump in weight feels like another hit to the
              wallet. We got tired of paying premium prices for basic equipment,
              especially fixed dumbbells, and decided to build something
              different.
            </p>

            <p>
              That idea became JellyFish, a patent-pending dumbbell upgrade
              system designed to help lifters get more range from the dumbbells
              they already own. Instead of buying another pair every time you
              need a weight jump, JellyFish adds usable weight while keeping the
              handle clear.
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
            premium solutions that help everyday lifters save money, save space,
            and keep progressing.
          </p>

          <p>
            This is just the beginning. JellyFish is our first step toward
            solving the dumbbell problem, and Bigger Than Most will keep
            innovating for lifters who expect more from their equipment.
          </p>

          <p className="about-signoff">
            Built by lifters. Built for home gyms. Built for YOU to be
            <h2>
              BIGGER THAN MOST
            </h2>
          </p>

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
