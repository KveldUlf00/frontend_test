import HTML5 from "../icons/html5.png";

const Header = ({ showName }) => {
  return (
    <div className="container__header">
      <div className="logo">
        <a href="/" className="logo-link">
          <img src={HTML5} className="icon" alt="HTML5 logo" />
        </a>
      </div>
      <div className="description">
        <span>
          Zadanie&nbsp;<b>rekrutacyjne</b>
        </span>
        {showName && <span>Błażej Raducki</span>}
      </div>
    </div>
  );
};

export default Header;
