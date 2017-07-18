import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import Footer from "../../src/Footer/Footer";

describe("Footer", () => {
  chai.use(chaiEnzyme());

  it("displays some nice text", () => {
    const footer = shallow(<Footer text={"it's a me, the footer"}/>);

    expect(footer).to.contain.text("it's a me, the footer");
  });
});
