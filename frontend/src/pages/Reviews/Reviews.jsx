
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import Hero2 from "../../components/Hero2/Hero2";

import ReviewCard from "./ReviewCard";
import { reviewsData } from "./reviewsData";

import "./Reviews.css";

/* =========================================
   FULL CUSTOMER REVIEWS PAGE
========================================= */

export default function Reviews() {
  const [visibleCount, setVisibleCount] =
    useState(6);

  /* ===== DISPLAYED REVIEWS ===== */

  const visibleReviews = reviewsData.slice(
    0,
    visibleCount
  );

  /* ===== CHECK FOR MORE REVIEWS ===== */

  const hasMore =
    visibleCount < reviewsData.length;

  /* =========================================
     LOAD SIX MORE REVIEWS
  ========================================= */

  const handleViewMore = () => {
    setVisibleCount((current) =>
      Math.min(current + 6, reviewsData.length)
    );
  };

  return (
    <main className="reviews-page">

      {/* =====================================
         REVIEWS HERO
      ===================================== */}

      <Hero2
        title="Customer Reviews & Testimonials"
        description="Explore customer feedback about HoodClean's commercial and residential kitchen hood and exhaust cleaning services throughout Greater Vancouver."
        buttonText="Request a Quote"
        buttonLink="/contact"
      />

      {/* =====================================
         MAIN REVIEWS SECTION
      ===================================== */}

      <section
        className="reviews-page__section"
        aria-labelledby="reviews-page-heading"
      >
        <div className="container reviews-page__container">

          {/* ===== INTRODUCTION ===== */}

          <div className="reviews-page__intro">

            <span className="eyebrow reviews-page__eyebrow">
              Customer Experiences
            </span>

            <h2
              id="reviews-page-heading"
              className="heading-section reviews-page__title"
            >
              What Our Customers Have to Say
            </h2>

            <p className="reviews-page__description">
              Customer feedback helps people
              understand what to expect from a
              cleaning service. Browse reviews
              and experiences shared by our customers.
            </p>

          </div>

          {/* =====================================
             REVIEWS GRID
          ===================================== */}

          <div className="reviews-page__grid">

            {visibleReviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
              />
            ))}

          </div>

          {/* =====================================
             VIEW MORE BUTTON
          ===================================== */}

          
{/* =====================================
   VIEW MORE REVIEWS
===================================== */}

                {hasMore && (
                <div className="reviews-page__actions">

                    <button
                    type="button"
                    className="home-reviews__view-all reviews-page__more-link"
                    onClick={handleViewMore}
                    >
                    <span>View More</span>

                    <ArrowRight
                        size={20}
                        strokeWidth={2.2}
                        aria-hidden="true"
                    />
                    </button>

                </div>
                )}


        </div>
      </section>

    </main>
  );
}
