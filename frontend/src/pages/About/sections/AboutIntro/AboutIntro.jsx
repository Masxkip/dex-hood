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
                commercial and residential kitchen hood
                cleaning services throughout Greater
                Vancouver, helping our customers maintain
                cleaner and better-maintained kitchens.
              </p>
            </div>

            <p>
              We understand the importance of keeping
              kitchen ventilation systems clean and
              properly maintained. From busy commercial
              restaurants to residential properties,
              our services are designed to address
              grease buildup and kitchen exhaust
              cleaning needs.
              We understand the importance of keeping
              kitchen ventilation systems clean and
              properly maintained. From busy commercial
              restaurants to residential properties,
              our services are designed to address
              grease buildup and kitchen exhaust
              cleaning needs.
            </p>

            <p>
              Our approach is straightforward: understand
              the condition of each kitchen, explain
              the work required, and provide practical
              cleaning solutions tailored to the property.
            </p>

            <p>
              We aim to build lasting relationships
              through dependable service, clear
              communication, and attention to detail.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="about-intro__column">
            <h2 className="about-intro__heading">
              Keeping Kitchens Clean and Safe
            </h2>

            <p>
              A clean kitchen exhaust system supports
              a better working environment and helps
              reduce grease accumulation in areas
              that can be difficult to reach during
              routine kitchen cleaning.
            </p>

            <ul className="about-intro__list">
              <li>
                Helping reduce grease buildup in
                kitchen ventilation systems.
              </li>
              <li>
                Supporting cleaner kitchen working
                environments.
              </li>
              <li>
                Providing practical cleaning services
                suited to different kitchen needs.
              </li>
            </ul>

            <p>
              Whether you require a one-time cleaning
              or ongoing maintenance, our goal is to
              make the process clear and convenient.
            </p>

            <h2 className="about-intro__heading">
              Who Do We Serve?
            </h2>

            <p>
              We serve commercial and residential
              customers throughout Greater Vancouver,
              including restaurants, commercial food
              establishments, property managers,
              and homeowners.
            </p>

            <p>
              Every kitchen is different, which is why
              we focus on understanding each customer's
              requirements before recommending a
              cleaning approach.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}