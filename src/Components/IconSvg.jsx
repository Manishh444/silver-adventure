export const PhoneIcon = ({ className = "size-6" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
};

export const ExpertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-blue-600"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4z" />
    <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const QualityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-green-600"
  >
    <path d="M12 2l2.09 6.26L20 9.27l-5 3.73L16.18 20 12 16.9 7.82 20 9 13 4 9.27l5.91-.99L12 2z" />
    <path d="M9 11l2 2 4-4" />
  </svg>
);

export const TimelyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-yellow-500"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const SupportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-orange-600"
  >
    <path d="M12 22s8-4 8-10V7a8 8 0 0 0-16 0v5c0 6 8 10 8 10z" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

export const RatingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="24"
      viewBox="0 0 120 24"
      fill="none"
    >
      <g fill="#FFD700">
        <path d="M12 1.5L14.9 8.26L22.2 9.27L16.6 14.14L18 21.45L12 17.77L6 21.45L7.4 14.14L1.8 9.27L9.1 8.26L12 1.5Z" />
        <path d="M36 1.5L38.9 8.26L46.2 9.27L40.6 14.14L42 21.45L36 17.77L30 21.45L31.4 14.14L25.8 9.27L33.1 8.26L36 1.5Z" />
        <path d="M60 1.5L62.9 8.26L70.2 9.27L64.6 14.14L66 21.45L60 17.77L54 21.45L55.4 14.14L49.8 9.27L57.1 8.26L60 1.5Z" />
        <path d="M84 1.5L86.9 8.26L94.2 9.27L88.6 14.14L90 21.45L84 17.77L78 21.45L79.4 14.14L73.8 9.27L81.1 8.26L84 1.5Z" />
        <path d="M108 1.5L110.9 8.26L118.2 9.27L112.6 14.14L114 21.45L108 17.77L102 21.45L103.4 14.14L97.8 9.27L105.1 8.26L108 1.5Z" />
      </g>
    </svg>
  );
};

export const LocationIcon = ({ className = "w-[64px] h-[64px]" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.048"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

export const MailIcon = ({ className = "w-[64px] h-[64px]" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g clipPath="url(#clip0_15_17)">
          <rect width="24" height="24" fill="none"></rect>
          <path
            d="M3 17.5V6.5C3 5.94772 3.44772 5.5 4 5.5H12H20C20.5523 5.5 21 5.94772 21 6.5V17.5C21 18.0523 20.5523 18.5 20 18.5H4C3.44772 18.5 3 18.0523 3 17.5Z"
            stroke="#000000"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3 6L12 12L21 6"
            stroke="#000000"
            strokeLinejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_15_17">
            <rect width="24" height="24" fill="none"></rect>
          </clipPath>
        </defs>
      </g>
    </svg>
  );
};

export const TimeIcon = ({className="w-[64px] h-[64px]"}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(-1, 0, 0, 1, 0, 0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <rect width="24" height="24" fill="none"></rect>{" "}
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>{" "}
        <path
          d="M12 6V12H6"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};
