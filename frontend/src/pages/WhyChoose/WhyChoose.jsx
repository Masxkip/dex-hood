import { Check } from "lucide-react";

import whyChooseImage from "../../assets/h1.jpg";

import "./WhyChoose.css";

/* =========================================
   WHY CHOOSE - REASONS
========================================= */

const reasons = [
  {
    title: "A Standard of Care You Can See:",
    description:
      "The difference is in the details: grease lifted from cooking surfaces, refreshed cabinet fronts and attention to corners that are easily overlooked. We bring that same care to every kitchen, treating your surfaces, appliances and equipment with respect.",
  },
  {
    title: "More Than a Surface Clean:",
    description:
      "From appliance interiors and storage spaces to countertops, floors, hoods and exhaust systems, we address the buildup that everyday cleaning leaves behind. Your service is shaped around your kitchen's condition and the areas that need attention.",
  },
  {
    title: "Your Kitchen, Your Priorities:",
    description:
      "We listen to what matters to you, explain the work involved and arrange a visit that fits your routine. Whether you run a busy restaurant or are caring for your home, you can expect clear communication and a thoughtful approach from start to finish.",
  },
];

/* =========================================
   WHY CHOOSE - BENEFITS
========================================= */

const benefits = [
  "Professional care for home and commercial kitchens",
  "Detailed attention to visible and overlooked areas",
  "Cleaning methods suited to your surfaces and equipment",
  "Thoughtful scheduling and straightforward communication",
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

        {/* LEFT CONTENT */}

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
            From the surfaces you see to the corners
            you rarely reach, we bring a careful eye
            and a professional touch to your kitchen.
          </p>

          {/* REASONS */}

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

          {/* BENEFITS CHECKLIST */}

          <ul className="why-choose__benefits">
            {benefits.map((benefit) => (
              <li
                className="why-choose__benefit"
                key={benefit}
              >
                <span
                  className="why-choose__check"
                  aria-hidden="true"
                >
                  <Check
                    size={17}
                    strokeWidth={2.2}
                  />
                </span>

                <span className="why-choose__benefit-text">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

        </div>

        {/* RIGHT IMAGE */}

        <div className="why-choose__media">
          <img
            src={whyChooseImage}
            alt="Commercial kitchen with stainless steel equipment and ventilation"
            className="why-choose__image"
            loading="lazy"
            decoding="async"
          />
        </div>

      </div>
    </section>
  );
}