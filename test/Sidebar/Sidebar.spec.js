import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import Sidebar from "../../src/Sidebar/Sidebar";


describe("Sidebar", () => {
  chai.use(chaiEnzyme());

  it("renders a sidebar", () => {
    const sidebar = shallow(<Sidebar/>);

    expect(sidebar).to.have.descendants(<div/>);
  });
});
