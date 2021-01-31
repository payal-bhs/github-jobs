import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; 
import JobPagination from "./JobPagination.component";

// TODO : move this store to test utils
const initialState = {
    searchText: "",
    location: "",
    fullTime: false,
    page: 1,
    hasNextPage: true,
    loading: true,
    error: false,
};

const mockStore = configureStore();
const defaultStore = mockStore(initialState);


describe("JobCard", () => {

    it("render filter layout for job", () => {
        const jobFilter = shallow(
            <Provider store={defaultStore}>
                <JobPagination />
            </Provider>);
        expect(jobFilter).toMatchSnapshot();
    });
});
