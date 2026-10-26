import Hero2 from "../../components/Hero2/Hero2";

import AboutIntro from "./sections/AboutIntro/AboutIntro";
import OurStrengths from "./sections/OurStrengths/OurStrengths";

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
    </main>
  );
}