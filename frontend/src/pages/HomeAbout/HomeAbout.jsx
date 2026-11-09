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

        {/* LEFT - ABOUT HEADING */}

        <div className="home-about__left">
          <h2
            id="home-about-heading"
            className="heading-section home-about__title"
          >
            Providing{" "}
            <span className="text-accent">
              Commercial & Residential
            </span>{" "}
            Kitchen Cleaning in Greater Vancouver, BC
          </h2>
        </div>

        {/* RIGHT - ABOUT DESCRIPTION */}

        <div className="home-about__right">
          <div className="home-about__text">
            <p className="home-about__description">
            At HoodClean, we care for your entire kitchen.
            From cooking appliances and countertops to
            cabinets, floors, hoods and exhaust systems,
            our cleaning services tackle grease, grime
            and everyday buildup. We serve homes and
            businesses throughout Greater Vancouver and
            the surrounding Lower Mainland, bringing
            careful attention to every surface and
            hard to reach corner.
          </p>

          <p className="home-about__description">
            Whether it is a busy restaurant kitchen or
            the heart of your home, we shape our service
            around your space, equipment and cleaning
            needs. With scheduling that works around
            your routine and care for the details,
            we leave your kitchen fresh, inviting
            and ready for whatever is cooking next.
          </p>
          </div>

          {/* CTA BUTTON */}

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