import React from "react";

import InputField from "./InputField/InputField";
import Button from "./Button/Button";

const App = () => (
  <div>
    <header>Get your sparkle on</header>
    <InputField/>
    <Button className={"primary"} label={"Sparkle on, baby!"}/>
    <footer>Made with love in Chicago</footer>
  </div>
);

export default App;
