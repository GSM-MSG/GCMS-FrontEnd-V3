interface Props {
  highlightText?: string;
  title: string;
}

const Header = ({ highlightText, title }: Props) => (
  <h2 className="font-pretendard text-4 mb-1 font-semibold text-white">
    {highlightText && <span className="text-main-500">{highlightText}</span>}
    {title}
  </h2>
);
export default Header;
