
import "./ServiceAreas.css";

/* =========================================
   DEFAULT BACKGROUND IMAGE
   VANCOUVER SKYLINE
========================================= */

const defaultBackgroundImage =
  "https://images.unsplash.com/photo-1572288717056-ea97fb77c71e?auto=format&fit=crop&w=1920&q=80";

/* =========================================
   SERVICE LOCATIONS
========================================= */

const defaultLocations = [
  "Vancouver",
  "Burnaby",
  "Richmond",
  "Surrey",
  "Delta",
  "Coquitlam",
  "Port Coquitlam",
  "Port Moody",
  "New Westminster",
  "North Vancouver",
  "West Vancouver",
  "Langley",
  "White Rock",
  "Maple Ridge",
  "Pitt Meadows",
  "Tsawwassen",
  "Ladner",
  "Chilliwack",
  "Abbotsford",
  "Mission",
];

/* =========================================
   SERVICE AREAS COMPONENT
========================================= */

export default function ServiceAreas({
  eyebrow = "Service Areas",
  title = "Servicing Greater Vancouver & Surrounding Areas",
  description = "HoodClean provides professional commercial and residential kitchen hood cleaning, grease filter cleaning, and accessible exhaust cleaning services throughout Greater Vancouver and the surrounding Lower Mainland. We help restaurants, commercial kitchens, businesses, and homeowners manage grease buildup and maintain cleaner kitchen ventilation systems.",
  locations = defaultLocations,
  backgroundImage = defaultBackgroundImage,
}) {
  return (
    <section
      className="service-areas"
      aria-labelledby="service-areas-heading"
      style={{
        "--service-areas-image":
          `url("${backgroundImage}")`,
      }}
    >
      <div className="container service-areas__container">

        {/* =====================================
           SECTION HEADING
        ===================================== */}

        <div className="service-areas__intro">

          {/* EYEBROW */}

          <span className="eyebrow service-areas__eyebrow">
            {eyebrow}
          </span>

          {/* MAIN TITLE */}

          <h2
            id="service-areas-heading"
            className="heading-section service-areas__title"
          >
            {title}
          </h2>

          {/* DESCRIPTION */}

          <p className="service-areas__description">
            {description}
          </p>

        </div>

        {/* =====================================
           SERVICE LOCATIONS
        ===================================== */}

        <div className="service-areas__locations">

          <h3 className="service-areas__locations-title">
            Greater Vancouver Service Areas
          </h3>

          <ul className="service-areas__list">

            {locations.map((location) => (
              <li
                className="service-areas__item"
                key={location}
              >
                <span
                  className="service-areas__dot"
                  aria-hidden="true"
                />

                <span className="service-areas__name">
                  {location}
                </span>
              </li>
            ))}

          </ul>

          {/* ADDITIONAL INFORMATION */}


        </div>

      </div>
    </section>
  );
}
