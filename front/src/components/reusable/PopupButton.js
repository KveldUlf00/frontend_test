import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

const PopupButton = ({ options, onSelect }) => {
  const [showPopup, setShowPopup] = useState(false);
  const buttonRef = useRef(null);

  const togglePopup = () => {
    setShowPopup((origin) => !origin);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setShowPopup(false);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // At first I used ChevronDown and ChevronUp, but I found out that ChevronUp is bugged and after clicking it
  // the togglePopup do nothing. When I changed it to double ChevronDown everything is fine. That's why i used only
  // ChevronDown icon
  return (
    <div className="popup-button-container" ref={buttonRef}>
      <button className="custom-button" onClick={togglePopup}>
        <span className="flex-center">
          Pokaż <ChevronDown className={!showPopup && "rotated"} />
        </span>
      </button>
      {showPopup && (
        <div className="popup">
          {options.map((option) => (
            <button
              key={`key-${option.value}`}
              onClick={() => handleOptionClick(option.value)}
            >
              <ChevronRight />
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

PopupButton.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PopupButton;
