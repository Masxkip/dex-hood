
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";

import { navigationLinks } from "./navigationData";

export default function MobileNav({
  isOpen,
  onClose,
  phoneNumber,
}) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const touchStartY = useRef(null);
  const menuRef = useRef(null);

  /* =========================================
     BODY SCROLL LOCK & ESCAPE KEY
  ========================================= */

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    const focusFrame = requestAnimationFrame(() => {
      menuRef.current?.focus({
        preventScroll: true,
      });
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      cancelAnimationFrame(focusFrame);
    };
  }, [isOpen, onClose]);

  /* =========================================
     CLOSE MENU
  ========================================= */

  const handleClose = () => {
    setExpandedMenu(null);
    onClose();
  };

  /* =========================================
     MOBILE SWIPE HANDLING
  ========================================= */

  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    if (touchStartY.current === null) return;

    const distance =
      touchStartY.current -
      event.changedTouches[0].clientY;

    touchStartY.current = null;

    if (
      distance > 90 &&
      menuRef.current?.scrollTop === 0
    ) {
      handleClose();
    }
  };

  /* =========================================
     DROPDOWN TOGGLE
  ========================================= */

  const toggleDropdown = (label) => {
    setExpandedMenu((current) =>
      current === label ? null : label
    );
  };

  return (
    <nav
      id="mobile-navigation"
      ref={menuRef}
      className={`mobile-nav ${
        isOpen ? "mobile-nav--open" : ""
      }`}
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
      inert={!isOpen}
      tabIndex={-1}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="mobile-nav__inner">

        {/* ===== NAVIGATION LINKS ===== */}

        <div className="mobile-nav__links">
          {navigationLinks.map((item) => (
            <div
              className="mobile-nav__item"
              key={item.label}
            >
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="mobile-nav__link mobile-nav__dropdown-toggle"
                    onClick={() =>
                      toggleDropdown(item.label)
                    }
                    aria-expanded={
                      expandedMenu === item.label
                    }
                  >
                    <span>{item.label}</span>

                    <ChevronDown
                      size={22}
                      className={
                        expandedMenu === item.label
                          ? "is-rotated"
                          : ""
                      }
                    />
                  </button>

                  {/* ===== DROPDOWN LINKS ===== */}

                  <div
                    className={`mobile-nav__submenu ${
                      expandedMenu === item.label
                        ? "is-expanded"
                        : ""
                    }`}
                    inert={
                      expandedMenu !== item.label ||
                      !isOpen
                    }
                  >
                    <div className="mobile-nav__submenu-inner">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={handleClose}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  className="mobile-nav__link"
                  to={item.href}
                  onClick={handleClose}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* ===== MOBILE ACTION BUTTONS ===== */}

        <div className="mobile-nav__actions">

          {/* CONSULTATION BUTTON */}

          <Link
            to="/contact"
            className="header-button header-button--primary"
            onClick={handleClose}
          >
            Schedule a Consultation
            <ArrowRight size={21} />
          </Link>

          {/* PHONE BUTTON */}

          {phoneNumber ? (
            <a
              href={`tel:${phoneNumber}`}
              className="header-button header-button--outline"
              onClick={handleClose}
            >
              Call Us
              <ArrowRight size={21} />
            </a>
          ) : (
            <span className="header-button header-button--outline header-button--disabled">
              Number Coming Soon
              <ArrowRight size={21} />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
