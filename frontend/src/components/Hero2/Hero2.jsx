import { ArrowRight } from "lucide-react";
import defaultImage from "../../assets/h1.jpg";
import "./Hero2.css";

export default function Hero2({
  title,
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
          <h1 className="heading-section hero2__title">
              {title}
            </h1>

          {showButton && (
            <a
              href={buttonLink}
              className="btn btn--primary hero2__button"
            >
              <span>{buttonText}</span>
              <ArrowRight size={22} strokeWidth={2.3} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}