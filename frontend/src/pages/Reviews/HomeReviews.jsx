
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import ReviewCard from "./ReviewCard";
import { reviewsData } from "./reviewsData";

import "./Reviews.css";

/* =========================================
   HOMEPAGE REVIEWS
========================================= */

export default function HomeReviews() {
  const carouselRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] =
    useState(false);

  const [canScrollRight, setCanScrollRight] =
    useState(true);

  const [activeReview, setActiveReview] =
    useState(0);

  /* ===== FIRST SIX REVIEWS ===== */

  const homeReviews = reviewsData.slice(0, 6);

  /* =========================================
     UPDATE CAROUSEL STATE
  ========================================= */

  const updateScrollState = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const maxScroll =
      carousel.scrollWidth - carousel.clientWidth;

    setCanScrollLeft(carousel.scrollLeft > 2);

    setCanScrollRight(
      carousel.scrollLeft < maxScroll - 2
    );

    /* UPDATE ACTIVE PAGINATION DOT */

    const cards = carousel.querySelectorAll(
      ".review-card"
    );

    if (cards.length < 2) {
      setActiveReview(0);
      return;
    }

    const step =
      cards[1].offsetLeft -
      cards[0].offsetLeft;

    if (step <= 0) return;

    const currentIndex = Math.round(
      carousel.scrollLeft / step
    );

    setActiveReview(
      Math.max(
        0,
        Math.min(currentIndex, cards.length - 1)
      )
    );
  }, []);

  /* =========================================
     SCROLL AND RESIZE LISTENERS
  ========================================= */

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    updateScrollState();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateScrollState)
        : null;

    resizeObserver?.observe(carousel);

    carousel.addEventListener(
      "scroll",
      updateScrollState,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateScrollState
    );

    return () => {
      carousel.removeEventListener(
        "scroll",
        updateScrollState
      );

      window.removeEventListener(
        "resize",
        updateScrollState
      );

      resizeObserver?.disconnect();
    };
  }, [updateScrollState]);

  /* =========================================
     ARROW NAVIGATION
  ========================================= */

  const slideReviews = (direction) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const cards = carousel.querySelectorAll(
      ".review-card"
    );

    if (cards.length < 2) return;

    const step =
      cards[1].offsetLeft -
      cards[0].offsetLeft;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    carousel.scrollBy({
      left: step * direction,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  /* =========================================
     PAGINATION DOT NAVIGATION
  ========================================= */

  const goToReview = (index) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const cards = carousel.querySelectorAll(
      ".review-card"
    );

    if (!cards[index]) return;

    const firstCard = cards[0];
    const targetCard = cards[index];

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    carousel.scrollTo({
      left:
        targetCard.offsetLeft -
        firstCard.offsetLeft,

      behavior: reducedMotion ? "auto" : "smooth",
    });

    setActiveReview(index);
  };

  return (
    <section
      className="home-reviews"
      aria-labelledby="home-reviews-heading"
    >
      <div className="container home-reviews__container">

        {/* =====================================
           SECTION INTRO
        ===================================== */}

        <div className="home-reviews__intro">

          <span className="eyebrow home-reviews__eyebrow">
            Customer Reviews
          </span>

          <h2
            id="home-reviews-heading"
            className="heading-section home-reviews__title"
          >
            What Our Customers Are Saying
            About HoodClean
          </h2>

          <p className="home-reviews__description">
            Discover customer experiences and feedback
            about our commercial and residential
            kitchen hood cleaning services.
          </p>

        </div>

        {/* =====================================
           REVIEWS CAROUSEL
        ===================================== */}

        <div className="home-reviews__carousel">

          <div
            ref={carouselRef}
            className="home-reviews__track"
            role="region"
            aria-roledescription="carousel"
            aria-label="Customer reviews"
            tabIndex={0}
          >
            {homeReviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
              />
            ))}
          </div>

        </div>

        {/* =====================================
           MOBILE PAGINATION DOTS
        ===================================== */}

        <div
          className="home-reviews__dots"
          role="group"
          aria-label="Review navigation"
        >
          {homeReviews.map((review, index) => (
            <button
              key={review.id}
              type="button"
              className={`home-reviews__dot ${
                activeReview === index
                  ? "is-active"
                  : ""
              }`}
              aria-label={`Go to review ${index + 1}`}
              aria-current={
                activeReview === index
                  ? "true"
                  : undefined
              }
              onClick={() => goToReview(index)}
            />
          ))}
        </div>

        {/* =====================================
           BOTTOM NAVIGATION
        ===================================== */}

        <div className="home-reviews__bottom">

          {/* VIEW ALL REVIEWS */}

          <Link
            to="/reviews"
            className="home-reviews__view-all"
          >
            <span>View All Reviews</span>

            <ArrowRight
              size={20}
              strokeWidth={2.2}
              aria-hidden="true"
            />
          </Link>

          {/* DESKTOP ARROWS */}

          <div className="home-reviews__arrows">

            <button
              type="button"
              className="home-reviews__arrow"
              onClick={() => slideReviews(-1)}
              disabled={!canScrollLeft}
              aria-label="Previous review"
            >
              <ArrowLeft
                size={21}
                strokeWidth={2}
              />
            </button>

            <button
              type="button"
              className="home-reviews__arrow"
              onClick={() => slideReviews(1)}
              disabled={!canScrollRight}
              aria-label="Next review"
            >
              <ArrowRight
                size={21}
                strokeWidth={2}
              />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
