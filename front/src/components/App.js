import React, { useState } from "react";

import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  const [showName, setShowName] = useState(false);
  const [isTextToReset, setIsTextToReset] = useState(false);

  return (
    <div className="container">
      <Header showName={showName} />
      <Main
        isTextToReset={isTextToReset}
        setIsTextToReset={setIsTextToReset}
        setShowName={setShowName}
      />
      <Footer setShowName={setShowName} setIsTextToReset={setIsTextToReset} />
    </div>
  );
};

export default App;
