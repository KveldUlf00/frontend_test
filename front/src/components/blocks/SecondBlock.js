import Button from "../reusable/Button";

const SecondBlock = ({ onReplaceBtn, onGlueBtn }) => {
  return (
    <div className="block second_block">
      <span className="block__title">Blok drugi</span>
      <div className="block__content">
        <Button label="Zastąp" onClick={onReplaceBtn} />
        <Button label="Doklej" onClick={onGlueBtn} />
      </div>
    </div>
  );
};

export default SecondBlock;
