import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";

import FirstBlock from "./blocks/FirstBlock";
import SecondBlock from "./blocks/SecondBlock";
import ThirdBlock from "./blocks/ThirdBlock";
import content from "../data/content.json";
import messages from "../data/messages.json";

const Main = ({ setShowName, isTextToReset, setIsTextToReset }) => {
  const [loremData, setLoremData] = useState([]);
  const [text, setText] = useState([]);
  const [usedLoremIndexes, setUsedLoremIndexes] = useState([]);
  const [selectedRadioValue, setSelectedRadioValue] = useState("option1");

  const { enqueueSnackbar } = useSnackbar();

  const resetTextAndProperties = () => {
    setUsedLoremIndexes([0]);
    setSelectedRadioValue("option1");
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
      enqueueSnackbar(messages.allTextsUsed, {
        variant: "error",
      });
      return;
    } else if (
      selectedRadioValue === "option1" &&
      usedLoremIndexes.includes(0)
    ) {
      enqueueSnackbar(messages.firstTextInThirdBlock, {
        variant: "error",
      });
      return;
    } else if (
      selectedRadioValue === "option2" &&
      usedLoremIndexes.includes(1)
    ) {
      enqueueSnackbar(messages.secondTextInThirdBlock, {
        variant: "error",
      });
      return;
    } else if (
      selectedRadioValue === "option3" &&
      [2, 3, 4, 5].every((index) => usedLoremIndexes.includes(index))
    ) {
      enqueueSnackbar(messages.allRandomTextUsed, {
        variant: "error",
      });
      return;
    }

    const usedIndex = getChosenLorem();

    if (
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
  }, [loremData, usedLoremIndexes]);

  useEffect(() => {
    if (isTextToReset) {
      resetTextAndProperties();
      setIsTextToReset(false);
      setShowName(false);
    }
  }, [isTextToReset, setIsTextToReset, setShowName]);

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
        setSelectedRadioValue={setSelectedRadioValue}
      />
      <SecondBlock onReplaceBtn={onReplaceBtn} onGlueBtn={onGlueBtn} />
      <ThirdBlock text={text} />
    </div>
  );
};

Main.propTypes = {
  setShowName: PropTypes.func.isRequired,
  isTextToReset: PropTypes.bool.isRequired,
  setIsTextToReset: PropTypes.func.isRequired,
};
export default Main;
