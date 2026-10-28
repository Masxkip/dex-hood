
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

import CommercialServiceDetail from "./pages/ServiceDetail/CommercialServiceDetail";
import ResidentialServiceDetail from "./pages/ServiceDetail/ResidentialServiceDetail";

/* ===== LEGAL PAGES ===== */

import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsOfService from "./pages/Legal/TermsOfService";

/* =========================================
   ROUTES & SCROLL RESET
========================================= */

function PageContent() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <div
      key={pathname}
      className="page-transition"
    >
      <Routes>

        {/* GENERAL PAGES */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        {/* COMMERCIAL SERVICES */}

        <Route
          path="/commercial/:slug"
          element={<CommercialServiceDetail />}
        />

        {/* RESIDENTIAL SERVICES */}

        <Route
          path="/residential/:slug"
          element={<ResidentialServiceDetail />}
        />

        {/* LEGAL PAGES */}

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

      {/* CURRENT PAGE */}

      <PageContent />

      {/* GLOBAL QUOTE CTA */}

      <QuoteCTA />

      {/* GLOBAL FOOTER */}

      <Footer />

    </BrowserRouter>
  );
}
