import React from "react";

import { Building2, Paintbrush, Wrench, Home, CheckCircle } from "lucide-react";

export const serviceCards = [
  {
    id: 1,
    icon: Building2,
    title: "Construction Services",
    description: "Complete construction solutions from foundation to finishing",
    features: [
      "Residential Construction",
      "Commercial Buildings",
      "Industrial Projects",
      "Structural Engineering",
      "Project Management",
    ],
  },
  {
    id: 2,
    icon: Paintbrush,
    title: "Interior Design",
    description: "Transform your spaces with stunning interior designs",
    features: [
      "Space Planning",
      "3D Visualization",
      "Custom Furniture Design",
      "Color Consultation",
      "Lighting Design",
    ],
  },
  {
    id: 3,
    icon: Wrench,
    title: "Real Estate",
    description: "Breathe new life into existing structures",
    features: [
      "Farmland Development",
      "Home Renovation",
      "Office Makeovers",
      "Heritage Restoration",
      "Energy Efficiency Upgrades",
    ],
  },
  {
    id: 4,
    icon: Home,
    title: "Turnkey Projects",
    description: "End-to-end solutions for hassle-free project completion",
    features: [
      "Design & Build",
      "Material Procurement",
      "Quality Assurance",
      "Timely Delivery",
      "Post-Project Support",
    ],
  },
];

const ServiceCards = ({ cardDetails }) => {
  const IconComponent = cardDetails?.icon;
  return (
    <div className="h-auto border flex flex-col bg-white items-start rounded-lg shadow-sm p-8 space-y-2 leading-loose hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <span className="bg-quadcore-bgIcon rounded-full p-5 flex items-center justify-center mb-2">
        {IconComponent && (
          <IconComponent className="text-quadcore-accent w-8 h-8" />
        )}
      </span>
      <h3 className="text-xl text-quadcore-primary font-bold">
        {cardDetails?.title}
      </h3>
      <p className="text-lg text-quadcore-muted">{cardDetails?.desc}</p>
      {cardDetails?.features?.map((feature) => {
        return (
          <p className="flex gap-2 items-center">
            <CheckCircle className="text-[#FF851C] w-6 h-6" /> {feature}
          </p>
        );
      })}
    </div>
  );
};

export default ServiceCards;
