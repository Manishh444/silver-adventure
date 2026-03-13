import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const contactCards = [
  {
    id: 1,
    icon: Phone,
    title: "Phone",
    value: "+91 9900064128",
    href: "tel:+919876543210",
  },
  {
    id: 2,
    icon: Mail,
    title: "Email",
    value: "info@quadcoreinfra.com",
    href: "mailto:info@quadcoreinfra.com",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Address",
    value:
      "Shri Hari Sadan #1003, 2nd floor 8th main,14th cross, Near ICICI Bank Judical Layout, GKVK Post, B'lore – 560065",
    href: null,
  },
];

const ContactCard = ({ cardDetails }) => {
  const IconComponent = cardDetails?.icon;

  return (
    <div className="h-auto border shadow-sm bg-white flex items-start rounded-md p-6 space-x-4">
      <span className="bg-quadcore-bgIcon rounded-full p-5 flex items-center justify-center">
        {IconComponent && (
          <IconComponent className="text-quadcore-accent w-6 h-6" />
        )}
      </span>

      <div className="flex flex-col justify-center space-y-1">
        <p className="text-lg font-semibold text-quadcore-primary">
          {cardDetails?.title}
        </p>

        {cardDetails?.href ? (
          <a
            href={cardDetails.href}
            className="text-quadcore-accent hover:underline break-all">
            {cardDetails?.value}
          </a>
        ) : (
          <p className="text-quadcore-accent">{cardDetails?.value}</p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
