
import Hero2 from "../../components/Hero2/Hero2";
import FAQSection from "../../components/FAQ/FAQSection";

export default function FAQs() {
  return (
    <main className="faqs-page">

      {/* =====================================
         FAQ HERO
      ===================================== */}

      <Hero2
        title="Frequently Asked Questions"
        description="Find answers to common questions about our commercial and residential kitchen hood cleaning services, maintenance, service areas, and quotations throughout Greater Vancouver."
        buttonText="Request a Quote"
        buttonLink="/contact"
      />

      {/* =====================================
         ALL FAQ QUESTIONS
      ===================================== */}

      <FAQSection variant="page" />

    </main>
  );
}
