import PropTypes from "prop-types";

const RadioButton = ({ label, value, onChange, isChecked }) => {
  return (
    <div className="custom-radio">
      <input
        type="radio"
        id={`id_${value}`}
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default RadioButton;
