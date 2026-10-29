
import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  Menu,
  X,
  ArrowRight,
  Phone,
} from "lucide-react";

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

/* =========================================
   HEADER CONTENT

   Handles scroll detection, mobile menu,
   navigation, and header interactions.
========================================= */

function HeaderContent() {

  /* =========================================
     HEADER STATE
  ========================================= */

  const [isScrolled, setIsScrolled] = useState(
    () => window.scrollY > 40
  );

  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================================
     CLOSE MOBILE MENU
  ========================================= */

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  /* =========================================
     SCROLL DETECTION

     Changes header appearance when the
     user scrolls more than 40px.
  ========================================= */

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  /* =========================================
     WINDOW RESIZE

     Automatically closes the mobile menu
     when switching to desktop view.
  ========================================= */

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

  /* =========================================
     HEADER CLASSES

     Controls transparent header, scrolled
     appearance, and open menu state.
  ========================================= */

  const headerClasses = [
    "site-header",
    isScrolled ? "site-header--scrolled" : "",
    menuOpen ? "site-header--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  /* =========================================
     MOBILE MENU TOGGLE
  ========================================= */

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  /* =========================================
     HEADER JSX
  ========================================= */

  return (
    <header className={headerClasses}>

      <div className="container header-container">

        {/* =====================================
            01. LOGO
        ===================================== */}

        <Link
          to="/"
          className="header-logo"
          aria-label="HoodClean Home"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="HoodClean"
          />
        </Link>

        {/* =====================================
            02. DESKTOP NAVIGATION

            Commercial and Residential labels
            navigate to their sections on
            the Services page.

            Individual services remain
            accessible through dropdowns.
        ===================================== */}

        <DesktopNav />

        {/* =====================================
            03. HEADER ACTIONS
        ===================================== */}

        <div className="header-actions">

          {/* SCHEDULE CONSULTATION */}

          <Link
            to="/contact"
            className="btn btn--primary header-button header-button--primary"
          >
            Schedule a Consultation

            <ArrowRight
              size={21}
              strokeWidth={2.4}
              className="header-button__arrow"
              aria-hidden="true"
            />
          </Link>

          {/* BUSINESS PHONE NUMBER */}

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="btn btn--outline header-button header-button--phone"
            aria-label={`Call HoodClean at ${PHONE_DISPLAY}`}
          >
            <Phone
              size={19}
              strokeWidth={2.2}
              className="header-button__icon"
              aria-hidden="true"
            />

            <span>
              {PHONE_DISPLAY}
            </span>
          </a>

        </div>

        {/* =====================================
            04. MOBILE MENU TOGGLE

            Displays hamburger icon when
            closed and X icon when open.
        ===================================== */}

        <button
          type="button"
          className="menu-toggle"
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <X
              size={34}
              strokeWidth={2.2}
              aria-hidden="true"
            />
          ) : (
            <Menu
              size={34}
              strokeWidth={2.2}
              aria-hidden="true"
            />
          )}
        </button>

      </div>

      {/* =====================================
          05. MOBILE NAVIGATION

          Contains expandable Commercial
          and Residential service dropdowns.

          Automatically closes after
          selecting a navigation link.
      ===================================== */}

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

/* =========================================
   ROUTE-AWARE HEADER

   React Router provides a unique location
   key for each navigation entry.

   When the route changes, HeaderContent
   remounts with fresh initial state.

   This automatically:
   - Closes the mobile menu
   - Resets menu interactions
   - Maintains the correct scrolled state
   - Avoids setState inside route effects

   No additional CSS changes required.
========================================= */

export default function Header() {
  const { key: routeKey } = useLocation();

  return (
    <HeaderContent key={routeKey} />
  );
}
