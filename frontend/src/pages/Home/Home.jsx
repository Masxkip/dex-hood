import Hero from "./Hero/Hero";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeServices from "../../components/HomeServices/HomeServices";
import FAQSection from "../../components/FAQ/FAQSection";
import Industries from "../Industries/Industries";
import ServiceAreas from "../../components/ServiceAreas/ServiceAreas";
import ChooseUs from "../ChooseUs/ChooseUs";
import WhyChoose from "../WhyChoose/WhyChoose";



export default function Home() {
  return (
    <main>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <ChooseUs />
      <WhyChoose />
      <ServiceAreas />
      <Industries />
      <FAQSection variant="home" />
    </main>
  );
}