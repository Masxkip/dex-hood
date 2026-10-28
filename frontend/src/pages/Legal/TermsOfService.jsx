
import { Link } from "react-router-dom";
import LegalLayout from "./LegalLayout";

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service">

      {/* ===== INTRODUCTION ===== */}

      <div className="legal-page__intro">
        <p>
          Welcome to the HoodClean website.
          These Terms of Service explain the
          conditions associated with accessing
          and using our website, its information,
          and its online features.
        </p>

        <p>
          By using this website, you acknowledge
          these terms. Arrangements for cleaning
          services may be subject to additional
          terms provided in a quotation,
          service agreement, or written confirmation.
        </p>
      </div>

      {/* =====================================
         01. WEBSITE USE
      ===================================== */}

      <section className="legal-page__section">
        <h2>1. Use of Our Website</h2>

        <p>
          Our website provides general information
          about HoodClean, our commercial and
          residential cleaning services, and
          ways to contact our team.
        </p>

        <p>
          Visitors are expected to use the website
          responsibly and for lawful purposes.
          Activities that interfere with website
          operation, security, or availability
          are not permitted.
        </p>
      </section>

      {/* =====================================
         02. WEBSITE CONTENT
      ===================================== */}

      <section className="legal-page__section">
        <h2>2. Content and Intellectual Property</h2>

        <p>
          The text, graphics, images, branding,
          design elements, and other materials
          displayed on this website may be
          owned by HoodClean or used with
          appropriate permission.
        </p>

        <p>
          Website materials are intended for
          personal and informational use.
          Reproduction, redistribution, or
          commercial use of protected content
          may require prior authorization.
        </p>
      </section>

      {/* =====================================
         03. SERVICE INFORMATION
      ===================================== */}

      <section className="legal-page__section">
        <h2>3. Service Information</h2>

        <p>
          Information about our kitchen hood,
          exhaust duct, grease filter, and
          ventilation cleaning services is
          provided for general guidance.
        </p>

        <p>
          The availability, scope, duration,
          and pricing of individual services
          may vary depending on equipment,
          property conditions, location,
          and project requirements.
        </p>
      </section>

      {/* =====================================
         04. QUOTATIONS
      ===================================== */}

      <section className="legal-page__section">
        <h2>4. Quotations and Service Bookings</h2>

        <p>
          Submitting an enquiry or requesting
          a quotation through our website
          does not automatically confirm
          a booking or service agreement.
        </p>

        <p>
          Quotations may be based on the
          information supplied by the customer
          and may be subject to assessment
          or confirmation of the required
          scope of work.
        </p>

        <p>
          Specific service arrangements,
          responsibilities, payment terms,
          and scheduling details should be
          confirmed separately in writing.
        </p>
      </section>

      {/* =====================================
         05. THIRD-PARTY LINKS
      ===================================== */}

      <section className="legal-page__section">
        <h2>5. Third-Party Websites</h2>

        <p>
          Our website may include links
          to external websites, online maps,
          social media platforms, or
          third-party services.
        </p>

        <p>
          These external resources operate
          independently of HoodClean.
          Visitors should review the relevant
          terms and privacy policies before
          using third-party websites.
        </p>
      </section>

      {/* =====================================
         06. WEBSITE AVAILABILITY
      ===================================== */}

      <section className="legal-page__section">
        <h2>6. Website Availability and Accuracy</h2>

        <p>
          We aim to keep website information
          accurate, accessible, and up to date.
          However, service descriptions,
          availability, and other information
          may change over time.
        </p>

        <p>
          Website access may occasionally
          be interrupted for maintenance,
          technical updates, or circumstances
          outside our control.
        </p>
      </section>

      {/* =====================================
         07. PRIVACY
      ===================================== */}

      <section className="legal-page__section">
        <h2>7. Privacy and Personal Information</h2>

        <p>
          Information submitted through
          our website may be collected and
          handled for the purposes described
          in our Privacy Policy.
        </p>

        <p>
          For further details about information
          collection, website technologies,
          and privacy-related enquiries,
          please review our{" "}
          <Link to="/privacy-policy">
            Privacy Policy
          </Link>.
        </p>
      </section>

      {/* =====================================
         08. LEGAL RESPONSIBILITIES
      ===================================== */}

      <section className="legal-page__section">
        <h2>8. Legal Responsibilities</h2>

        <p>
          Website content is intended to provide
          general business and service information.
          It should not replace a professional
          assessment of a specific kitchen,
          ventilation system, or cleaning project.
        </p>

        <p>
          Any applicable limitations,
          consumer protections, and legal
          responsibilities will be governed
          by the relevant laws and any
          separate service agreement.
        </p>
      </section>

      {/* =====================================
         09. CHANGES TO TERMS
      ===================================== */}

      <section className="legal-page__section">
        <h2>9. Updates to These Terms</h2>

        <p>
          We may revise these Terms of Service
          to reflect changes to our website,
          business practices, or applicable
          requirements.
        </p>

        <p>
          The latest published version
          will be available on this page.
          Visitors are encouraged to review
          these terms periodically.
        </p>
      </section>

      {/* =====================================
         10. CONTACT
      ===================================== */}

      <section className="legal-page__section">
        <h2>10. Contact Information</h2>

        <p>
          If you have questions about these
          Terms of Service or information
          provided on our website,
          please contact:
        </p>

        <address className="legal-page__contact">
          <strong>HoodClean</strong>

          <span>
            Vancouver, British Columbia, Canada
          </span>

          <span>
            Email:{" "}
            <a href="mailto:hello@example.com">
              hello@example.com
            </a>
          </span>

          <span>
            Phone:{" "}
            <a href="tel:+16045550147">
              (604) 555-0147
            </a>
          </span>
        </address>
      </section>

    </LegalLayout>
  );
}
