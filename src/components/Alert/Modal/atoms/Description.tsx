interface Props {
  description?: string;
}

const Description = ({ description }: Props) => {
  if (!description) return null;
  return (
    <p className="px-4 text-[14px] text-gray-400">
      {description.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
};

export default Description;
