const ThirdBlock = ({ text }) => {
  const veryLongTitle =
    "Blok z długą nazwą która sama się przytnie kiedy będzie trzeba to zrobi to co trzeba kmwtw";

  return (
    <div className="block third_block">
      <span className="block__title truncate">{veryLongTitle}</span>
      <div className="block__content centered-text">
        {text.map((elem, index) => (
          <span key={`text-key-${index}`}>{elem}</span>
        ))}
      </div>
    </div>
  );
};

export default ThirdBlock;
