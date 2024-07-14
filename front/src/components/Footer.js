import PopupButton from "./reusable/PopupButton";

const Footer = ({ setShowName, setIsTextToReset }) => {
  const popUpOptions = [
    { value: 0, label: "zresetuj ustawienia" },
    { value: 1, label: "pokaż dane osobowe" },
  ];

  const handleSelect = (value) => {
    if (value) {
      setShowName(true);
    } else {
      setIsTextToReset(true);
    }
  };

  return (
    <div className="container__footer">
      <div className="footer_block">
        <div className="cssDiv">
          <span>CSS</span>
          <span>is</span>
          <span>awesome</span>
        </div>
      </div>
      <div className="footer_block">
        <div className="company-name">
          <span>nabthat</span>
        </div>
      </div>

      <div className="footer_block">
        <PopupButton options={popUpOptions} onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default Footer;
