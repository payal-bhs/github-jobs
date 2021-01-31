import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { getJobs } from "../../services/Jobs";
import { UPDATE_REQUEST_STATUS, UpdateRequestProps } from "../../store/actionTypes";
import { State } from "../../store/reducer";
import { LoadingSpinner } from "../../ui/LoadingSpinner.component";
import { JobCard } from "../JobCard/JobCard.component";

import "./JobList.style.css";

const mapState = (state: State) => ({
    loc: state.location,
    jobType: state.fullTime,
    searchText: state.searchText,
    page: state.page,
    loading: state.loading,
    error: state.error,
});

const mapDispatch = {
    updateRequest: (status: UpdateRequestProps) => ({type: UPDATE_REQUEST_STATUS, params: {...status}})
};

const connector = connect(mapState, mapDispatch);
type JobListProps = ConnectedProps<typeof connector>;

const JobList = (props: JobListProps) => {
    console.log("JobList props => ", props);
    const { loc, jobType, searchText, page, loading, error } = props;
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        console.log("hello JobList useEffect");
        getJobs({
            location: loc,
            description: searchText,
            page:page,
            full_time: jobType
        }).then(data => {
            if (data) {
                setJobs(data.jobs);
                props.updateRequest({ loading: data.loading, hasNextPage: data.hasNextPage, error: data.error});
            }
        });
    }, [loc, jobType, searchText, page]);
    
    // <Col md={6} lg={3} className="col-12 job-col" key={i}>
    // <Col md={6} lg={3} xl={3} className="job-col" key={i}></Col>
    // return (
    //     // <Container className="component-job-list">
    //     <Row className="show-grid job-row">
    //         {loading && <LoadingSpinner />}
    //         {error && <h2>Something went wrong Try Refreshing.</h2>}
    //         {!loading && jobs.map((job, i) => (
    //             <Col md={6} lg={3} xl={3} className="job-col" key={i}>
    //                 <JobCard {...job} key={i} />
    //             </Col>
    //         ))}
    //     </Row>
    //     // </Container>
    // );
    return (
        <Container className="component-job-list">
            {loading && <LoadingSpinner />}
            {error && <h2>Something went wrong Try Refreshing.</h2>}
            <div className="col-md-12 col-xs-12 col-xl-12">
                {!loading && jobs.map((job, i) => (
                    <JobCard {...job} key={i} />
                ))}
            </div>
        </Container>
    );
};

export default connector(JobList);
