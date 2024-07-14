import PropTypes from "prop-types";

import HTML5 from "../icons/html5.png";

const Header = ({ showName }) => {
  return (
    <div className="container__header">
      <div className="logo">
        <a href="/">
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

Header.propTypes = {
  showName: PropTypes.bool.isRequired,
};

export default Header;
