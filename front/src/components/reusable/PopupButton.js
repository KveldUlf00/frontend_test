import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

const PopupButton = ({ options, onSelect }) => {
  const [showPopup, setShowPopup] = useState(false);
  const buttonRef = useRef(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
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
  return (
    <div className="popup-button-container" ref={buttonRef}>
      <button className="custom-button" onClick={togglePopup}>
        <span className="flex-center">
          Pokaż {showPopup ? <ChevronDown /> : <ChevronUp />}
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

export default PopupButton;
