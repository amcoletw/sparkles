import React from "react";

import Header from "./Header/Header";
import InputField from "./InputField/InputField";
import Button from "./Button/Button";
import Footer from "./Footer/Footer";

const App = () => (
  <div>
    <Header text="Get your sparkle on"/>
    <div>
      <InputField/>
      <Button className={"primary"} label={"Sparkle on, baby!"}/>
    </div>
    <div>
        This is a sidebar. Hooray!
    </div>
    <Footer text="Made with love in Chicago"/>
  </div>
);

export default App;
