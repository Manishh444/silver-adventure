import React from "react";
import { RatingIcon } from "./IconSvg";

export const testimonials = [
  {
    id: 1,
    rating: <RatingIcon />,
    text: `"BuildCraft transformed our house into a dream home. Their attention to detail and quality is exceptional."`,
    name: "Rajesh Sharma",
    role: "Homeowner",
  },
  {
    id: 2,
    rating: <RatingIcon />,
    text: `"Professional service from start to finish. They delivered our office renovation ahead of schedule."`,
    name: "Priya Patel",
    role: "Business Owner",
  },
  {
    id: 3,
    rating: <RatingIcon />,
    text: `"Reliable partners for all our construction projects. Highly recommend their services."`,
    name: "Amit Singh",
    role: "Property Developer",
  },
];

const TestimonialCard = ({ testimonialDetail }) => {
  return (
    <div className="h-auto border-[1px] rounded-md py-12 px-6 space-y-2 flex flex-col">
      <p className="">{testimonialDetail?.rating}</p>
      <p className="text-sm text-gray-400">{testimonialDetail?.text}</p>
      <div>
        <p className="text-sm font-bold">{testimonialDetail?.name}</p>
        <p className="text-sm text-gray-400">{testimonialDetail?.role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
