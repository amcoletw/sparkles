import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import Button from "../../src/Button/Button";

describe("Button", () => {
  chai.use(chaiEnzyme());

  const doShallow = () => shallow(<Button type="submit"/>);

  it("can submit a form", () => {
    const button = doShallow();

    expect(button).to.have.attr("type", "submit");
  });

  it("displays a label", () => {
    const button = shallow(<Button type="submit" label="Sparkle on!"/>);

    expect(button).to.have.text("Sparkle on!");
  });

  // it("styles itself based on the action it performs", () => {
  //   const button = shallow(<Button type="submit" action="primary" label="Sparkle on!"/>);
  //
  //   expect(button).to.have.className("primary");
  // });
});
