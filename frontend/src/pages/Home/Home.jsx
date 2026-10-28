import Hero from "./Hero/Hero";
import HomeServices from "../../components/HomeServices/HomeServices";
import FAQSection from "../../components/FAQ/FAQSection";
import Industries from "../Industries/Industries";



export default function Home() {
  return (
    <main>
      <Hero />
      <HomeServices />
      <Industries />
      <FAQSection variant="home" />
    </main>
  );
}