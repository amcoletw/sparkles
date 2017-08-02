import React from "react";

import Header from "./Header/Header";
import InputField from "./InputField/InputField";
import Button from "./Button/Button";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import GridContainer from "./Layout/GridContainer/GridContainer";

const App = () => (
  <GridContainer>
    <Header text="Get your sparkle on"/>
    <div>
      <InputField type="text" title="what's happening?"/>
      <Button className="primary" label="Sparkle on, baby!"/>
    </div>
    <Sidebar>
        This is a sidebar. Hooray!
    </Sidebar>
    <Footer text="Made with love in Chicago"/>
  </GridContainer>
);

export default App;
