
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import HomeServices from "../../components/HomeServices/HomeServices";
import Hero2 from "../../components/Hero2/Hero2";

import "./Services.css";

export default function Services() {
  return (
    <main className="services-page">

      {/* =====================================
          REUSABLE HERO SECTION
      ===================================== */}

      <Hero2
        title="What We Do"
        description="Complete kitchen cleaning, hood and exhaust care, maintenance and repairs for homes and businesses across Greater Vancouver."
        buttonText="Request a Quote"
        buttonLink="/contact"
      />

      {/* =====================================
          BREADCRUMB NAVIGATION
      ===================================== */}

      <div className="services-page__breadcrumb-wrap">
        <div className="container">
          <Breadcrumbs
            items={[
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Services",
              },
            ]}
          />
        </div>
      </div>

      {/* =====================================
          COMMERCIAL & RESIDENTIAL SERVICES
      ===================================== */}

      <HomeServices />

    </main>
  );
}
