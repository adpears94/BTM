import './PolicyPage.css';

export type PolicySection = {
  heading: string;
  paragraphs: string[];
};

export type Policy = {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  intro: string;
  sections: PolicySection[];
};

type PolicyPageProps = {
  policy: Policy;
};

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function PolicyPage({ policy }: PolicyPageProps) {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <div className="policy-shell">
          <p className="eyebrow">{policy.eyebrow}</p>
          <h1>{policy.title}</h1>
          <p className="policy-updated">Effective Date: {policy.effectiveDate}</p>
          <p className="policy-intro">{policy.intro}</p>
        </div>
      </section>

      <section className="policy-content" aria-label={`${policy.title} content`}>
        <div className="policy-shell policy-grid">
          <aside className="policy-sidebar" aria-label={`${policy.title} sections`}>
            <p className="policy-sidebar-title">On this page</p>
            {policy.sections.map((section) => (
              <a href={`#${sectionId(section.heading)}`} key={section.heading}>
                {section.heading}
              </a>
            ))}
          </aside>

          <div className="policy-card">
            {policy.sections.map((section, index) => (
              <section
                className="policy-block"
                id={sectionId(section.heading)}
                key={section.heading}
              >
                <h2>{index + 1}. {section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default PolicyPage;
