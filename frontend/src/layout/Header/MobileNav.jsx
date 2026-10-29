
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  ChevronDown,
  ArrowRight,
  Phone,
} from "lucide-react";

import { navigationLinks } from "./navigationData";

export default function MobileNav({
  isOpen,
  onClose,
  phoneNumber,
  phoneDisplay,
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
     CLOSE MENU AND RESET DROPDOWNS
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

        {/* NAVIGATION LINKS */}

        <div className="mobile-nav__links">

          {navigationLinks.map((item) => {
            const isExpanded =
              expandedMenu === item.label;

            const submenuId = `mobile-submenu-${item.label
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`;

            return (
              <div
                className="mobile-nav__item"
                key={item.label}
              >
                {item.children ? (
                  <>
                    {/* CLICKABLE CATEGORY + SEPARATE ARROW */}

                    <div className="mobile-nav__parent">

                      <Link
                        to={item.href}
                        className="mobile-nav__link mobile-nav__parent-link"
                        onClick={handleClose}
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        className="mobile-nav__link mobile-nav__dropdown-toggle"
                        aria-label={`Toggle ${item.label} services`}
                        aria-expanded={isExpanded}
                        aria-controls={submenuId}
                        onClick={() =>
                          toggleDropdown(item.label)
                        }
                      >
                        <ChevronDown
                          size={22}
                          className={
                            isExpanded ? "is-rotated" : ""
                          }
                        />
                      </button>

                    </div>

                    {/* SERVICE DROPDOWN */}

                    <div
                      id={submenuId}
                      className={`mobile-nav__submenu ${
                        isExpanded ? "is-expanded" : ""
                      }`}
                      inert={!isExpanded || !isOpen}
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
            );
          })}

        </div>

        {/* MOBILE ACTION BUTTONS */}

        <div className="mobile-nav__actions">

          <Link
            to="/contact"
            className="btn btn--primary header-button header-button--primary"
            onClick={handleClose}
          >
            Schedule a Consultation

            <ArrowRight
              size={21}
              strokeWidth={2.4}
              className="header-button__arrow"
            />
          </Link>

          <a
            href={`tel:${phoneNumber}`}
            className="btn btn--outline header-button header-button--phone"
            aria-label={`Call HoodClean at ${phoneDisplay}`}
            onClick={handleClose}
          >
            <Phone
              size={20}
              strokeWidth={2.2}
              className="header-button__icon"
            />

            <span>{phoneDisplay}</span>
          </a>

        </div>
      </div>
    </nav>
  );
}
