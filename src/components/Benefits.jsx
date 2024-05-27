import Section from "./Section";
import Heading from "./design/Heading";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { BenefitsInfo } from "../constants";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat smarter. Not harder."
        ></Heading>

        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {BenefitsInfo.map((item) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
              }}
            >
              <div className="relative z-2 flex flex-col max-h-[22rem0] p-[2.4rem] pointer-events-none">
                <h5 className="h2 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mx-auto lg:justify-between w-full">
                  <img
                    src={item.iconUrl}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                  <p className="ml-auto font-code text-xs font-bold to-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      height={360}
                      width={380}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
