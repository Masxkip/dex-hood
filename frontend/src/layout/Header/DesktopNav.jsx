
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { navigationLinks } from "./navigationData";

/* =========================================
   DESKTOP NAVIGATION CONTENT
========================================= */

function DesktopNavContent() {
  const [openDropdown, setOpenDropdown] = useState(null);

  /* CLOSE DROPDOWN */

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <nav
      className="desktop-nav"
      aria-label="Desktop navigation"
    >
      {navigationLinks.map((item) => {
        const isOpen = openDropdown === item.label;

        const submenuId = `desktop-submenu-${item.label
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}`;

        return (
          <div
            className={`desktop-nav__item ${
              isOpen ? "is-open" : ""
            }`}
            key={item.label}

            /* OPEN ON HOVER */

            onMouseEnter={() => {
              if (item.children) {
                setOpenDropdown(item.label);
              }
            }}

            /* CLOSE WHEN POINTER LEAVES */

            onMouseLeave={closeDropdown}

            /* KEYBOARD FOCUS */

            onFocus={() => {
              if (item.children) {
                setOpenDropdown(item.label);
              }
            }}

            onBlur={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget
                )
              ) {
                closeDropdown();
              }
            }}
          >
            {item.children ? (
              <>
                {/* CLICKABLE CATEGORY LINK */}

                <Link
                  to={item.href}
                  className="desktop-nav__link"
                  aria-expanded={isOpen}
                  aria-controls={submenuId}
                  onClick={closeDropdown}
                >
                  {item.label}
                </Link>

                {/* INDIVIDUAL SERVICES */}

                <div
                  id={submenuId}
                  className="desktop-nav__dropdown"
                >
                  {item.children.map((child) => (
                    <Link
                      to={child.href}
                      key={child.href}
                      onClick={closeDropdown}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                className="desktop-nav__link"
                to={item.href}
                onClick={closeDropdown}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}

/* =========================================
   ROUTE-AWARE DESKTOP NAVIGATION

   Changing the route key automatically
   resets the dropdown state.
========================================= */

export default function DesktopNav() {
  const { key: routeKey } = useLocation();

  return <DesktopNavContent key={routeKey} />;
}
