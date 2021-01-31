import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { JobRequestProps, MAKE_REQUEST } from "../../store/actionTypes";
import { State } from "../../store/reducer";

const mapState = (state: State) => ({
    location: state.location,
    fullTime: state.fullTime,
    searchText: state.searchText
});

const mapDispatch = {
    updateSearchFilter: (searchParams: JobRequestProps) => ({ type: MAKE_REQUEST, params: { ...searchParams } }),
};

const connector = connect(mapState, mapDispatch);
type JobFilterProps = ConnectedProps<typeof connector>;

export const JobFilter = (props: JobFilterProps) => {
    const [location, setLocation] = useState(props.location);
    const [searchText, setSearchText] = useState(props.searchText);
    const [fullTime, setFullTime] = useState(props.fullTime);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.updateSearchFilter({ searchText, location, fullTime, page: 1, loading: true});
    };
    return (
        <Form className="component-job-filter" id="jobFilterForm"
            name="jobFilterForm" onSubmit={handleSubmit}>
            <Form.Row className="align-items-end">
                <Form.Group as={Col} controlId="formGridSearch">
                    <Form.Label>Search</Form.Label>
                    <Form.Control onChange={e => setSearchText(e.target.value)} value={searchText} name="searchText" type="text" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control onChange={e => setLocation(e.target.value)} value={location} name="location" type="text" />
                </Form.Group>

                <Form.Group as={Col} xs="auto" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Full Time Only" checked={fullTime} onChange={() => setFullTime(!fullTime)} value={fullTime ? "YES" : "NO"} name="fullTime" id="fullTime" className="mb-2" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSubmit">
                    <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                        Go
                    </Button>
                </Form.Group>

            </Form.Row>

            
        </Form>
    );
};

export default connector(JobFilter);
