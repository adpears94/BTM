import './TermsPage.css';

function TermsPage() {
  return (
    <main className="terms-page">
      <section className="terms-hero">
        <div className="terms-shell">
          <p className="eyebrow">Bigger Than Most Legal</p>
          <h1>Terms of Service</h1>
          <p className="terms-updated">Effective Date: August 3, 2026</p>
          <p className="terms-intro">
            These Terms of Use govern your access to and use of the Bigger Than
            Most website, products, content, services, communications, and any
            related features operated by LP Innovations LLC.
          </p>
        </div>
      </section>

      <section className="terms-content" aria-label="Terms of Service content">
        <div className="terms-shell terms-grid">
          <aside className="terms-sidebar" aria-label="Terms sections">
            <p className="terms-sidebar-title">Sections</p>
            <a href="#acceptance">Acceptance</a>
            <a href="#company">Company</a>
            <a href="#products">Products & Orders</a>
            <a href="#safety">Product Use & Safety</a>
            <a href="#warranty">Warranty & Returns</a>
            <a href="#ip">Intellectual Property</a>
            <a href="#disclaimers">Disclaimers</a>
            <a href="#liability">Liability</a>
            <a href="#disputes">Disputes</a>
            <a href="#contact">Contact</a>
          </aside>

          <div className="terms-card">
            <section id="acceptance" className="terms-block">
              <h2>1. Acceptance of These Terms</h2>
              <p>
                By accessing or using the Bigger Than Most website, signing up
                for updates, placing an order, purchasing a product, submitting
                information, or otherwise interacting with Bigger Than Most, you
                agree to these Terms of Use and any policies referenced in them.
              </p>
              <p>
                If you do not agree to these Terms, do not use the website,
                purchase products, or submit information through the website.
              </p>
            </section>

            <section id="company" className="terms-block">
              <h2>2. Company Information</h2>
              <p>
                The website and related products are operated by LP Innovations
                LLC, owner/operator of the Bigger Than Most brand. In these
                Terms, “Bigger Than Most,” “we,” “us,” and “our” refer to LP
                Innovations LLC and its Bigger Than Most brand.
              </p>
            </section>

            <section id="site-use" className="terms-block">
              <h2>3. Website Use</h2>
              <p>
                You may use the website only for lawful purposes and in
                accordance with these Terms. You agree not to misuse the website,
                interfere with its operation, attempt unauthorized access,
                introduce malicious code, scrape or copy the website in an
                automated way, or use the website in a manner that could damage
                Bigger Than Most, our customers, our systems, or our brand.
              </p>
            </section>

            <section id="products" className="terms-block">
              <h2>4. Product Information, Orders, and Availability</h2>
              <p>
                We work to present product information, pricing, images,
                descriptions, availability, specifications, and shipping details
                accurately. However, errors may occur. We may correct errors,
                update product information, change availability, refuse or cancel
                orders, or modify products at any time as allowed by law.
              </p>
              <p>
                Product images, renderings, prototypes, samples, specifications,
                and descriptions may differ from final production products. When
                a product is in development, pre-launch, preorder, or limited
                release, final specifications may change before shipment.
              </p>
              <p>
                Placing an order does not guarantee acceptance. We may refuse or
                cancel an order if a product is unavailable, pricing is incorrect,
                payment cannot be verified, fraud is suspected, shipping is not
                available, or the order appears inconsistent with these Terms.
              </p>
            </section>

            <section id="shipping" className="terms-block">
              <h2>5. Shipping, Delivery, and Risk of Loss</h2>
              <p>
                Shipping options, timelines, carriers, costs, and delivery
                estimates may vary by order and location. Delivery dates are
                estimates unless expressly stated otherwise. Once a package is
                transferred to a carrier, delivery is subject to the carrier’s
                handling, routing, and timing.
              </p>
              <p>
                Customers are responsible for providing accurate shipping
                information. Bigger Than Most is not responsible for delays,
                failed delivery, additional costs, or lost packages caused by
                incorrect or incomplete customer-provided information.
              </p>
            </section>

            <section id="safety" className="terms-block terms-safety-block">
              <h2>6. Product Use, Safety, and Assumption of Risk</h2>
              <p>
                Strength training, resistance training, fitness equipment use, and related physical activity involve inherent risks. These risks may include equipment failure, loss of control, impact injuries, falls, serious bodily injury, permanent disability, property damage, or death.
              </p>
              <p>
                Use all Bigger Than Most products with common sense and only within your own ability, experience, and physical limits. It is your responsibility to learn and use proper technique, follow all product instructions and warnings, inspect equipment before use, and ensure that any product is installed, secured, and used correctly.
              </p>
              <p>
                Bigger Than Most products are intended for competent, responsible users. Do not use any product if you are unsure how to install it, inspect it, or use it safely. Stop use immediately if any product, component, fastener, material, or connected equipment appears loose, worn, damaged, defective, or unsafe.              </p>
              <p>
                By purchasing, installing, or using Bigger Than Most products, you understand and accept the risks associated with training and equipment use. You assume full responsibility for any injury, death, property damage, or loss that may result from improper installation, misuse, unsafe use, unauthorized modification, failure to inspect equipment, failure to follow instructions, or use beyond the product’s intended purpose.
              </p>
              <p>
                To the fullest extent permitted by law, LP Innovations LLC / Bigger Than Most shall not be liable for any damages, injuries, losses, or claims arising from misuse, improper installation, unsafe training practices, failure to inspect equipment, use with incompatible or damaged equipment, or use outside the stated instructions and intended purpose. Bigger Than Most’s liability, if any, shall be limited to the replacement value of the product purchased.              </p>
            </section>

            <section id="compatibility" className="terms-block">
              <h2>7. Compatibility and Installation</h2>
              <p>
                Some Bigger Than Most products may be designed for use with
                specific equipment types, sizes, surfaces, materials, or
                configurations. Compatibility information may be based on product
                testing, published dimensions, sample units, or customer-provided
                measurements.
              </p>
              <p>
                Because equipment dimensions and designs vary by manufacturer,
                product compatibility is not guaranteed unless expressly stated in
                the written product materials. Customers are responsible for
                confirming compatibility, proper installation, and secure fit
                before use.
              </p>
            </section>

            <section id="warranty" className="terms-block">
              <h2>8. Warranty, Returns, and Product Support</h2>
              <p>
                Product warranties, return rights, replacement terms, and support
                procedures may vary by product and will be described in the
                applicable warranty or return policy. Any warranty offered by
                Bigger Than Most applies only as stated in the written warranty
                terms for that product.
              </p>
              <p>
                A warranty does not make damaged or improperly installed
                equipment safe to use. If a product is damaged, worn, loose,
                defective, or behaving unexpectedly, stop using it immediately and
                contact Bigger Than Most for support.
              </p>
            </section>

            <section id="user-content" className="terms-block">
              <h2>9. Reviews, Photos, Feedback, and User Content</h2>
              <p>
                If you submit reviews, comments, photos, videos, testimonials,
                feedback, ideas, or other content to Bigger Than Most, you grant
                Bigger Than Most a non-exclusive, worldwide, royalty-free right to
                use, reproduce, display, publish, edit, and share that content in
                connection with our business, marketing, products, and website,
                unless otherwise prohibited by law or agreed in writing.
              </p>
              <p>
                You are responsible for ensuring that any content you submit is
                accurate, lawful, does not infringe the rights of others, and does
                not include content you do not have permission to share.
              </p>
            </section>

            <section id="ip" className="terms-block">
              <h2>10. Intellectual Property</h2>
              <p>
                The Bigger Than Most name, logos, designs, product names,
                product designs, artwork, graphics, images, videos, written
                content, website design, and other materials are owned by or
                licensed to LP Innovations LLC and are protected by trademark,
                copyright, patent, trade dress, and other intellectual property
                laws.
              </p>
              <p>
                You may not copy, reproduce, modify, distribute, display, sell,
                reverse engineer, manufacture, create derivative works from, or
                otherwise exploit any Bigger Than Most intellectual property
                without prior written permission.
              </p>
            </section>

            <section id="third-party" className="terms-block">
              <h2>11. Third-Party Services and Links</h2>
              <p>
                The website may include links to third-party websites, services,
                carriers, payment processors, social platforms, or other external
                resources. Bigger Than Most does not control those third parties
                and is not responsible for their content, policies, practices,
                delays, errors, or services.
              </p>
            </section>

            <section id="privacy" className="terms-block">
              <h2>12. Privacy</h2>
              <p>
                Our collection and use of personal information is described in
                our Privacy Policy. By using the website or submitting
                information, you acknowledge that you have reviewed the Privacy
                Policy and understand that information may be collected and used
                as described there.
              </p>
            </section>

            <section id="disclaimers" className="terms-block">
              <h2>13. Disclaimers</h2>
              <p>
                To the fullest extent permitted by law, the website, website
                content, digital features, product information, and related
                services are provided on an “as available” basis. Bigger Than
                Most does not guarantee that the website will be uninterrupted,
                error-free, secure, current, or free of harmful components.
              </p>
              <p>
                Except for any written warranty expressly provided for a specific
                product, Bigger Than Most disclaims all warranties to the maximum
                extent permitted by law, including implied warranties of
                merchantability, fitness for a particular purpose, non-
                infringement, accuracy, completeness, and course-of-dealing
                warranties.
              </p>
            </section>

            <section id="liability" className="terms-block">
              <h2>14. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Bigger Than Most, LP
                Innovations LLC, and their owners, members, officers, employees,
                contractors, suppliers, service providers, and affiliates will not
                be liable for indirect, incidental, special, consequential,
                punitive, exemplary, or similar damages arising out of or related
                to your use of the website, purchase or use of products, inability
                to use products, misuse of products, delay, lost data, lost
                profits, business interruption, or property damage, even if we
                have been advised of the possibility of such damages.
              </p>
              <p>
                Some states do not allow certain limitations or exclusions, so
                some parts of this section may not apply to you. Nothing in these
                Terms is intended to limit liability in a way that is prohibited
                by applicable law.
              </p>
            </section>

            <section id="indemnification" className="terms-block">
              <h2>15. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Bigger Than
                Most, LP Innovations LLC, and their owners, members, officers,
                employees, contractors, suppliers, service providers, and
                affiliates from claims, damages, losses, liabilities, costs, and
                expenses arising from your misuse of the website or products,
                violation of these Terms, violation of law, violation of the
                rights of another person, or submission of unlawful or infringing
                content.
              </p>
            </section>

            <section id="disputes" className="terms-block">
              <h2>16. Governing Law and Disputes</h2>
              <p>
                These Terms are governed by the laws of the State of Ohio,
                without regard to conflict-of-law principles, unless applicable
                law requires otherwise. Any dispute arising from or relating to
                these Terms, the website, or Bigger Than Most products will be
                handled in the state or federal courts located in Ohio, unless a
                different dispute-resolution process is required by applicable law
                or agreed in writing.
              </p>
              {/* <p className="terms-note">
                Attorney review recommended: if you want arbitration, class
                action waiver, jury-trial waiver, or a shortened claim period,
                those provisions should be drafted by an attorney for your
                specific state, sales process, and risk profile.
              </p> */}
            </section>

            <section id="changes" className="terms-block">
              <h2>17. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. The updated version
                will be posted on the website with a revised effective date.
                Continued use of the website or purchase of products after an
                update means you accept the updated Terms.
              </p>
            </section>

            <section id="contact" className="terms-block">
              <h2>18. Contact</h2>
              <p>
                Questions about these Terms may be sent to Bigger Than Most at:
              </p>
              <p>
                <strong>LP Innovations LLC / Bigger Than Most</strong>
                <br />
                Email: support@biggerthanmost.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TermsPage;
