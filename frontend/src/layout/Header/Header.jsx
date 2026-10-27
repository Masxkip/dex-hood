
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

import logo from "../../assets/h1.jpg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import "./Header.css";

// Add your actual business phone number when available.
const PHONE_NUMBER = "";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

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
          <Link
            to="/contact"
            className="header-button header-button--primary"
          >
            Schedule a Consultation
            <ArrowRight size={19} />
          </Link>

          {PHONE_NUMBER ? (
            <button
              type="button"
              className="header-button header-button--phone"
              onClick={() =>
                setShowNumber((current) => !current)
              }
            >
              <Phone size={18} />
              {showNumber ? PHONE_NUMBER : "Show Number"}
            </button>
          ) : (
            <span className="header-button header-button--phone header-button--disabled">
              <Phone size={18} />
              Number Coming Soon
            </span>
          )}
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
      />
    </header>
  );
}
