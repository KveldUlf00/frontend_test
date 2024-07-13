import Button from "../reusable/Button";

const SecondBlock = () => {
  const onReplaceBtn = () => {
    console.log("Zastąp!");
  };

  const onGlueBtn = () => {
    console.log("Doklej!");
  };

  return (
    <div className="block first_block">
      <span className="block__title">Blok drugi</span>
      <div className="block__content flex-row">
        <Button label="Zastąp" onClick={onReplaceBtn} />
        <Button label="Doklej" onClick={onGlueBtn} />
      </div>
    </div>
  );
};

export default SecondBlock;
