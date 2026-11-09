import "./ChooseUs.css";

export default function ChooseUs() {
  return (
    <section
      className="choose-us"
      aria-labelledby="choose-us-heading"
    >
      <div className="container choose-us__container">

        {/* MAIN HEADING */}

        <h2
          id="choose-us-heading"
          className="heading-section choose-us__title"
        >
          Choose HoodClean for Professional Kitchen
          Cleaning Services in Greater Vancouver
        </h2>

        {/* DESCRIPTION CONTENT */}

        <div className="choose-us__content">

          <p className="choose-us__description">
            A kitchen should feel as inviting as the
            meals made in it. At HoodClean, we bring
            professional care to homes and commercial
            kitchens throughout Greater Vancouver,
            lifting stubborn grease, clearing away
            cooking residue and refreshing the spaces
            you rely on every day. From inside appliances
            and cupboards to countertops, sinks, floors
            and the hood above your stove, our attention
            extends well beyond the obvious surfaces.
          </p>

          <p className="choose-us__description">
            What makes our approach personal is the time
            we take to understand your kitchen. We look
            at how the space is used, which areas need
            extra attention and how to care for its
            different materials and equipment. Whether
            we are working around a restaurant's service
            hours or a household's daily routine, we
            agree on the details beforehand and approach
            the work with care for your property.
            Dedicated hood, filter and exhaust services
            are also available for kitchens that need
            more focused attention.
          </p>

          <p className="choose-us__description">
            Good service should feel reassuring from
            the first conversation to the final
            walkthrough. We keep you informed, explain
            what your visit includes and take time to
            review the result with you. Whether you are
            planning a kitchen deep clean, preparing
            for moving day or looking after ongoing
            maintenance and repairs, HoodClean makes
            the process straightforward. We want you
            to enjoy a kitchen that feels cared for,
            with a team you feel confident welcoming
            back.
          </p>

        </div>

      </div>
    </section>
  );
}