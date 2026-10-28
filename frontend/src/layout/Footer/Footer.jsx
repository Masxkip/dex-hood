
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { navigationLinks } from "../Header/navigationData";
import logo from "../../assets/h1.jpg";

import "./Footer.css";

/* =========================================
   CONTACT INFORMATION
   REPLACE PLACEHOLDERS LATER
========================================= */

const PHONE_NUMBER = "+16045550147";
const PHONE_DISPLAY = "(604) 555-0147";

const EMAIL = "hello@example.com";

const ADDRESS_LINE = "Your Street Address";
const ADDRESS_CITY = "Vancouver, BC, Canada";

/* =========================================
   OPENING HOURS
========================================= */

const openingHours = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const BUSINESS_HOURS = "8:00 AM – 8:00 PM";

/* =========================================
   FOOTER COMPONENT
========================================= */

export default function Footer() {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const currentYear = new Date().getFullYear();

  /* ===== DROPDOWN TOGGLE ===== */

  const toggleDropdown = (label) => {
    setExpandedMenu((current) =>
      current === label ? null : label
    );
  };

  const closeDropdown = () => {
    setExpandedMenu(null);
  };

  return (
    <footer className="site-footer">

      {/* =====================================
         MAIN FOOTER
      ===================================== */}

      <div className="container site-footer__container">

        {/* =====================================
           01. BRAND / ABOUT
        ===================================== */}

        <div className="site-footer__brand">

          <Link
            to="/"
            className="site-footer__brand-link"
            onClick={closeDropdown}
            aria-label="HoodClean Home"
          >
            <img
              src={logo}
              alt=""
              className="site-footer__logo"
            />

            
          </Link>

          <p className="site-footer__description">
            Professional commercial and residential
            kitchen hood and exhaust cleaning services
            throughout Greater Vancouver and surrounding
            areas. Helping businesses and homeowners
            maintain cleaner kitchen ventilation systems.
          </p>

          <p className="site-footer__tagline">
            SERVING GREATER VANCOUVER & SURROUNDING AREAS
          </p>

        </div>

        {/* =====================================
           02. QUICK ACCESS
        ===================================== */}

        <nav
          className="site-footer__column site-footer__navigation"
          aria-label="Footer quick access"
        >
          <h2 className="site-footer__heading">
            Quick Access
          </h2>

          <ul className="site-footer__links">

            {navigationLinks.map((item) => {
              const isExpanded =
                expandedMenu === item.label;

              const submenuId = `footer-submenu-${item.label
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`;

              return (
                <li
                  className="site-footer__nav-item"
                  key={item.label}
                >
                  {item.children ? (
                    <>
                      {/* EXPANDABLE NAVIGATION */}

                      <button
                        type="button"
                        className={`site-footer__nav-toggle ${
                          isExpanded ? "is-active" : ""
                        }`}
                        aria-expanded={isExpanded}
                        aria-controls={submenuId}
                        onClick={() =>
                          toggleDropdown(item.label)
                        }
                      >
                        <span>{item.label}</span>

                        <ChevronDown
                          size={18}
                          strokeWidth={2}
                          className={`site-footer__chevron ${
                            isExpanded ? "is-rotated" : ""
                          }`}
                        />
                      </button>

                      {/* DROPDOWN CONTENT */}

                      <div
                        id={submenuId}
                        className={`site-footer__submenu ${
                          isExpanded ? "is-expanded" : ""
                        }`}
                        inert={!isExpanded}
                      >
                        <div className="site-footer__submenu-inner">

                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="site-footer__submenu-link"
                              onClick={closeDropdown}
                            >
                              {child.label}
                            </Link>
                          ))}

                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="site-footer__nav-link"
                      onClick={closeDropdown}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}

            {/* PRIVACY POLICY */}

            <li className="site-footer__nav-item">
              <Link
                to="/privacy-policy"
                className="site-footer__nav-link"
                onClick={closeDropdown}
              >
                Privacy Policy
              </Link>
            </li>

            {/* TERMS OF SERVICE */}

            <li className="site-footer__nav-item">
              <Link
                to="/terms-of-service"
                className="site-footer__nav-link"
                onClick={closeDropdown}
              >
                Terms of Service
              </Link>
            </li>

          </ul>
        </nav>

        {/* =====================================
           03. OPENING HOURS
        ===================================== */}

        <section
          className="site-footer__column site-footer__hours"
          aria-labelledby="footer-hours-heading"
        >
          <h2
            id="footer-hours-heading"
            className="site-footer__heading"
          >
            Our Opening Hours
          </h2>

          <div className="site-footer__hours-list">

            {openingHours.map((day) => (
              <div
                className="site-footer__hours-row"
                key={day}
              >
                <span className="site-footer__day">
                  {day}
                </span>

                <span className="site-footer__time">
                  {BUSINESS_HOURS}
                </span>
              </div>
            ))}

          </div>
        </section>

        {/* =====================================
           04. GET IN TOUCH
        ===================================== */}

        <section
          className="site-footer__column site-footer__contact"
          aria-labelledby="footer-contact-heading"
        >
          <h2
            id="footer-contact-heading"
            className="site-footer__heading"
          >
            Get In Touch
          </h2>

          <div className="site-footer__contact-list">

            {/* PHONE */}

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="site-footer__contact-item"
            >
              <Phone
                size={21}
                strokeWidth={1.8}
              />

              <span>{PHONE_DISPLAY}</span>
            </a>

            {/* EMAIL */}

            <a
              href={`mailto:${EMAIL}`}
              className="site-footer__contact-item"
            >
              <Mail
                size={21}
                strokeWidth={1.8}
              />

              <span>{EMAIL}</span>
            </a>

            {/* ADDRESS */}

            <div className="site-footer__contact-item site-footer__address">

              <MapPin
                size={22}
                strokeWidth={1.8}
              />

              <address>
                <strong>Business Address</strong>

                <span>{ADDRESS_LINE}</span>

                <span>{ADDRESS_CITY}</span>
              </address>

            </div>

          </div>
        </section>

      </div>

      {/* =====================================
         FOOTER BOTTOM
      ===================================== */}

      <div className="container site-footer__bottom">

        <p className="site-footer__copyright">
          © {currentYear} HoodClean. All rights reserved.
        </p>

      </div>

    </footer>
  );
}
