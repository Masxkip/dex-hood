
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import "./Breadcrumbs.css";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav
      className="breadcrumbs"
      aria-label="Breadcrumb navigation"
    >
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              className="breadcrumbs__item"
              key={`${item.label}-${index}`}
            >
              {index > 0 && (
                <ChevronRight
                  size={18}
                  strokeWidth={2}
                  className="breadcrumbs__separator"
                  aria-hidden="true"
                />
              )}

              {!isLast && item.to ? (
                <Link
                  to={item.to}
                  className="breadcrumbs__link"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="breadcrumbs__current"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
