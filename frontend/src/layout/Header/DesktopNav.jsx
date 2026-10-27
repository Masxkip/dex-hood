
import { Link } from "react-router-dom";
import { navigationLinks } from "./navigationData";

export default function DesktopNav() {
  return (
    <nav
      className="desktop-nav"
      aria-label="Desktop navigation"
    >
      {navigationLinks.map((item) => (
        <div
          className="desktop-nav__item"
          key={item.label}
        >
          {item.children ? (
            <>
              <button
                className="desktop-nav__link"
                type="button"
                aria-haspopup="true"
                aria-label={`${item.label} services`}
              >
                {item.label}
              </button>

              <div className="desktop-nav__dropdown">
                {item.children.map((child) => (
                  <Link
                    to={child.href}
                    key={child.href}
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
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
