import React, { useState, useEffect } from "react";

import FirstBlock from "./blocks/FirstBlock";
import SecondBlock from "./blocks/SecondBlock";
import ThirdBlock from "./blocks/ThirdBlock";
import content from "../data/content.json";

const Main = ({ setShowName, isTextToReset, setIsTextToReset }) => {
  const [loremData, setLoremData] = useState([]);
  const [text, setText] = useState([]);
  const [usedLoremIndexes, setUsedLoremIndexes] = useState([]);
  const [selectedRadioValue, setselectedRadioValue] = useState("option1");

  const resetTextAndProperties = () => {
    setUsedLoremIndexes([0]);
    setselectedRadioValue("option1");
  };

  const getChosenLorem = () => {
    switch (selectedRadioValue) {
      case "option1":
        return 0;
      case "option2":
        return 1;
      case "option3":
        const randIndex = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
        return randIndex;
      default:
        return "";
    }
  };

  const onReplaceBtn = () => {
    const usedIndex = getChosenLorem();
    setUsedLoremIndexes([usedIndex]);
  };

  const onGlueBtn = () => {
    if (usedLoremIndexes.length === 6) {
      alert("Już wszystkie możliwe teksty zostały doklejone!");
      return;
    }

    if (selectedRadioValue === "option1" && usedLoremIndexes.includes(0)) {
      alert("Tekst pierwszy już znajduje się w trzecim bloku, wybierz inny.");
      return;
    } else if (
      selectedRadioValue === "option2" &&
      usedLoremIndexes.includes(1)
    ) {
      alert("Tekst drugi już znajduje się w trzecim bloku, wybierz inny.");
      return;
    } else if (
      selectedRadioValue === "option3" &&
      [2, 3, 4, 5].every((index) => usedLoremIndexes.includes(index))
    ) {
      alert(
        "Teksty trzy, cztery, pięć i sześć już znajdują się w trzecim bloku, wybierz inny."
      );
      return;
    }

    const usedIndex = getChosenLorem();

    if (
      usedLoremIndexes.includes(usedIndex) &&
      selectedRadioValue !== "option3"
    ) {
      alert("Tekst już się znajduje w trzecim bloku!");
    } else if (
      usedLoremIndexes.includes(usedIndex) &&
      selectedRadioValue === "option3"
    ) {
      onGlueBtn();
    } else {
      setUsedLoremIndexes((origin) => [...origin, usedIndex]);
    }
  };

  useEffect(() => {
    const chosenText = usedLoremIndexes
      .sort((a, b) => a - b)
      .map((usedLoremIndex) => loremData[usedLoremIndex]);
    setText(chosenText);
  }, [usedLoremIndexes]);

  useEffect(() => {
    if (isTextToReset) {
      resetTextAndProperties();
      setIsTextToReset(false);
      setShowName(false);
    }
  }, [isTextToReset]);

  useEffect(() => {
    if ("texts" in content && content.texts.length > 0) {
      setLoremData(content.texts);
      setUsedLoremIndexes([0]);
    }
  }, []);

  return (
    <div className="container__main">
      <div className="headline">
        <p>Nagłówek H1</p>
      </div>
      <FirstBlock
        selectedRadioValue={selectedRadioValue}
        setselectedRadioValue={setselectedRadioValue}
      />
      <SecondBlock onReplaceBtn={onReplaceBtn} onGlueBtn={onGlueBtn} />
      <ThirdBlock text={text} />
    </div>
  );
};

export default Main;
