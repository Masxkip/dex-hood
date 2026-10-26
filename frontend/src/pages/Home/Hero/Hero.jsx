import { ArrowRight } from "lucide-react";
import heroImage from "../../../assets/h1.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="home-hero"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.78) 0%,
            rgba(0, 0, 0, 0.62) 50%,
            rgba(0, 0, 0, 0.45) 100%
          ),
          url(${heroImage})
        `,
      }}
    >
      <div className="container home-hero__container">
        <div className="home-hero__content">
          <span className="eyebrow home-hero__eyebrow">
            Vancouver's #1
          </span>

          <h1 className="heading-hero home-hero__title">
            Pristine Commercial & Residential Hood
            Cleaning In{" "}
            <span className="text-accent">
              Vancouver, BC
            </span>
          </h1>

          <p className="home-hero__description">
            Proudly serving Greater Vancouver & surrounding
            areas with professional kitchen hood and exhaust
            cleaning services.
          </p>

          <div className="home-hero__actions">
            <a
              href="#contact"
              className="btn btn--primary home-hero__button"
            >
              Commercial
              <ArrowRight size={21} strokeWidth={2.4} />
            </a>

            <a
              href="#contact"
              className="btn btn--outline home-hero__button"
            >
              Residential
              <ArrowRight size={21} strokeWidth={2.4} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}