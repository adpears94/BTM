import type { Page } from '../App';

type SiteHeaderProps = { page: Page };

function SiteHeader({ page }: SiteHeaderProps) {
  const founderBatchHref = page === 'home' ? '#email' : '/#email';

  return (
    <header className="site-header" aria-label="Site header">
      <div className="brand-group">
        <a
          className="brand"
          href={page === 'home' ? '#top' : '/'}
          aria-label="Product home"
        >
          BIGGER THAN MOST
        </a>
        {/* <span className="patent-badge">Patent Pending</span> */}
      </div>

      <nav className="header-actions" aria-label="Primary navigation">
        <a
          className={page === 'about' ? 'nav-active' : undefined}
          href="/about"
        >
          About
        </a>
        <a className={page === 'faq' ? 'nav-active' : undefined} href="/faq">
          FAQ
        </a>
        <a className="button button-small" href={founderBatchHref}>
          Founder Batch
        </a>
      </nav>
    </header>
  );
}

export default SiteHeader;
