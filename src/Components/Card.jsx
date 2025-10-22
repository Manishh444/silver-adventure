import React from "react";

import {
  ExpertIcon,
  QualityIcon,
  SupportIcon,
  TimelyIcon,
} from "../Components/IconSvg";

export const cardData = [
  {
    id: 1,
    icon: <ExpertIcon />,
    title: "Expert Team",
    desc: "20+ years of combined construction experience delivering excellence.",
  },
  {
    id: 2,
    icon: <QualityIcon />,
    title: "Quality Assured",
    desc: "Premium materials and trusted vendors ensure top-notch quality.",
  },
  {
    id: 3,
    icon: <TimelyIcon />,
    title: "On-Time Delivery",
    desc: "We value your time — projects are delivered as promised, without delays.",
  },
  {
    id: 4,
    icon: <SupportIcon />,
    title: "End-to-End Support",
    desc: "From concept to completion, we guide you every step of the way.",
  },
];

const Card = ({ cardDetails }) => {
  return (
    <div className="h-auto border-[1px] rounded-md py-12 px-6 space-y-2 text-center flex flex-col items-center">
      <span className="">{cardDetails?.icon}</span>
      <p className="font-semibold text-lg ">{cardDetails.title}</p>
      <p className="font-light text-sm text-gray-400">{cardDetails.desc}</p>
    </div>
  );
};

export default Card;
