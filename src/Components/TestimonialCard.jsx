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
    <div className="h-auto border bg-white rounded-md py-12 px-6 space-y-2 flex flex-col hover:shadow-lg transition-all duration-300">
      <p className="">{testimonialDetail?.rating}</p>
      <p className="text-base text-quadcore-primary">
        {testimonialDetail?.text}
      </p>
      <div>
        <p className="text-base font-bold text-quadcore-primary">
          {testimonialDetail?.name}
        </p>
        <p className="text-base text-quadcore-muted">
          {testimonialDetail?.role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
