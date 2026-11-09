import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import defaultImage from "../../assets/h1.jpg";
import "./HomeServices.css";

/* =========================================
   COMMERCIAL SERVICES DATA
========================================= */

const commercialServices = [
  {
    title: "Commercial Kitchen Deep Cleaning",
    subtitle: "A complete clean for a hardworking kitchen.",
    description:
      "Complete kitchen deep cleaning for restaurants and food establishments, covering cooking equipment, appliances, hoods, preparation surfaces, cabinets and floors. We tackle accumulated grease, food residue and overlooked areas with methods suited to your surfaces and equipment. Each visit is planned around your cleaning priorities and business hours.",
    href: "/commercial/deep-kitchen-cleaning",
    image: defaultImage,
  },
  {
    title: "Kitchen Exhaust Duct Cleaning",
    subtitle: "Cleaning beyond the kitchen hood.",
    description:
      "Cooking grease can collect inside exhaust ducts beyond the areas reached during everyday cleaning. We review your system's layout and access points, then clean reachable internal surfaces and remove accumulated residue. The work is clearly defined beforehand, with any inaccessible sections identified so you can plan further attention where needed.",
    href: "/commercial/duct-cleaning",
    image: defaultImage,
  },
  {
    title: "Grease Filter Cleaning & Exchange",
    subtitle: "Fresh filters for busy cooking environments.",
    description:
      "We clean reusable hood filters and provide compatible filter exchanges to help commercial kitchens manage cooking grease and residue. Each service considers your filter type, condition and cooking volume. From occasional cleaning to recurring exchanges, we arrange filter care around your kitchen's equipment and service schedule.",
    href: "/commercial/filter-cleaning",
    image: defaultImage,
  },
  {
    title: "Kitchen Exhaust Maintenance & Repairs",
    subtitle: "Practical care for your exhaust system.",
    description:
      "Keep track of exhaust equipment wear and operating concerns with maintenance and repair support tailored to your kitchen. We review accessible components, discuss the issues your team has noticed and explain suitable work before proceeding. Any additional parts or specialist servicing needs are identified to help you plan the next steps.",
    href: "/commercial/maintenance",
    image: defaultImage,
  },
];

/* =========================================
   RESIDENTIAL SERVICES DATA
========================================= */

const residentialServices = [
  {
    title: "Residential Kitchen Deep Cleaning",
    subtitle: "Give the heart of your home a fresh start.",
    description:
      "Give your entire kitchen detailed attention, from appliances and cupboards to countertops, sinks, backsplashes and floors. We remove cooking grease and everyday buildup, including residue in accessible corners often missed during routine cleaning. Interior cleaning and preparation requirements are agreed beforehand, with care for your surfaces, equipment and belongings.",
    href: "/residential/deep-kitchen-cleaning",
    image: defaultImage,
  },
  {
    title: "Range Hood & Filter Cleaning",
    subtitle: "Clear away the grease above your stove.",
    description:
      "We remove accumulated cooking residue from range hood surfaces, accessible interior components and washable grease filters. Our cleaning approach follows the care requirements of your hood's materials and filter type. This dedicated service gives the area above your stove focused attention between complete kitchen cleans or as part of an agreed visit.",
    href: "/residential/hood-cleaning",
    image: defaultImage,
  },
  {
    title: "Move In & Move Out Kitchen Cleaning",
    subtitle: "A clean kitchen for your next chapter.",
    description:
      "Prepare your kitchen for moving day with cleaning for appliance interiors, empty cupboards, drawers, surfaces and floors. We also clean range hood surfaces and washable filters where fitted. Planned around property access and the removal of belongings, this service helps you leave a cleaner kitchen or settle into your next home.",
    href: "/residential/move-in-move-out-cleaning",
    image: defaultImage,
  },
  {
    title: "Routine Kitchen Maintenance & Repairs",
    subtitle: "Care for the kitchen you use every day.",
    description:
      "Stay on top of everyday kitchen upkeep with maintenance visits and suitable repair support for fixtures, fittings and equipment. We discuss your concerns, review accessible components and explain the proposed work before making agreed adjustments or repairs. Where parts or specialist attention are needed, we help clarify your next steps.",
    href: "/residential/maintenance",
    image: defaultImage,
  },
];

/* =========================================
   REUSABLE SERVICE CARD
========================================= */

function ServiceCard({ service }) {
  return (
    <article className="home-service-card">
      <Link
        to={service.href}
        className="home-service-card__link"
        aria-label={`Learn more about ${service.title}`}
      >
        {/* SERVICE IMAGE */}

        <div className="home-service-card__media">
          <img
            src={service.image}
            alt=""
            className="home-service-card__image"
            loading="lazy"
          />

          <h3 className="home-service-card__title">
            {service.title}
          </h3>
        </div>

        {/* CARD CONTENT */}

        <div className="home-service-card__body">
          <p className="home-service-card__subtitle">
            {service.subtitle}
          </p>

          <p className="home-service-card__description">
            {service.description}
          </p>

          <span className="home-service-card__more">
            Learn more

            <ArrowRight
              size={19}
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}

/* =========================================
   REUSABLE SERVICES SECTION
========================================= */

function ServicesSection({
  id,
  eyebrow,
  title,
  description,
  services,
  variant = "commercial",
}) {
  return (
    <section
      id={id}
      className={`home-services home-services--${variant} section`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">

        {/* SECTION HEADER */}

        <div className="home-services__header">
          <span className="eyebrow home-services__eyebrow">
            {eyebrow}
          </span>

          <h2
            id={`${id}-title`}
            className="heading-section home-services__title"
          >
            {title}
          </h2>

          <p className="home-services__description">
            {description}
          </p>
        </div>

        {/* SERVICES GRID */}

        <div className="home-services__grid">
          {services.map((service) => (
            <ServiceCard
              key={service.href}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   HOME SERVICES
========================================= */

export default function HomeServices() {
  return (
    <>
      {/* COMMERCIAL */}

      <ServicesSection
        id="commercial"
        variant="commercial"
        eyebrow="FOR BUSINESSES"
        title="Commercial Kitchen Cleaning Services"
        description="Care for your entire commercial kitchen with complete kitchen deep cleaning, dedicated exhaust duct cleaning, grease filter exchange and exhaust maintenance and repairs. We serve restaurants and food establishments throughout Greater Vancouver and the surrounding Lower Mainland, planning each service around your equipment, cleaning priorities and operating schedule."
        services={commercialServices}
      />

      {/* RESIDENTIAL */}

      <ServicesSection
        id="residential"
        variant="residential"
        eyebrow="FOR HOMEOWNERS"
        title="Residential Kitchen Cleaning Services"
        description="From kitchen deep cleaning and range hood care to moving cleans and routine maintenance and repairs, we help you care for the kitchen you use every day. Serving homes throughout Greater Vancouver and the surrounding Lower Mainland, we tailor each visit to your space, whether you need a fresh start, help with moving or ongoing upkeep."
        services={residentialServices}
      />
    </>
  );
}