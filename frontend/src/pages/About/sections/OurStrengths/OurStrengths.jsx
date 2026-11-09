import { Check } from "lucide-react";
import hoodImage from "../../../../assets/h1.jpg";
import "./OurStrengths.css";

const strengths = [
  {
    title: "Professional Cleaning Solutions",
    description:
      "We assess your kitchen and tailor our cleaning to its surfaces, appliances and equipment, including hoods, grease filters and exhaust systems.",
  },
  {
    title: "Serving Greater Vancouver",
    description:
      "We provide complete kitchen cleaning for homes and businesses throughout Greater Vancouver and surrounding communities, with clear communication from enquiry to completion.",
  },
  {
    title: "Cleanliness and Safety",
    description:
      "We help maintain cleaner kitchen environments by addressing grease, food residue and buildup across preparation areas, cooking equipment, floors and ventilation systems.",
  },
  {
    title: "Flexible Cleaning Services",
    description:
      "From a single deep clean to recurring visits, we plan our service around your priorities, kitchen use and schedule, with the scope of work agreed before we begin.",
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