
import { useLayoutEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

import QuoteCTA from "./components/QuoteCTA/QuoteCTA";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import FAQs from "./pages/FAQs/FAQs";

import CommercialServiceDetail from "./pages/ServiceDetail/CommercialServiceDetail";
import ResidentialServiceDetail from "./pages/ServiceDetail/ResidentialServiceDetail";

import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsOfService from "./pages/Legal/TermsOfService";

import Reviews from "./pages/Reviews/Reviews";

/* =========================================
   ROUTES & SCROLL RESET
========================================= */


function PageContent() {
  const { pathname, hash } = useLocation();

  /* =========================================
     ROUTE SCROLL RESET + SECTION NAVIGATION
  ========================================= */

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {

      /* SCROLL TO TARGETED SECTION */

      const targetId = hash.slice(1);

      if (targetId) {
        const target =
          document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({
            behavior: "instant",
            block: "start",
          });

          return;
        }
      }

      /* DEFAULT: SCROLL TO TOP */

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [pathname, hash]);

  return (
    <div
      key={pathname}
      className="page-transition"
    >
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/faqs" element={<FAQs />} />

        <Route
          path="/commercial/:slug"
          element={<CommercialServiceDetail />}
        />

        <Route
          path="/residential/:slug"
          element={<ResidentialServiceDetail />}
        />

        <Route
          path="/reviews"
          element={<Reviews />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms-of-service"
          element={<TermsOfService />}
        />

      </Routes>
    </div>
  );
}


/* =========================================
   MAIN APP
========================================= */

export default function App() {
  return (
    <BrowserRouter>

      {/* GLOBAL HEADER */}

      <Header />

      {/* PAGE CONTENT */}

      <PageContent />

      {/* GLOBAL CTA */}

      <QuoteCTA />

      {/* GLOBAL FOOTER */}

      <Footer />

    </BrowserRouter>
  );
}
