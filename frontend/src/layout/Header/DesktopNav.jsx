import { navigationLinks } from "./navigationData";

export default function DesktopNav() {
  return (
    <nav className="desktop-nav" aria-label="Desktop navigation">
      {navigationLinks.map((item) => (
        <div className="desktop-nav__item" key={item.label}>
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
                  <a href={child.href} key={child.href}>
                    {child.label}
                  </a>
                ))}
              </div>
            </>
          ) : (
            <a className="desktop-nav__link" href={item.href}>
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
}