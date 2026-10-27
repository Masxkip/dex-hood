
import { Link, useParams } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

import Hero2 from "../../components/Hero2/Hero2";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

import { serviceDetails } from "../../data/serviceDetails";

import "./ServiceDetail.css";

/* =========================================
   REUSABLE SERVICE CHECKLIST
========================================= */

function ScopeList({ items }) {
  return (
    <ul className="service-detail__checklist">
      {items.map((item) => (
        <li
          className="service-detail__check-item"
          key={item}
        >
          <span className="service-detail__check-icon">
            <Check
              size={18}
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* =========================================
   REUSABLE SERVICE DETAIL
========================================= */

export default function ServiceDetail({
  category,
  heroTitle,
  heroDescription,
}) {
  const { slug } = useParams();

  const serviceKey = `${category}/${slug}`;
  const service = serviceDetails[serviceKey];

  /* ===== INVALID SERVICE ===== */

  if (!service) {
    return (
      <main className="service-detail__not-found">
        <div className="container">
          <h1>Service Not Found</h1>

          <p>
            The requested service page could not be found.
          </p>

          <Link
            to="/services"
            className="btn btn--primary"
          >
            View All Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`service-detail-page service-detail-page--${category}`}
    >

      {/* =====================================
          REUSABLE HERO 2 SECTION
      ===================================== */}

      <Hero2
        title={heroTitle}
        description={heroDescription}
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />

      {/* =====================================
          SERVICE INTRODUCTION
      ===================================== */}

      <section
        className="service-detail__intro"
        aria-labelledby="service-detail-title"
      >
        <div className="container">

          {/* BREADCRUMB NAVIGATION */}

          <Breadcrumbs
            items={[
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Services",
                to: "/services",
              },
              {
                label: service.name,
              },
            ]}
          />

          {/* TWO COLUMN CONTENT */}

          <div className="service-detail__intro-grid">

            {/* LEFT COLUMN */}

            <div className="service-detail__intro-content">

              <h2
                id="service-detail-title"
                className="service-detail__title"
              >
                {service.title}
              </h2>

              <p className="service-detail__subtitle">
                {service.subtitle}
              </p>

              <p className="service-detail__description">
                {service.description}
              </p>

              {/* GET A QUOTE BUTTON */}

            <div className="service-detail__actions">
              <Link
                to="/contact"
                className="btn btn--primary service-detail__quote-button"
              >
                Get a Quote

                <ArrowRight
                  size={21}
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
              </Link>
            </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="service-detail__image-wrapper">
              <img
                src={service.image}
                alt={`${service.name} service`}
                className="service-detail__image"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          WHAT THE SERVICE INCLUDES
      ===================================== */}

      <section
        className="service-detail__scope section"
        aria-labelledby="service-scope-title"
      >
        <div className="container">

          {/* SCOPE CONTENT GRID */}

          <div className="service-detail__scope-grid">

            {/* LEFT COLUMN */}

            <div className="service-detail__scope-intro">

              <h2
                id="service-scope-title"
                className="service-detail__scope-title"
              >
                {service.scopeTitle}
              </h2>

              <p>
                {service.scopeDescription}
              </p>

            </div>

            {/* RIGHT COLUMN */}

            <div className="service-detail__scope-content">

              <h3 className="service-detail__group-title">
                The Work on Site
              </h3>

              <ScopeList items={service.work} />

            </div>

          </div>

          {/* =================================
              DETAILED SERVICE DESCRIPTION
          ================================= */}

          <div className="service-detail__closing">
            <p>{service.closing}</p>
          </div>

        </div>
      </section>

    </main>
  );
}
