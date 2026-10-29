
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import defaultImage from "../../assets/h1.jpg";
import "./HomeServices.css";

/* =========================================
   COMMERCIAL SERVICES DATA
========================================= */

const commercialServices = [
  {
    title: "Commercial Hood Cleaning",
    subtitle: "What's above your kitchen canopy?",
    description:
      "Professional cleaning for commercial kitchen hoods, canopies, and grease-prone surfaces. We help restaurants and food establishments address grease buildup and maintain cleaner kitchen exhaust systems.",
    href: "/commercial/hood-cleaning",
    image: defaultImage,
  },
  {
    title: "Kitchen Exhaust Duct Cleaning",
    subtitle: "Cleaning beyond the kitchen hood.",
    description:
      "Grease and residue can accumulate throughout kitchen exhaust ductwork. Our cleaning services focus on accessible ductwork and ventilation passages to help maintain cleaner commercial kitchen systems.",
    href: "/commercial/duct-cleaning",
    image: defaultImage,
  },
  {
    title: "Grease Filter Cleaning & Exchange",
    subtitle: "Keep your kitchen filters clean.",
    description:
      "Regular grease filter cleaning helps manage cooking residue and maintain kitchen ventilation. We provide filter cleaning and exchange services suited to the ongoing needs of commercial kitchens.",
    href: "/commercial/filter-cleaning",
    image: defaultImage,
  },
  {
    title: "Kitchen Exhaust Maintenance & Repairs",
    subtitle: "Keep your exhaust system maintained.",
    description:
      "From routine maintenance to addressing common exhaust system issues, we help commercial kitchens manage equipment upkeep and identify components that may require attention or repairs.",
    href: "/commercial/maintenance",
    image: defaultImage,
  },
];

/* =========================================
   RESIDENTIAL SERVICES DATA
========================================= */

const residentialServices = [
  {
    title: "Residential Range Hood Cleaning",
    subtitle: "A cleaner kitchen starts here.",
    description:
      "Detailed cleaning for residential range hoods, including grease-prone surfaces and accessible components. We help homeowners remove accumulated cooking residue and keep their kitchen hoods cleaner.",
    href: "/residential/hood-cleaning",
    image: defaultImage,
  },
  {
    title: "Kitchen Exhaust Duct Cleaning",
    subtitle: "Care for what's behind your range hood.",
    description:
      "Cooking grease and residue can collect inside residential kitchen exhaust ducts. Our cleaning services address accessible ductwork and ventilation passages to help maintain a cleaner exhaust system.",
    href: "/residential/vent-cleaning",
    image: defaultImage,
  },
  {
    title: "Range Hood Filter Cleaning & Replacement",
    subtitle: "Refresh your kitchen ventilation.",
    description:
      "We clean reusable range hood filters and assist with replacing suitable worn or disposable filters when needed, helping homeowners maintain their kitchen ventilation equipment.",
    href: "/residential/degreasing",
    image: defaultImage,
  },
  {
    title: "Range Hood Maintenance & Repairs",
    subtitle: "Keep your range hood working properly.",
    description:
      "Routine maintenance and attention to common range hood issues can help keep your equipment in better condition. We provide practical upkeep and repair support for residential kitchen hoods.",
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
        className="home-services home-services--commercial"
        variant="commercial"
        eyebrow="WHAT WE DO"
        title="Commercial Hood Cleaning Services"
        description="From commercial kitchen hood cleaning and exhaust duct maintenance to grease filter exchange and equipment upkeep, HoodClean provides professional kitchen exhaust cleaning solutions for restaurants and commercial food establishments throughout Greater Vancouver. Our goal is to help businesses maintain cleaner, better-maintained kitchen ventilation systems with dependable service and practical maintenance options."
        services={commercialServices}
      />

      {/* RESIDENTIAL */}

      <ServicesSection
        id="residential"
        className="home-services home-services--residential"
        variant="residential"
        eyebrow="FOR HOMEOWNERS"
        title="Residential Hood Cleaning Services"
        description="Your kitchen range hood works hard to manage everyday cooking grease, smoke, and airborne residue. HoodClean provides residential range hood, exhaust duct, and filter cleaning services throughout Greater Vancouver, along with routine maintenance and repair support to help homeowners keep their kitchen ventilation systems in better condition."
        services={residentialServices}
      />
    </>
  );
}
