
import fallbackImage from "../../assets/h1.jpg";

import "./Industries.css";

/* =========================================
   COMMERCIAL INDUSTRIES DATA
========================================= */

const industries = [
  {
    id: "restaurants",
    title: "Restaurants",
    image: "/images/industries/restaurants.jpg",
    alt: "Chefs working inside a commercial restaurant kitchen",
    description:
      "From neighbourhood restaurants and busy dining establishments to large commercial kitchens throughout Greater Vancouver, we provide professional hood and exhaust cleaning services tailored to your kitchen's equipment and operational needs.",
  },
  {
    id: "corporate-cafeterias",
    title: "Corporate Cafeterias",
    image:
      "/images/industries/corporate-cafeterias.jpg",
    alt: "Corporate cafeteria with a commercial food service counter",
    description:
      "Corporate offices, workplace cafeterias, and employee dining facilities depend on well-maintained kitchen ventilation. Our cleaning services help manage grease buildup while accommodating your workplace's operating schedule.",
  },
  {
    id: "sports-venues",
    title: "Sports Venues",
    image: "/images/industries/sports-venues.jpg",
    alt: "Large sports venue with food and concession facilities",
    description:
      "High-volume concession kitchens and food preparation areas at sports and entertainment venues often work around demanding event schedules. We help coordinate hood cleaning around your venue's operational requirements.",
  },
  {
    id: "hospitals",
    title: "Hospitals & Assisted Living",
    image: "/images/industries/hospitals.jpg",
    alt: "Professional institutional kitchen used for meal preparation",
    description:
      "Healthcare facilities, assisted living residences, and institutional kitchens require careful maintenance planning. We provide cleaning for accessible kitchen hoods and exhaust components, with scheduling arranged around facility needs.",
  },
  {
    id: "educational-institutions",
    title: "Educational Institutions",
    image:
      "/images/industries/educational-institutions.jpg",
    alt: "School or university cafeteria and dining facility",
    description:
      "From school cafeterias to university dining halls, educational institutions rely on kitchen ventilation during daily meal service. We help maintain accessible exhaust systems with cleaning appointments coordinated around school schedules.",
  },
  {
    id: "hotels",
    title: "Hotels & Hospitality",
    image: "/images/industries/hotels.jpg",
    alt: "Hotel restaurant kitchen with professional cooking equipment",
    description:
      "Hotels, hospitality properties, and event facilities operate kitchens serving guests throughout the day. Our hood and exhaust cleaning services can be planned around kitchen access, equipment requirements, and business operations.",
  },
];

/* =========================================
   FALLBACK IMAGE HANDLER
========================================= */

const handleImageError = (event) => {
  const image = event.currentTarget;

  image.onerror = null;
  image.src = fallbackImage;
};

/* =========================================
   INDUSTRIES COMPONENT
========================================= */

export default function Industries() {
  return (
    <section
      className="industries"
      aria-labelledby="industries-heading"
    >
      <div className="container industries__container">

        {/* =====================================
           SECTION INTRODUCTION
        ===================================== */}

        <div className="industries__intro">

          {/* LEFT - HEADING */}

          <h2
            id="industries-heading"
            className="heading-section industries__title"
          >
            Hood Cleaning for Every Commercial
            Kitchen in Greater Vancouver
          </h2>

          {/* RIGHT - DESCRIPTION */}

          <p className="industries__intro-description">
            From busy restaurants and corporate
            cafeterias to hospitals, schools,
            and hospitality venues, we help
            commercial kitchens maintain cleaner
            hood and exhaust systems.
          </p>

        </div>

        {/* =====================================
           INDUSTRIES GRID
        ===================================== */}

        <div className="industries__grid">

          {industries.map((industry) => (
            <article
              className="industry-card"
              key={industry.id}
            >

              {/* ===== IMAGE ===== */}

              <div className="industry-card__image-wrapper">

                <img
                  src={industry.image}
                  alt={industry.alt}
                  className="industry-card__image"
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />

              </div>

              {/* ===== CARD CONTENT ===== */}

              <div className="industry-card__content">

                <h3 className="industry-card__title">
                  {industry.title}
                </h3>

                <p className="industry-card__description">
                  {industry.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
