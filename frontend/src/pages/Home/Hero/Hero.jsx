
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "../../../assets/h1.jpg";

import "./Hero.css";

/* =========================================
   BUSINESS PHONE NUMBER
========================================= */

const PHONE_NUMBER = "+16045550147";
const PHONE_DISPLAY = "(604) 555-0147";

export default function Hero() {
  return (
    <section
      className="home-hero"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.78) 0%,
            rgba(0, 0, 0, 0.62) 50%,
            rgba(0, 0, 0, 0.45) 100%
          ),
          url(${heroImage})
        `,
      }}
    >
      <div className="container home-hero__container">
        <div className="home-hero__content">

          {/* ===== EYEBROW ===== */}

          <span className="eyebrow home-hero__eyebrow">
            Vancouver's #1
          </span>

          {/* ===== HERO HEADING ===== */}

          <h1 className="heading-hero home-hero__title">
            Pristine Commercial & Residential Hood
            Cleaning In{" "}
            <span className="text-accent">
              Vancouver, BC
            </span>
          </h1>

          {/* ===== DESCRIPTION ===== */}

          <p className="home-hero__description">
            Proudly serving Greater Vancouver & surrounding
            areas with professional kitchen hood and exhaust
            cleaning services.
          </p>

          {/* ===== CTA BUTTONS ===== */}

          <div className="home-hero__actions">

            {/* REQUEST A QUOTE */}

            <Link
              to="/contact"
              className="btn btn--primary home-hero__button"
            >
              Request a Quote

              <ArrowRight
                size={21}
                strokeWidth={2.4}
              />
            </Link>

            {/* PHONE NUMBER */}

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="btn btn--outline home-hero__button"
              aria-label={`Call HoodClean at ${PHONE_DISPLAY}`}
            >
              <Phone
                size={21}
                strokeWidth={2.4}
              />

              <span>{PHONE_DISPLAY}</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
