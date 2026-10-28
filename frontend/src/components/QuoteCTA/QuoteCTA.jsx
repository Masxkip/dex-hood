
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import "./QuoteCTA.css";

export default function QuoteCTA() {
  return (
    <section
      className="quote-cta"
      aria-labelledby="quote-cta-heading"
    >
      <div className="container quote-cta__container">
        <div className="quote-cta__content">

          {/* ===== EYEBROW ===== */}

          <span className="eyebrow quote-cta__eyebrow">
            Commercial & Residential Hood Cleaning
          </span>

          {/* ===== HEADING ===== */}

          <h2
            id="quote-cta-heading"
            className="heading-section quote-cta__title"
          >
            Need a Cleaner, Safer Kitchen?
            Request a Quote Today!
          </h2>

          {/* ===== DESCRIPTION ===== */}

          <p className="quote-cta__description">
            Professional kitchen hood and exhaust cleaning
            services throughout Greater Vancouver.
            Tell us what you need, and we'll help
            you get started.
          </p>

          {/* ===== CTA BUTTON ===== */}

          <div className="quote-cta__actions">
            <Link
              to="/contact"
              className="btn btn--primary quote-cta__button"
            >
              <span>Request a Quote</span>

              <ArrowRight
                size={22}
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
