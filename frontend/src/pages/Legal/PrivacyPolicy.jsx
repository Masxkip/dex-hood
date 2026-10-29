
import LegalLayout from "./LegalLayout";


export default function PrivacyPolicy() {
  return (

    
    
    <LegalLayout
      title="Privacy Policy"
      description="Learn how HoodClean collects, uses, and protects personal information when you visit our website or use our commercial and residential kitchen hood cleaning services."
    >

      {/* ===== INTRODUCTION ===== */}

      <div className="legal-page__intro">
        <p>
          HoodClean ("we", "us", or "our") respects
          your privacy and recognizes the importance
          of protecting personal information shared
          with us. This Privacy Policy outlines the
          types of information we may collect through
          our website, how that information may be
          used, and the choices available to you.
        </p>

        <p>
          This policy applies to visitors, customers,
          and individuals who contact us regarding
          our commercial and residential kitchen
          hood and exhaust cleaning services.
        </p>
      </div>

      {/* =====================================
         01. INFORMATION WE COLLECT
      ===================================== */}

      <section className="legal-page__section">
        <h2>1. Information We Collect</h2>

        <p>
          When you contact us, request a quotation,
          or use our website, we may collect
          information necessary to respond to your
          enquiry and provide our services.
        </p>

        <p>This information may include:</p>

        <ul>
          <li>
            Your name, business name, email address,
            phone number, and contact information.
          </li>

          <li>
            Property or business location details
            relevant to your service request.
          </li>

          <li>
            Information submitted through our
            contact forms or quotation requests.
          </li>

          <li>
            Details about the type of kitchen
            equipment, exhaust system, or cleaning
            service you require.
          </li>

          <li>
            Technical information such as browser
            type, device information, and website
            usage data where collected.
          </li>
        </ul>
      </section>

      {/* =====================================
         02. HOW WE USE INFORMATION
      ===================================== */}

      <section className="legal-page__section">
        <h2>2. How We Use Your Information</h2>

        <p>
          Information collected through our website
          may be used for purposes connected with
          operating our business and responding
          to customers.
        </p>

        <p>These purposes may include:</p>

        <ul>
          <li>
            Responding to enquiries and preparing
            service quotations.
          </li>

          <li>
            Arranging appointments and coordinating
            cleaning services.
          </li>

          <li>
            Communicating about existing or
            upcoming service requests.
          </li>

          <li>
            Maintaining business records and
            customer correspondence.
          </li>

          <li>
            Improving our website, communication,
            and overall customer experience.
          </li>

          <li>
            Sending service-related updates or
            promotional communications where
            permitted.
          </li>
        </ul>
      </section>

      {/* =====================================
         03. SHARING INFORMATION
      ===================================== */}

      <section className="legal-page__section">
        <h2>3. Sharing and Disclosure</h2>

        <p>
          We value the confidentiality of personal
          information. Information may be shared
          with third parties when necessary to
          support our business activities or
          fulfill a service request.
        </p>

        <p>Examples may include:</p>

        <ul>
          <li>
            Authorized team members or contractors
            assisting with service delivery.
          </li>

          <li>
            Technology providers supporting website
            hosting, communication, or scheduling.
          </li>

          <li>
            Professional advisers or service
            providers supporting business operations.
          </li>

          <li>
            Government authorities when disclosure
            is required by applicable law.
          </li>
        </ul>

        <p>
          Any sharing of personal information
          should be limited to appropriate
          business or legal purposes.
        </p>
      </section>

      {/* =====================================
         04. DATA SECURITY
      ===================================== */}

      <section className="legal-page__section">
        <h2>4. Information Storage and Security</h2>

        <p>
          We aim to use reasonable administrative,
          technical, and organizational safeguards
          to help protect information against
          unauthorized access, loss, misuse,
          or disclosure.
        </p>

        <p>
          Information may be retained for as long
          as needed for relevant business purposes
          or applicable recordkeeping obligations.
          No internet-based system can guarantee
          absolute security.
        </p>
      </section>

      {/* =====================================
         05. ACCESS AND CORRECTION
      ===================================== */}

      <section className="legal-page__section">
        <h2>5. Accessing and Updating Information</h2>

        <p>
          You may contact us if you wish to
          request access to personal information
          we hold about you or ask for inaccurate
          information to be corrected.
        </p>

        <p>
          Requests will be considered in accordance
          with applicable privacy requirements.
          We may need to verify your identity
          before processing certain requests.
        </p>
      </section>

      {/* =====================================
         06. COOKIES AND ANALYTICS
      ===================================== */}

      <section className="legal-page__section">
        <h2>6. Cookies and Website Analytics</h2>

        <p>
          Our website may use cookies and similar
          technologies to support website
          functionality, understand visitor
          activity, or improve the browsing
          experience.
        </p>

        <p>
          If analytics or advertising tools are
          enabled, those services may collect
          information about website interactions
          under their own privacy policies.
        </p>

        <p>
          You may be able to manage or disable
          certain cookies through your browser
          settings. Some website features may
          work differently when cookies are
          disabled.
        </p>
      </section>

      {/* =====================================
         07. PRIVACY QUESTIONS
      ===================================== */}

      <section className="legal-page__section">
        <h2>7. Privacy Questions and Concerns</h2>

        <p>
          If you have questions about how your
          information is handled, or believe
          information has been managed
          inappropriately, please contact us.
        </p>

        <p>
          We will review privacy-related enquiries
          and respond within a reasonable timeframe,
          taking into account the nature of the
          request and applicable requirements.
        </p>
      </section>

      {/* =====================================
         08. CONTACT
      ===================================== */}

      <section className="legal-page__section">
        <h2>8. Contact Information</h2>

        <p>
          For questions about this Privacy Policy
          or your personal information, please
          contact:
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
