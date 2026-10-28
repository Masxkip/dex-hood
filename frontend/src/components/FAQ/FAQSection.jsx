
import { useId, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import { faqData } from "./faqData";

import "./FAQSection.css";

/* =========================================
   FAQ SECTION
========================================= */

export default function FAQSection({
  variant = "home",
}) {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionId = useId();

  /* ===== PAGE TYPE ===== */

  const isFaqPage = variant === "page";

  /* ===== NUMBER OF QUESTIONS ===== */

  const questions = isFaqPage
    ? faqData
    : faqData.slice(0, 4);

  /* ===== TOGGLE QUESTION ===== */

  const toggleQuestion = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      className={`faq-section ${
        isFaqPage ? "faq-section--page" : ""
      }`}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="container faq-section__container">

        {/* =====================================
           LEFT - SECTION INFORMATION
        ===================================== */}

        <div className="faq-section__intro">

          {/* EYEBROW */}

          <span className="eyebrow faq-section__eyebrow">
            Frequently Asked Questions
          </span>

          {/* HEADING */}

          <h2
            id={`${sectionId}-heading`}
            className="heading-section faq-section__title"
          >
            Common questions
          </h2>

          {/* DESCRIPTION */}

          <p className="faq-section__description">
            {isFaqPage
              ? "Have questions about our kitchen hood cleaning services? We've put together answers to some of the most common questions about our cleaning process, service areas, quotations, and maintenance options."
              : "Here are some of the questions our customers frequently ask about our commercial and residential kitchen hood cleaning services. Find helpful answers before getting started."}
          </p>

        </div>

        {/* =====================================
           RIGHT - FAQ ACCORDION
        ===================================== */}

        <div className="faq-section__content">

          <div className="faq-section__list">

            {questions.map((item, index) => {
              const isOpen = openIndex === index;

              const questionId =
                `${sectionId}-question-${index}`;

              const answerId =
                `${sectionId}-answer-${index}`;

              return (
                <div
                  className={`faq-item ${
                    isOpen ? "faq-item--open" : ""
                  }`}
                  key={item.question}
                >

                  {/* ===== QUESTION BUTTON ===== */}

                  <h3 className="faq-item__heading">
                    <button
                      id={questionId}
                      type="button"
                      className="faq-item__question"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        toggleQuestion(index)
                      }
                    >
                      <span className="faq-item__question-text">
                        {item.question}
                      </span>

                      <ChevronDown
                        size={22}
                        strokeWidth={2}
                        className="faq-item__icon"
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  {/* ===== ANSWER PANEL ===== */}

                  <div
                    id={answerId}
                    className="faq-item__panel"
                    role="region"
                    aria-labelledby={questionId}
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                  >
                    <div className="faq-item__panel-inner">

                      <p className="faq-item__answer">
                        {item.answer}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>

          {/* =====================================
             VIEW ALL FAQS - HOMEPAGE ONLY
          ===================================== */}

          {!isFaqPage && (
            <Link
              to="/faqs"
              className="faq-section__more"
            >
              <span>View All FAQs</span>

              <ArrowRight
                size={20}
                strokeWidth={2.2}
                aria-hidden="true"
              />
            </Link>
          )}

        </div>

      </div>
    </section>
  );
}
