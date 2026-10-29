
import Hero2 from "../../components/Hero2/Hero2";

import "./Legal.css";

export default function LegalLayout({
  title,
  description,
  children,
}) {
  return (
    <main className="legal-page">

      {/* =====================================
         HERO SECTION
      ===================================== */}

      <Hero2
        title={title}
        description={description}
        buttonText="Request a Quote"
        buttonLink="/contact"
      />

      {/* =====================================
         LEGAL CONTENT
      ===================================== */}

      <div className="container legal-page__container">

        {/* LAST UPDATED */}

        <header className="legal-page__header">
          <p className="legal-page__updated">
            Last updated: October 25, 2026
          </p>
        </header>

        {/* PAGE CONTENT */}

        <article className="legal-page__content">
          {children}
        </article>

      </div>

    </main>
  );
}
