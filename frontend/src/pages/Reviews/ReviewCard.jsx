
import { Star } from "lucide-react";

/* =========================================
   REVIEW CARD COMPONENT
========================================= */

export default function ReviewCard({ review }) {
  const rating = Math.max(
    0,
    Math.min(5, Number(review.rating) || 0)
  );

  return (
    <article className="review-card">

      {/* ===== STAR RATING ===== */}

      <div
        className="review-card__stars"
        role="img"
        aria-label={
          review.isDemo
            ? `Sample rating: ${rating} out of 5 stars`
            : `${rating} out of 5 stars`
        }
      >
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            size={22}
            strokeWidth={1.8}
            fill={
              index < rating
                ? "currentColor"
                : "none"
            }
            className={
              index < rating
                ? "review-card__star"
                : "review-card__star review-card__star--empty"
            }
            aria-hidden="true"
          />
        ))}
      </div>

      {/* ===== REVIEW TEXT ===== */}

      <blockquote className="review-card__quote">
        {review.quote}
      </blockquote>

      {/* ===== CUSTOMER INFORMATION ===== */}

      <div className="review-card__customer">
        <strong className="review-card__name">
          {review.name}
        </strong>

        {review.location && (
          <span className="review-card__location">
            {review.location}
          </span>
        )}
      </div>

    </article>
  );
}
