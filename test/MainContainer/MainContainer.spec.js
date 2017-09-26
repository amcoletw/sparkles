import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import MainContainer from "../../src/MainContainer/MainContainer";
import InputField from "../../src/InputField/InputField";

describe("MainContainer", () => {
  chai.use(chaiEnzyme());

  it("renders its children", () => {
    const mainContainer = shallow(<MainContainer>
                                    <InputField type="name" title="first name"/>
                                  </MainContainer>
    );

    expect(mainContainer).to.have.descendants(InputField);
  });
});
