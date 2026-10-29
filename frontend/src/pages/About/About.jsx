import Hero2 from "../../components/Hero2/Hero2";

import AboutIntro from "./sections/AboutIntro/AboutIntro";
import OurStrengths from "./sections/OurStrengths/OurStrengths";

import ChooseUs from "../ChooseUs/ChooseUs";
import WhyChoose from "../WhyChoose/WhyChoose";
import HomeReviews from "../Reviews/HomeReviews";
import FAQSection from "../../components/FAQ/FAQSection";
import ServiceAreas from "../../components/ServiceAreas/ServiceAreas";
import Expertise from "../Expertise/Expertise";


import "./About.css";

export default function About() {
  return (
    <main className="about-page">
      <Hero2
        title="About Our Professional Hood Cleaning Services"
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />

      <AboutIntro />

      <OurStrengths />
      <ChooseUs />
      <WhyChoose />
      <HomeReviews />
      <Expertise />
      <ServiceAreas />
      <FAQSection variant="home" />
    </main>
  );
}