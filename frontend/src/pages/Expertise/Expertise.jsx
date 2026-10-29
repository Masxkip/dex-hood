
import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";

import expertiseImage from "../../assets/h1.jpg";

import "./Expertise.css";

/* =========================================
   EXPERTISE DATA
========================================= */

const expertiseItems = [
  {
    number: "01",
    title: "Detailed Cleaning Approach",
    description:
      "Every kitchen has different ventilation equipment and cleaning requirements. We focus on accessible hood interiors, grease filters, and exhaust components included in the agreed scope of work, with careful attention to grease buildup and residue.",
  },
  {
    number: "02",
    title: "Convenient Scheduling",
    description:
      "We understand that commercial kitchens and residential properties have different schedules. Our team works with customers to discuss suitable cleaning appointments and minimize unnecessary disruption to everyday kitchen activities.",
  },
  {
    number: "03",
    title: "Commercial & Residential Services",
    description:
      "From restaurant kitchens and commercial food preparation facilities to residential range hoods, HoodClean provides cleaning services tailored to different kitchen environments, equipment configurations, and maintenance needs.",
  },
  {
    number: "04",
    title: "Clear Communication & Service Planning",
    description:
      "We believe a professional cleaning experience begins with understanding your needs. We discuss the equipment, cleaning requirements, accessibility, and expected scope of service so you know what to expect before work begins.",
  },
];

/* =========================================
   EXPERTISE COMPONENT
========================================= */

export default function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();

  /* =========================================
     ACCORDION TOGGLE
  ========================================= */

  const toggleAccordion = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      className="expertise"
      aria-labelledby={`${baseId}-heading`}
    >
      <div className="container expertise__container">

        {/* =====================================
           LEFT - IMAGE
        ===================================== */}

        <div className="expertise__media">
          <img
            src={expertiseImage}
            alt="Commercial kitchen with stainless steel hood and ventilation equipment"
            className="expertise__image"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* =====================================
           RIGHT - CONTENT
        ===================================== */}

        <div className="expertise__content">

          {/* EYEBROW */}

          <span className="eyebrow expertise__eyebrow">
            The HoodClean Difference
          </span>

          {/* MAIN HEADING */}

          <h2
            id={`${baseId}-heading`}
            className="heading-section expertise__title"
          >
            Professional Kitchen Hood Cleaning
            Built Around Your Needs
          </h2>

          {/* SHORT INTRODUCTION */}

          <p className="expertise__intro">
            Helping Greater Vancouver businesses
            and homeowners maintain cleaner kitchen
            hood and exhaust systems.
          </p>

          {/* =====================================
             EXPERTISE ACCORDION
          ===================================== */}

          <div className="expertise__accordion">

            {expertiseItems.map((item, index) => {
              const isOpen = activeIndex === index;

              const buttonId =
                `${baseId}-button-${index}`;

              const panelId =
                `${baseId}-panel-${index}`;

              return (
                <div
                  key={item.number}
                  className={`expertise__item ${
                    isOpen
                      ? "expertise__item--open"
                      : ""
                  }`}
                >

                  {/* ACCORDION BUTTON */}

                  <h3 className="expertise__item-heading">
                    <button
                      id={buttonId}
                      type="button"
                      className="expertise__trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        toggleAccordion(index)
                      }
                    >

                      {/* ITEM NUMBER */}

                      <span className="expertise__number">
                        {item.number}
                      </span>

                      {/* ITEM TITLE */}

                      <span className="expertise__item-title">
                        {item.title}
                      </span>

                      {/* PLUS / MINUS ICON */}

                      <span
                        className="expertise__toggle-icon"
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <Minus
                            size={20}
                            strokeWidth={2.2}
                          />
                        ) : (
                          <Plus
                            size={20}
                            strokeWidth={2.2}
                          />
                        )}
                      </span>

                    </button>
                  </h3>

                  {/* =================================
                     EXPANDABLE DESCRIPTION
                  ================================= */}

                  <div
                    id={panelId}
                    className="expertise__panel"
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                  >
                    <div className="expertise__panel-inner">
                      <p className="expertise__answer">
                        {item.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
