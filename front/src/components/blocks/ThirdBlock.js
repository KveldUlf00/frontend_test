const ThirdBlock = () => {
  const veryLongTitle =
    "Blok z długą nazwą która sama się przytnie kiedy będzie trzeba to zrobi to co trzeba kmwtw";
  const veryLongText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed sem auctor dui efficitur venenatis ac egestas lectus. Sed et feugiat arcu. Fusce sagittis ultricies justo, vel tincidunt nibh finibus et. Donec aliquet ex sed justo sodales commodo id in odio. Donec mollis gravida rutrum. Integer viverra elementum tincidunt. Quisque sit amet finibus metus, non bibendum enim. Aliquam a odio blandit, tempor quam sit amet, varius augue. Fusce mollis quam et dolor placerat, non hendrerit ante facilisis. Vivamus id dui congue, fermentum mi nec, dignissim nibh. Sed ligula dolor, sodales eget dolor quis, finibus interdum purus. Nam id nunc ac.";

  return (
    <div className="block first_block">
      <span className="block__title truncate">{veryLongTitle}</span>
      <div className="block__content centered-text">
        <p>{veryLongText}</p>
      </div>
    </div>
  );
};

export default ThirdBlock;
