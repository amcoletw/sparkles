import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import Button from "../../src/Button/Button";

describe("Button", () => {
    chai.use(chaiEnzyme());

    it("can submit a form", () => {
        const button = shallow(<Button type="submit"/>);

        expect(button).to.have.attr("type", "submit");
    });

    it("displays a label", () => {
        const button = shallow(<Button type="submit" label="Sparkle on!"/>);


    });
});
