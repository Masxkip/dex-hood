
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

import logo from "../../assets/h1.jpg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import "./Header.css";

/* =========================================
   BUSINESS PHONE NUMBER
   Replace these values with your real number
========================================= */

const PHONE_NUMBER = "+16045550147";
const PHONE_DISPLAY = "(604) 555-0147";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  /* ===== SCROLL DETECTION ===== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ===== WINDOW RESIZE ===== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [closeMenu]);

  /* ===== HEADER CLASSES ===== */

  const headerClasses = [
    "site-header",
    isScrolled ? "site-header--scrolled" : "",
    menuOpen ? "site-header--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <div className="container header-container">

        {/* ===== LOGO ===== */}

        <Link
          to="/"
          className="header-logo"
          aria-label="HoodClean Home"
          onClick={closeMenu}
        >
          <img src={logo} alt="HoodClean" />
        </Link>

        {/* ===== DESKTOP NAVIGATION ===== */}

        <DesktopNav />

        {/* ===== HEADER ACTIONS ===== */}

        <div className="header-actions">

          {/* CONSULTATION BUTTON */}

          <Link
            to="/contact"
            className="btn btn--primary header-button header-button--primary"
          >
            Schedule a Consultation

            <ArrowRight
              size={21}
              strokeWidth={2.4}
              className="header-button__arrow"
            />
          </Link>

          {/* PHONE BUTTON */}

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="btn btn--outline header-button header-button--phone"
            aria-label={`Call HoodClean at ${PHONE_DISPLAY}`}
          >
            <Phone
              size={19}
              strokeWidth={2.2}
              className="header-button__icon"
            />

            <span>{PHONE_DISPLAY}</span>
          </a>

        </div>

        {/* ===== MOBILE MENU TOGGLE ===== */}

        <button
          type="button"
          className="menu-toggle"
          aria-label={
            menuOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setMenuOpen((current) => !current)
          }
        >
          {menuOpen ? (
            <X size={34} strokeWidth={2.2} />
          ) : (
            <Menu size={34} strokeWidth={2.2} />
          )}
        </button>

      </div>

      {/* ===== MOBILE NAVIGATION ===== */}

      <MobileNav
        key={menuOpen ? "open" : "closed"}
        isOpen={menuOpen}
        onClose={closeMenu}
        phoneNumber={PHONE_NUMBER}
        phoneDisplay={PHONE_DISPLAY}
      />

    </header>
  );
}
