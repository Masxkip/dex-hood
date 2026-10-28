
import "./Legal.css";

export default function LegalLayout({

  children,
}) {
  return (
    <main
      className="legal-page"
      aria-labelledby="legal-page-title"
    >
      <div className="container legal-page__container">

        {/* ===== PAGE HEADER ===== */}

        <header className="legal-page__header">
         

         

          <p className="legal-page__updated">
            Last updated: [25/10/26]
          </p>
        </header>

        {/* ===== LEGAL CONTENT ===== */}

        <article className="legal-page__content">
          {children}
        </article>

      </div>
    </main>
  );
}
