interface Props {
  current?: boolean;
}

const PersonRound = ({ current = false }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2857 7.75C14.2857 8.3941 14.0449 9.01181 13.6162 9.46726C13.1876 9.92271 12.6062 10.1786 12 10.1786C11.3938 10.1786 10.8124 9.92271 10.3838 9.46726C9.9551 9.01181 9.71429 8.3941 9.71429 7.75C9.71429 7.1059 9.9551 6.48819 10.3838 6.03274C10.8124 5.5773 11.3938 5.32143 12 5.32143C12.6062 5.32143 13.1876 5.5773 13.6162 6.03274C14.0449 6.48819 14.2857 7.1059 14.2857 7.75ZM16 7.75C16 8.87717 15.5786 9.95817 14.8284 10.7552C14.0783 11.5522 13.0609 12 12 12C10.9391 12 9.92172 11.5522 9.17157 10.7552C8.42143 9.95817 8 8.87717 8 7.75C8 6.62283 8.42143 5.54183 9.17157 4.7448C9.92172 3.94777 10.9391 3.5 12 3.5C13.0609 3.5 14.0783 3.94777 14.8284 4.7448C15.5786 5.54183 16 6.62283 16 7.75ZM5.71429 17.4643C5.71429 17.2166 5.96571 16.4819 7.22286 15.6926C8.38629 14.9629 10.08 14.4286 12 14.4286C13.92 14.4286 15.6137 14.9629 16.7771 15.6926C18.0343 16.4819 18.2857 17.2166 18.2857 17.4643C18.2857 17.7863 18.1653 18.0952 17.951 18.3229C17.7367 18.5506 17.446 18.6786 17.1429 18.6786H6.85714C6.55404 18.6786 6.26335 18.5506 6.04902 18.3229C5.83469 18.0952 5.71429 17.7863 5.71429 17.4643ZM12 12.6071C7.6 12.6071 4 15.0357 4 17.4643C4 18.2694 4.30102 19.0416 4.83684 19.6109C5.37266 20.1802 6.09938 20.5 6.85714 20.5H17.1429C17.9006 20.5 18.6273 20.1802 19.1632 19.6109C19.699 19.0416 20 18.2694 20 17.4643C20 15.0357 16.4 12.6071 12 12.6071Z"
        fill={current ? 'white' : '#51515A'}
      />
    </svg>
  );
};

export default PersonRound;
