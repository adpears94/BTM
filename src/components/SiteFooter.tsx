const policyLinks = [
  { label: 'Shipping Policy', href: '/shipping-policy' },
  { label: 'Return / Refund Policy', href: '/return-refund-policy' },
  { label: 'Warranty', href: '/warranty' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <a className="brand" href="/" aria-label="Bigger Than Most home">
            BIGGER THAN MOST
          </a>
          <p>Premium dumbbell add-on weights, built for lifters.</p>
        </div>

        <nav className="footer-policies" aria-label="Policies">
          <p className="footer-heading">Policies</p>
          <div className="footer-links">
            {policyLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LP Innovations LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default SiteFooter;
