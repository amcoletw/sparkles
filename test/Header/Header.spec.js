import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import {Header} from "../../src/Header/Header";

describe("Header", () => {
  chai.use(chaiEnzyme());

  it("accepts a title", () => {
    const header = shallow(<Header/>);

    expect(header).to.have.text("Hello, world!");
  });
});
