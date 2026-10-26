import "./DesignPreview.css";

export default function DesignPreview() {
  return (
    <main>
      <section className="section section--dark preview-hero">
        <div className="container">
          <span className="eyebrow preview-eyebrow">
            Vancouver's #1
          </span>

          <h1 className="heading-hero preview-hero__title">
            Pristine Commercial & Residential Hood Cleaning In
            <span className="text-accent"> Vancouver, BC</span>{" "}
          </h1>

          <p className="preview-hero__description">
            Proudly, serving Greater Vancouver & surrounding Areas
          </p>

          <div className="preview-actions">
            <a href="#typography" className="preview-button">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      <section
        className="section section--light"
        id="typography"
      >
        <div className="container preview-content">
          <span className="eyebrow preview-eyebrow--light">
            Typography & Color Preview
          </span>

          <h2 className="heading-section">
            Why <span className="text-accent">Professional</span>{" "}
            Cleaning Matters
          </h2>

          <p>
            This section demonstrates the same large heading
            style, light background, and comfortable paragraph
            spacing from your reference screenshot.
          </p>

          <h3>Our Cleaning Standards</h3>

          <p>
            Every section will follow the same consistent
            typography system, making the website easy to
            maintain and update.
          </p>
        </div>
      </section>

      <section className="section section--orange">
        <div className="container preview-content">
          <span className="eyebrow preview-eyebrow--light">
            Soft Orange Background
          </span>

          <h2 className="heading-section">
            Built for <span className="text-accent">Cleanliness</span>{" "}
            and Confidence
          </h2>

          <p>
            This section previews the light orange background
            that we can use for testimonials, benefits, and
            important service information.
          </p>
        </div>
      </section>
    </main>
  );
}