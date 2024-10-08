interface Props {
  current?: boolean;
}

const Notice = ({ current = false }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6498 2.36464V5.39833C17.024 5.39833 17.3947 5.47056 17.7405 5.6109C18.0862 5.75124 18.4004 5.95694 18.6651 6.21626C18.9298 6.47558 19.1397 6.78343 19.2829 7.12224C19.4262 7.46106 19.4999 7.82419 19.4999 8.19092C19.4999 8.55765 19.4262 8.92079 19.2829 9.2596C19.1397 9.59842 18.9298 9.90627 18.6651 10.1656C18.4004 10.4249 18.0862 10.6306 17.7405 10.7709C17.3947 10.9113 17.024 10.9835 16.6498 10.9835V13.7761C16.6498 15.3102 14.8627 16.1861 13.6096 15.2655L11.6526 13.8264C10.6064 13.0579 9.38837 12.5448 8.09942 12.3295V14.9769C8.09952 15.5855 7.87511 16.1735 7.46755 16.6327C7.05999 17.0919 6.49675 17.3913 5.88167 17.4756C5.26658 17.56 4.64111 17.4236 4.12055 17.0917C3.59999 16.7598 3.21943 16.2547 3.04902 15.6695L1.55746 10.5535C1.0207 9.93238 0.671393 9.17691 0.548791 8.37198C0.426188 7.56706 0.535155 6.74458 0.863441 5.997C1.19173 5.24943 1.72632 4.60639 2.40713 4.14017C3.08793 3.67395 3.88796 3.40303 4.71729 3.35787L7.5845 3.20149C8.98737 3.12514 10.3517 2.72346 11.5652 2.02953L13.792 0.756104C15.0594 0.0328217 16.6498 0.927383 16.6498 2.36464ZM3.95155 11.987L4.87594 15.1584C4.92043 15.312 5.0201 15.4445 5.15656 15.5316C5.29301 15.6188 5.45703 15.6546 5.61833 15.6325C5.77963 15.6103 5.92731 15.5318 6.0341 15.4113C6.1409 15.2908 6.19959 15.1365 6.19934 14.9769V12.175L4.71729 12.094C4.4595 12.0788 4.2034 12.043 3.95155 11.987ZM14.7497 2.36464L12.5218 3.63899C11.1689 4.41321 9.65947 4.88789 8.09942 5.02971V10.4464C9.79714 10.6754 11.4132 11.3242 12.7926 12.337L14.7497 13.7761V2.36464ZM6.19934 5.14141L4.82179 5.21588C4.18094 5.25055 3.57664 5.51936 3.12817 5.96925C2.67971 6.41914 2.41967 7.01741 2.39939 7.64597C2.3791 8.27453 2.60005 8.8877 3.01862 9.36445C3.43718 9.8412 4.02295 10.1469 4.66028 10.2211L4.82179 10.2351L6.19934 10.3096V5.14141ZM16.6498 7.26006V9.12179C16.8919 9.12152 17.1248 9.03068 17.3009 8.8678C17.477 8.70493 17.5829 8.48233 17.5971 8.24548C17.6113 8.00863 17.5327 7.7754 17.3772 7.59346C17.2218 7.41152 17.0014 7.2946 16.7609 7.26657L16.6498 7.26006Z"
        fill={current ? 'white' : '#51515A'}
      />
    </svg>
  );
};

export default Notice;