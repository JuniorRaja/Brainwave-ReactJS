import Section from "./Section";
import Heading from "./design/Heading";
import { smallSphere, stars } from "../assets";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative lg:flex justify-center mb-[6.5rem]">
          <img
            src={smallSphere}
            className="relative z-1"
            alt="Sphere"
            width={255}
            height={255}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="stars"
              className="w-full "
              width={950}
              height={400}
            />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once. Use forever."
        />
      </div>
    </Section>
  );
};

export default Pricing;
