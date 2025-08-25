import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { techStack } from "../constants";

const firstRow = techStack.slice(0, techStack.length / 2);
const secondRow = techStack.slice(techStack.length / 2);

const TechCard = ({ img, name }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-6 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation flex flex-col items-center justify-center"
      )}
    >
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/10 shadow-lg backdrop-blur-sm hover:scale-110 transition-transform duration-300">
        <img
          className="w-12 h-12 object-contain"
          src={img}
          alt={name}
        />
      </div>
      <figcaption className="mt-4 text-sm font-medium text-white">
        {name}
      </figcaption>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">Technologies I Work With</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
