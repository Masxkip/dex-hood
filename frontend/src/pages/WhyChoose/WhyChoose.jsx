
import { Check } from "lucide-react";

import whyChooseImage from "../../assets/h1.jpg";

import "./WhyChoose.css";

/* =========================================
   WHY CHOOSE - REASONS
========================================= */

const reasons = [
  {
    title: "Cleaning Services You Can Rely On:",
    description:
      "We provide commercial and residential kitchen hood cleaning throughout Greater Vancouver, with careful attention to grease buildup, kitchen ventilation, and the condition of your equipment.",
  },

  {
    title: "Comprehensive Cleaning Solutions:",
    description:
      "From kitchen hood and canopy cleaning to grease filters and accessible exhaust ducts, we tailor our cleaning approach to your kitchen's specific equipment and maintenance requirements.",
  },

  {
    title: "A Customer-Focused Approach:",
    description:
      "Every kitchen is different. We work to understand your cleaning needs, discuss the scope of work, and coordinate appointments around your schedule.",
  },
];

/* =========================================
   WHY CHOOSE - BENEFITS
========================================= */

const benefits = [
  "Professional commercial and residential hood cleaning",
  "Attention to detail and careful equipment handling",
  "Cleaning solutions tailored to your kitchen",
  "Flexible scheduling and clear communication",
];

/* =========================================
   WHY CHOOSE COMPONENT
========================================= */

export default function WhyChoose() {
  return (
    <section
      className="why-choose"
      aria-labelledby="why-choose-heading"
    >
      <div className="why-choose__container">

        {/* =====================================
           LEFT - CONTENT
        ===================================== */}

        <div className="why-choose__content">

          {/* EYEBROW */}

          <span className="eyebrow why-choose__eyebrow">
            The HoodClean Difference
          </span>

          {/* MAIN HEADING */}

          <h2
            id="why-choose-heading"
            className="heading-section why-choose__title"
          >
            Why Greater Vancouver Kitchens
            Choose HoodClean
          </h2>

          {/* SHORT DESCRIPTION */}

          <p className="why-choose__intro">
            Professional kitchen hood and exhaust
            cleaning, tailored to your equipment
            and built around your schedule.
          </p>

          {/* =====================================
             REASONS
          ===================================== */}

          <div className="why-choose__reasons">

            {reasons.map((reason) => (
              <p
                className="why-choose__reason"
                key={reason.title}
              >
                <strong className="why-choose__reason-label">
                  {reason.title}
                </strong>{" "}
                {reason.description}
              </p>
            ))}

          </div>

          {/* =====================================
             BENEFITS CHECKLIST
          ===================================== */}

          <ul className="why-choose__benefits">

            {benefits.map((benefit) => (
              <li
                className="why-choose__benefit"
                key={benefit}
              >

                {/* OUTLINED CHECK ICON */}

                <span
                  className="why-choose__check"
                  aria-hidden="true"
                >
                  <Check
                    size={17}
                    strokeWidth={2.2}
                  />
                </span>

                {/* BENEFIT TEXT */}

                <span className="why-choose__benefit-text">
                  {benefit}
                </span>

              </li>
            ))}

          </ul>

        </div>

        {/* =====================================
           RIGHT - IMAGE
        ===================================== */}

        <div className="why-choose__media">

          <img
            src={whyChooseImage}
            alt="Commercial kitchen with professional stainless steel equipment and ventilation"
            className="why-choose__image"
            loading="lazy"
            decoding="async"
          />

        </div>

      </div>
    </section>
  );
}
