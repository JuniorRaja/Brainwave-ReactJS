import { service1, service2, service3, check } from "../assets";
import Generating from "./Generating";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Section from "./Section";
import Heading from "./design/Heading";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators"
          text="Brainwave unlocks the potential of AI-Powered applications"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                height={730}
                width={800}
                src={service1}
                alt="Service1"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-Powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
          {/* Service-2 */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Service 2"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Smartest AI</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Brainwave unlocks the potential of AI-Powered applications
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video Generation</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Brainwave unlocks the potential of AI-Powered applications
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, idx) => (
                    <li
                      className={`rounded-2xl flex items-center border border-n-3 bg-n-6 w-[3rem] h-[3rem] justify-center ${
                        idx === 2 ? "" : ""
                      }`}
                    >
                      <div>
                        <img src={item} alt="Service Icon" className="" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  alt="Service 3"
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
