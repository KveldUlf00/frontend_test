import PopupButton from "./reusable/PopupButton";

const Footer = () => {
  const popUpOptions = [
    { value: 0, label: "zresetuj ustawienia" },
    { value: 1, label: "pokaż dane osobowe" },
  ];

  const handleSelect = (value) => {
    if (value) {
      console.log("Selected: Pokaż dane osobowe");
    } else {
      console.log("Selected: Zresetuj ustawienia");
    }
  };

  return (
    <div className="container__footer">
      <div className="cssDiv">
        <span>CSS</span>
        <span>is</span>
        <span>awesome</span>
      </div>
      <div className="company-name">
        <span>nabthat</span>
      </div>
      <PopupButton options={popUpOptions} onSelect={handleSelect} />
    </div>
  );
};

export default Footer;
