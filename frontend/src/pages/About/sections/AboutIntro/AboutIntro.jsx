import "./AboutIntro.css";

export default function AboutIntro() {
  return (
    <section className="about-intro section">
      <div className="container">
        <div className="about-intro__grid">

          {/* LEFT COLUMN */}
          <div className="about-intro__column">
            <div className="about-intro__highlight">
              <p>
                At HoodClean, we provide professional
                commercial and residential kitchen
                cleaning throughout Greater Vancouver.
                We care for the entire kitchen, including
                its appliances, surfaces, hoods and exhaust
                systems, helping our customers maintain
                cleaner spaces for cooking and everyday use.
              </p>
            </div>

            <p>
              We understand that keeping a kitchen clean
              takes more than wiping down visible surfaces.
              Grease, food residue and everyday buildup
              can collect on equipment, inside cabinets
              and in hard to reach areas. From busy
              restaurant kitchens to family homes, we
              approach each space with care for its
              surfaces, equipment and the people who
              depend on it.
            </p>

            <p>
              Our approach is straightforward: understand
              the condition of your kitchen, discuss your
              priorities and explain the work required.
              We tailor the cleaning to your property,
              from appliances, countertops and floors
              to grease filters, hoods and exhaust
              systems, with a clear scope agreed
              before we begin.
            </p>

            <p>
              We aim to build lasting relationships
              through dependable service, clear
              communication and attention to detail.
              From your first enquiry to the completed
              clean, we want you to feel informed and
              confident in the care your kitchen receives.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="about-intro__column">
            <h2 className="about-intro__heading">
              Keeping Kitchens Clean and Safe
            </h2>

            <p>
              A clean kitchen supports a more hygienic
              environment for preparing food and a more
              comfortable space to work in. Our cleaning
              addresses grease and residue across the
              kitchen, giving attention to everyday
              contact surfaces as well as equipment
              and ventilation areas that need deeper care.
            </p>

            <ul className="about-intro__list">
              <li>
                Removing grease and food residue from
                kitchen appliances, surfaces and equipment.
              </li>
              <li>
                Addressing grease buildup in hoods,
                filters and kitchen exhaust systems.
              </li>
              <li>
                Helping maintain cleaner floors, work
                areas and spaces that are difficult
                to reach during everyday cleaning.
              </li>
            </ul>

            <p>
              Whether you require a single deep clean
              or regular cleaning visits, we explain
              the scope of our service and arrange
              the work around your kitchen's needs
              to make the process clear and convenient.
            </p>

            <h2 className="about-intro__heading">
              Who Do We Serve?
            </h2>

            <p>
              We serve commercial and residential
              customers throughout Greater Vancouver
              and the surrounding Lower Mainland,
              including restaurants, commercial food
              establishments, property managers
              and homeowners.
            </p>

            <p>
              Every kitchen is different. We take time
              to understand how yours is used, the
              equipment it contains and your cleaning
              requirements before recommending an
              approach that suits your space and routine.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}