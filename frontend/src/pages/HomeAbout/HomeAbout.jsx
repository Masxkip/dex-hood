

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import "./HomeAbout.css";

export default function HomeAbout() {
  return (
    <section
      className="home-about"
      aria-labelledby="home-about-heading"
    >
      <div className="container home-about__container">

        {/* =====================================
           LEFT - ABOUT HEADING
        ===================================== */}

        <div className="home-about__left">

          <h2
            id="home-about-heading"
            className="heading-section home-about__title"
          >
            Professional Commercial & Residential
            Hood Cleaning in Greater Vancouver
          </h2>

        </div>

        {/* =====================================
           RIGHT - ABOUT DESCRIPTION
        ===================================== */}

        <div className="home-about__right">

          <p className="home-about__description">
            At HoodClean, we provide professional
            commercial and residential kitchen hood,
            grease filter, and exhaust cleaning
            services throughout Greater Vancouver
            and the surrounding Lower Mainland.
            Our focus is helping businesses and
            homeowners maintain cleaner, more
            efficient kitchen ventilation systems.
          </p>

          <p className="home-about__description">
            From restaurants and commercial kitchens
            to residential properties, we understand
            that every kitchen has different cleaning
            requirements. We tailor our services
            to your equipment, schedule, and specific
            needs, delivering reliable cleaning
            solutions with attention to detail
            and customer satisfaction.
          </p>

          {/* ===== CTA BUTTON ===== */}

          <Link
            to="/about"
            className="btn btn--primary home-about__button"
          >
            <span>More About Us</span>

            <ArrowRight
              size={21}
              strokeWidth={2.4}
              aria-hidden="true"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}
