import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import InputField from "../../src/InputField/InputField";

describe("InputField", () => {
    chai.use(chaiEnzyme());

    it("can change its type", () => {
        const inputField = shallow(<InputField type="number" />);

        expect(inputField).to.have.attr("type", "number");
    });

    it("displays a title", () => {
        const inputField = shallow(<InputField type="text" title="First name"/>);

        expect(inputField).to.have.attr("name", "First name");
    });
});

