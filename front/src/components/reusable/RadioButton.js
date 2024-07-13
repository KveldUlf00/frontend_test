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

export default RadioButton;
