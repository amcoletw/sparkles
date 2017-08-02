import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import GridContainer from "../../../src/Layout/GridContainer/GridContainer";
import styles from "../../../src/Layout/GridContainer/GridContainer.css";

describe("GridContainer", () => {
  chai.use(chaiEnzyme());

  it("wraps its children", () => {
    const gridContainer = shallow(<GridContainer>
                                    <p>Historical entries in the sidebar</p>
                                  </GridContainer>);

    expect(gridContainer).to.contain.text("Historical entries in the sidebar");
  });

  it("applies display: grid", () => {
    const gridContainer = shallow(<GridContainer/>);

    expect(gridContainer).to.have.className(styles.main);
  });
});
