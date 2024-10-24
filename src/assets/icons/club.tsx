interface Props {
  current?: boolean;
}

const Club = ({ current = false }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 16H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V16Z"
        stroke={current ? 'white' : '#51515A'}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 7H20V14C20 15.1046 19.1046 16 18 16H6C4.89543 16 4 15.1046 4 14V7Z"
        stroke={current ? 'white' : '#51515A'}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="12"
        y="12"
        width="0.01"
        height="0.01"
        stroke={current ? 'white' : '#51515A'}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
        stroke={current ? 'white' : '#51515A'}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Club;
