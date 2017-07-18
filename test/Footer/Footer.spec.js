import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import {Footer} from "../../src/Footer";

";

describe("Footer", () => {
  chai.use(chaiEnzyme());

  it("accomplishes a behavior", () => {
    const footer = shallow(<Footer/>);
  });
})
