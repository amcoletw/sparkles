import React from "react";

import Header from "./Header/Header";
import InputField from "./InputField/InputField";
import Button from "./Button/Button";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

const App = () => (
  <div>
    <Header text="Get your sparkle on"/>
    <div>
      <InputField type="text" title="what's happening?"/>
      <Button className="primary" label="Sparkle on, baby!"/>
    </div>
    <Sidebar>
        This is a sidebar. Hooray!
    </Sidebar>
    <Footer text="Made with love in Chicago"/>
  </div>
);

export default App;
