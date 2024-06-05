import React from "react";
import Section from "./Section";
import Heading from "./design/Heading";
import { roadmap } from "../constants";
import { check2, grid, loading } from "../assets";
import Tagline from "./Tagline";

const Roadmap = () => {
  return (
    <Section classNames="overflow-hidden" id="Roadmap" crosses>
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />

        <div className="relative grid gap-10 md:gap-4 md:grid-cols-2 md:pb-[7rem]">
          {roadmap.map((item, idx) => {
            const status = item.status === "done" ? "Done" : "In-Progress";

            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[8rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl;p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      width={550}
                      height={550}
                      src={grid}
                      alt="Grid"
                    />
                  </div>

                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-n-1 rouned text-n-8">
                        <img
                          src={item.status === "done" ? check2 : loading}
                          alt={status}
                          width={16}
                          height={16}
                          className="mr-2.5"
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h-4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
