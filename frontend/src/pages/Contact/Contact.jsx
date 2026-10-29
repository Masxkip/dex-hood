
import {
  Clock3,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";

import Hero2 from "../../components/Hero2/Hero2";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import QuoteForm from "../../components/QuoteForm/QuoteForm";

import { businessInfo } from "../../data/businessInfo";

import "./Contact.css";

/* =========================================
   CONTACT PAGE
========================================= */

export default function Contact() {
  return (
    <main className="contact-page">

      {/* =====================================
          01. REUSABLE HERO2 SECTION
      ===================================== */}

      <Hero2
        title="Get a Free Quote"
        description="Looking for professional commercial or residential kitchen hood cleaning? Tell us about your project and let HoodClean help you find the right solution."
        buttonText="Start Your Quote"
        buttonLink="/contact#quote-form"
      />

      {/* =====================================
          02. BREADCRUMB NAVIGATION
      ===================================== */}

      <div className="contact-page__breadcrumb-wrap">
        <div className="container">
          <Breadcrumbs
            items={[
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Get a Quote",
              },
            ]}
          />
        </div>
      </div>

      {/* =====================================
          03. CONTACT INTRODUCTION + FORM
      ===================================== */}

      <section
        id="quote-form"
        className="contact-page__main"
        aria-labelledby="contact-page-title"
      >
        <div className="container">

          <div className="contact-page__grid">

            {/* LEFT CONTENT */}

            <div className="contact-page__content">

              <span className="eyebrow contact-page__eyebrow">
                Speak to Our Experts
              </span>

              <h2
                id="contact-page-title"
                className="contact-page__title"
              >
                Professional Kitchen Hood Cleaning
                in{" "}
                <span className="text-accent">
                  Greater Vancouver.
                </span>
              </h2>

              <p className="contact-page__lead">
                Every kitchen has different cleaning
                and maintenance needs. Whether you're
                managing a commercial kitchen or
                maintaining your home's range hood,
                we're here to help.
              </p>

              <p className="contact-page__description">
                Complete our quotation form with a
                few details about your property and
                the services you need. Our team will
                review your enquiry and get in touch
                to discuss the next steps.
              </p>

              <div className="contact-page__benefits">

                <div className="contact-page__benefit">
                  <CheckCircle2
                    size={22}
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />

                  <span>
                    Commercial and residential
                    kitchen cleaning services
                  </span>
                </div>

                <div className="contact-page__benefit">
                  <CheckCircle2
                    size={22}
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />

                  <span>
                    Solutions tailored to your
                    kitchen and service requirements
                  </span>
                </div>

                <div className="contact-page__benefit">
                  <CheckCircle2
                    size={22}
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />

                  <span>
                    Serving Greater Vancouver
                    and surrounding communities
                  </span>
                </div>

              </div>

              {/* CONTACT PROMPT */}

              <div className="contact-page__direct-contact">

                <span>
                  Prefer to speak with someone?
                </span>

                <a
                  href={`tel:${businessInfo.phoneNumber}`}
                >
                  <Phone
                    size={19}
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  {businessInfo.phoneDisplay}
                </a>

              </div>

            </div>

            {/* RIGHT FORM */}

            <div className="contact-page__form-column">
              <QuoteForm variant="page" />
            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          04. BUSINESS CONTACT INFORMATION
      ===================================== */}

      <section
        className="contact-page__details section--light"
        aria-labelledby="contact-details-title"
      >
        <div className="container">

          {/* SECTION HEADING */}

          <div className="contact-page__details-heading">

            <span className="eyebrow contact-page__eyebrow">
              Get In Touch
            </span>

            <h2 id="contact-details-title">
              Contact Information
            </h2>

            <p>
              Have questions before requesting
              a quote? You can also reach us
              using the contact details below.
            </p>

          </div>

          {/* DETAILS GRID */}

          <div className="contact-page__details-grid">

            {/* OPENING HOURS */}

            <div className="contact-page__detail-card">

              <div className="contact-page__detail-icon">
                <Clock3
                  size={26}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <h3>Opening Hours</h3>

              <div className="contact-page__hours">

                {businessInfo.openingHours.map(
                  (schedule) => (
                    <div
                      className="contact-page__hours-row"
                      key={schedule.days}
                    >
                      <span>{schedule.days}</span>

                      <strong>
                        {schedule.hours}
                      </strong>
                    </div>
                  )
                )}

              </div>
            </div>

            {/* BUSINESS ADDRESS */}

            <div className="contact-page__detail-card">

              <div className="contact-page__detail-icon">
                <MapPin
                  size={26}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <h3>Our Location</h3>

              <address className="contact-page__address">
                <span>
                  {businessInfo.addressLine}
                </span>

                <span>
                  {businessInfo.addressCity}
                </span>
              </address>

              <p className="contact-page__detail-description">
                Proudly providing kitchen hood
                cleaning and maintenance services
                throughout Greater Vancouver.
              </p>

            </div>

            {/* PHONE AND EMAIL */}

            <div className="contact-page__detail-card">

              <div className="contact-page__detail-icon">
                <Phone
                  size={26}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <h3>Phone & Email</h3>

              <div className="contact-page__contact-links">

                <a
                  href={`tel:${businessInfo.phoneNumber}`}
                >
                  <Phone
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <span>
                    {businessInfo.phoneDisplay}
                  </span>
                </a>

                <a
                  href={`mailto:${businessInfo.email}`}
                >
                  <Mail
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <span>
                    {businessInfo.email}
                  </span>
                </a>

              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
