import React from 'react';

const profile = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="12" fill="#44444B" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 20.9444V20C4 17.34 9.33 16 12 16C14.67 16 20 17.34 20 20V20.9444C17.877 22.8446 15.0734 24 12 24C8.92658 24 6.12303 22.8446 4 20.9444ZM16 10C16 12.21 14.21 14 12 14C9.79 14 8 12.21 8 10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10Z"
        fill="#CFCFD3"
      />
    </svg>
  );
};

export default profile;
