
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import defaultImage from "../../assets/h1.jpg";

import "./Hero2.css";

export default function Hero2({
  title,
  description,
  backgroundImage = defaultImage,
  buttonText = "Schedule a Consultation",
  buttonLink = "/contact",
  showButton = true,
}) {
  return (
    <section
      className="hero2"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.82) 0%,
            rgba(0, 0, 0, 0.50) 48%,
            rgba(0, 0, 0, 0.12) 100%
          ),
          url("${backgroundImage}")
        `,
      }}
    >
      <div className="container hero2__container">
        <div className="hero2__content">

          {/* HERO TITLE */}

          <h1
            className={`heading-section hero2__title ${
              description ? "hero2__title--with-description" : ""
            }`}
          >
            {title}
          </h1>

          {/* OPTIONAL DESCRIPTION */}

          {description && (
            <p className="hero2__description">
              {description}
            </p>
          )}

          {/* CTA BUTTON */}

          {showButton && (
            <Link
              to={buttonLink}
              className="btn btn--primary hero2__button"
            >
              <span>{buttonText}</span>

              <ArrowRight
                size={22}
                strokeWidth={2.3}
              />
            </Link>
          )}

        </div>
      </div>
    </section>
  );
}
