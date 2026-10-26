import { useCallback, useEffect, useState } from "react";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import logo from "../../assets/h1.jpg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import "./Header.css";

// Replace with your actual business phone number.
// Keep digits and an optional leading + only.
const PHONE_NUMBER = "";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

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

  const headerClasses = [
    "site-header",
    isScrolled ? "site-header--scrolled" : "",
    menuOpen ? "site-header--menu-open" : "",
  ].filter(Boolean).join(" ");

  return (
    <header className={headerClasses}>
      <div className="container header-container">
        <a
          href="/"
          className="header-logo"
          aria-label="HoodClean Home"
          onClick={closeMenu}
        >
          <img src={logo} alt="HoodClean" />
        </a>

        <DesktopNav />

        <div className="header-actions">
          <a
            href="/contact"
            className="header-button header-button--primary"
          >
            Schedule a Consultation
            <ArrowRight size={19} />
          </a>

          {PHONE_NUMBER ? (
            <button
              type="button"
              className="header-button header-button--phone"
              onClick={() => setShowNumber(!showNumber)}
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

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
              <X size={34} strokeWidth={2.2} />
            ) : (
              <Menu size={34} strokeWidth={2.2} />
            )}
        </button>
      </div>

              <MobileNav
          key={menuOpen ? "open" : "closed"}
          isOpen={menuOpen}
          onClose={closeMenu}
          phoneNumber={PHONE_NUMBER}
        />
    </header>
  );
}