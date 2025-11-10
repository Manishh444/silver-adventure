import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const contactCards = [
  {
    id: 1,
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
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
    value: "123 Construction Ave, Business District, City - 400001",
    href: null,
  },
  {
    id: 4,
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
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
            className="text-quadcore-accent hover:underline break-all"
          >
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
