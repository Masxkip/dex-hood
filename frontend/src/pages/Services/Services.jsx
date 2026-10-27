
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
        title="What We Do To Help Ensure Comfort"
        description="From commercial kitchen exhaust cleaning to residential range hood maintenance, HoodClean provides professional cleaning solutions to help keep kitchens cleaner and better maintained throughout Greater Vancouver."
        buttonText="Schedule a Consultation"
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
