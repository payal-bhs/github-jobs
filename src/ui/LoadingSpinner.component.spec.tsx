import React from "react";
import { shallow } from "enzyme";
import { LoadingSpinner } from "./LoadingSpinner.component";


describe("Heading", () => {
    it("render project spinner", () => {
        const spinner = shallow(<LoadingSpinner />);
        expect(spinner).toMatchSnapshot();
    });
});