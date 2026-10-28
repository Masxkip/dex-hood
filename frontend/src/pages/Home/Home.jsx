import Hero from "./Hero/Hero";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeServices from "../../components/HomeServices/HomeServices";
import FAQSection from "../../components/FAQ/FAQSection";
import Industries from "../Industries/Industries";
import ServiceAreas from "../../components/ServiceAreas/ServiceAreas";



export default function Home() {
  return (
    <main>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <ServiceAreas />
      <Industries />
      <FAQSection variant="home" />
    </main>
  );
}