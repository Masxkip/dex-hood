import { Check } from "lucide-react";
import hoodImage from "../../../../assets/h1.jpg";
import "./OurStrengths.css";

const strengths = [
  {
    title: "Professional Cleaning Solutions",
    description:
      "Kitchen hood and exhaust cleaning services designed to address grease buildup and ventilation maintenance needs.",
  },
  {
    title: "Serving Greater Vancouver",
    description:
      "Commercial and residential hood cleaning services for customers throughout Vancouver and surrounding communities.",
  },
  {
    title: "Cleanliness and Safety",
    description:
      "Helping maintain cleaner kitchen environments through careful attention to grease-prone ventilation areas.",
  },
  {
    title: "Flexible Cleaning Services",
    description:
      "Practical cleaning options for one-time service requirements and recurring kitchen maintenance.",
  },
];

export default function OurStrengths() {
  return (
    <section className="our-strengths section">
      <div className="container">
        <div className="our-strengths__grid">

          {/* LEFT COLUMN */}
          <div className="our-strengths__content">
            <h2 className="our-strengths__title">
              OUR <span className="text-accent">STRENGTHS</span>
            </h2>

            <div className="our-strengths__list">
              {strengths.map((item) => (
                <div
                  className="our-strengths__item"
                  key={item.title}
                >
                  <div className="our-strengths__icon">
                    <Check size={24} strokeWidth={3} />
                  </div>

                  <div className="our-strengths__item-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="our-strengths__image-wrapper">
            <img
              src={hoodImage}
              alt="Stainless steel commercial kitchen ventilation hood"
              className="our-strengths__image"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}