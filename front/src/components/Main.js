import FirstBlock from "./blocks/FirstBlock";
import SecondBlock from "./blocks/SecondBlock";
import ThirdBlock from "./blocks/ThirdBlock";

const Main = () => {
  return (
    <div className="container__main">
      <div className="headline">
        <p>Nagłówek H1</p>
      </div>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
    </div>
  );
};

export default Main;
