import HTML5 from "../icons/html5.png";

const Header = () => {
  return (
    <div className="container__header">
      <div className="logo">
        <img src={HTML5} className="icon" alt="HTML5 logo" />
      </div>
      <div className="description">
        <span>
          Zadanie&nbsp;<b>rekrutacyjne</b>
        </span>
        <span>Błażej Raducki</span>
      </div>
    </div>
  );
};

export default Header;
