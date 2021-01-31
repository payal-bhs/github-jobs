import React from "react";
import { shallow } from "enzyme";
import { Heading } from "./Heading.component";


describe("Heading", () => {
    it("render project header", () => {
        const header = shallow(<Heading />);
        expect(header).toMatchSnapshot();
    });
});