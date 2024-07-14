import PropTypes from "prop-types";

import RadioButton from "../reusable/RadioButton";

const FirstBlock = ({ selectedRadioValue, setSelectedRadioValue }) => {
  const handleRadioChange = (value) => {
    setSelectedRadioValue(value);
  };

  const options = [
    { value: "option1", label: "Opcja pierwsza" },
    { value: "option2", label: "Opcja druga" },
    { value: "option3", label: "Opcja trzecia" },
  ];

  return (
    <div className="block first_block">
      <span className="block__title">Blok pierwszy</span>
      <div className="block__content">
        {options.map((option) => (
          <RadioButton
            key={`key-${option.value}`}
            label={option.label}
            value={option.value}
            onChange={handleRadioChange}
            isChecked={selectedRadioValue === option.value}
          />
        ))}
      </div>
    </div>
  );
};

FirstBlock.propTypes = {
  selectedRadioValue: PropTypes.string.isRequired,
  setSelectedRadioValue: PropTypes.func.isRequired,
};

export default FirstBlock;
