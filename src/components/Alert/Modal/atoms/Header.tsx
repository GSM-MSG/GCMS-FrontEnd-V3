interface Props {
  highlightText?: string;
  title: string;
}

const Header = ({ highlightText, title }: Props) => (
  <h2 className="font-pretendard mb-1 text-[16px] font-semibold leading-[24px] text-white">
    {highlightText && <span className="text-[#A4E335]">{highlightText}</span>}{' '}
    {title}
  </h2>
);
export default Header;
