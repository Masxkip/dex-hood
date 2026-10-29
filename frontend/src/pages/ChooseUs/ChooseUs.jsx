
import "./ChooseUs.css";

export default function ChooseUs() {
  return (
    <section
      className="choose-us"
      aria-labelledby="choose-us-heading"
    >
      <div className="container choose-us__container">

        {/* ===== MAIN HEADING ===== */}

        <h2
          id="choose-us-heading"
          className="heading-section choose-us__title"
        >
          Choose HoodClean for Professional Kitchen
          Hood Cleaning in Greater Vancouver
        </h2>

        {/* ===== DESCRIPTION CONTENT ===== */}

        <div className="choose-us__content">

          <p className="choose-us__description">
            Maintaining a clean kitchen involves more than
            keeping cooking surfaces spotless. At HoodClean,
            we focus on the hood and exhaust components that
            help manage cooking grease, smoke, and airborne
            residue. Our commercial and residential kitchen
            hood cleaning services are designed to help
            businesses and homeowners throughout Greater
            Vancouver maintain cleaner kitchen environments.
          </p>

          <p className="choose-us__description">
            Every kitchen has different equipment, ventilation
            systems, and cleaning requirements. From busy
            restaurant kitchens and food preparation facilities
            to residential range hoods, we approach each
            service with attention to the condition and
            accessibility of the equipment. Our cleaning
            process focuses on removing grease and residue
            from the areas included in the agreed scope
            of work.
          </p>

          <p className="choose-us__description">
            We understand that maintaining your kitchen
            should be convenient and straightforward.
            That's why we emphasize clear communication,
            careful service planning, and practical cleaning
            solutions suited to your needs. Whether you're
            arranging a one-time cleaning or discussing
            ongoing kitchen exhaust maintenance, HoodClean
            is here to help you take the next step toward
            a cleaner kitchen.
          </p>

        </div>

      </div>
    </section>
  );
}
