import React from "react";
import {
  Target,
  Medal,
  Users,
  TrendingUp,
  Award,
  Clock,
  Headphones,
} from "lucide-react";

export const cardData = [
  {
    id: 1,
    icon: Users,
    title: "Expert Team",
    desc: "20+ years of combined construction experience delivering excellence.",
  },
  {
    id: 2,
    icon: Award,
    title: "Quality Assured",
    desc: "Premium materials and trusted vendors ensure top-notch quality.",
  },
  {
    id: 3,
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We value your time — projects are delivered as promised, without delays.",
  },
  {
    id: 4,
    icon: Headphones,
    title: "End-to-End Support",
    desc: "From concept to completion, we guide you every step of the way.",
  },
];

export const coreValueCards = [
  {
    id: 1,
    title: "Our Mission",
    desc: "To deliver exceptional construction and interior design services that exceed client expectations through innovation, quality craftsmanship, and sustainable practices.",
    icon: Target,
  },
  {
    id: 2,
    title: "Quality Excellence",
    desc: "We maintain the highest standards of quality in every project, ensuring durability, aesthetics, and functionality in all our deliverables.",
    icon: Medal,
  },
  {
    id: 3,
    title: "Client-Centric",
    desc: "Your vision drives our work. We collaborate closely with clients to understand their needs and transform ideas into stunning realities.",
    icon: Users,
  },
  {
    id: 4,
    title: "Continuous Growth",
    desc: "We stay ahead of industry trends, embracing new technologies and methodologies to provide cutting-edge solutions.",
    icon: TrendingUp,
  },
];

const Card = ({ cardDetails }) => {
  const IconComponent = cardDetails?.icon;
  return (
    <div className="h-auto border-[1px] rounded-md p-6 space-y-2 flex flex-col items-center hover:shadow-lg transition-all duration-300">
      <span className="bg-[#FFF2EA] rounded-full p-5 flex items-center justify-center mb-2">
        {IconComponent && <IconComponent className="text-[#FF8001] w-6 h-6" />}
      </span>
      <p className="font-bold text-xl text-quadcore-primary">
        {cardDetails.title}
      </p>
      <p className="font-base text-sm text-quadcore-muted">
        {cardDetails.desc}
      </p>
    </div>
  );
};

export default Card;
