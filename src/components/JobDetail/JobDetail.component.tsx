import React, { useState, useEffect } from "react";
import { getJob } from "../../services/Jobs";
import { JobProps } from "../../store/actionTypes";
import { LoadingSpinner } from "../../ui/LoadingSpinner.component";
import { Container } from "react-bootstrap";
// import { getDomain } from "../../lib/helper";
import "./JobDetail.style.css";

interface JobDetailComponentProps {
    id: string;
}

export const JobDetail = (props: JobDetailComponentProps) => {
    if(!props.id) {
        return null;
    }
    const [job, setJob] = useState<JobProps>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getJob(props.id).then(data => {
            if (data) {
                setJob(JSON.parse(JSON.stringify(data.job)));
                setLoading(data.loading);
                setError(data.error);
            }
        });
    }, []);

    return (
        <main className="main main-job-detail">
            {loading && <LoadingSpinner />}
            {error && <h2>Something went wrong Try Refreshing.</h2>}
            {job ? (
                <>
                    <Container className="job-details-container">
                        <div className="max-width-container">
                            <div className="back-link">
                                <a href="/">
                    &lt;&lt; Back to results
                                </a>
                            </div>
                            <section className="company">
                                <div className="company-logo">
                                    <img src={job.company_logo} alt="company logo" />
                                </div>
                                <div className="company-name-site">
                                    {/* <h2 className="company-name">{job.company}</h2> */}
                                </div>
                            </section>
                            <section className="job-detail">
                                <div className="job-detail-heading">
                                    <a className="btn btn-company-site" href="/">
                                    &lt;&lt; Back to results
                                    </a>
                                </div>
                            </section>
                            <section className="job-detail">
                                <div className="job-detail-heading">
                                    <div className="job-detail-timetype t-light-gray t-body">
                                        <p className="job-detail-time">{new Date(job.created_at).toLocaleDateString()}</p>
                                        <span>&nbsp;</span>
                                        <p className="job-detail-type">{job.type}</p>
                                    </div>
                                    <h1 className="job-detail-title t-h1">{job.title}</h1>
                                    <a href={job.company_url} rel="noreferrer" target="_blank">
                                        <p className="company-name">{job.company}</p>
                                    </a>
                                    <p className="t-location t-violet">{job.location}</p>
                                </div>
                                <div className="job-detail-description">{job.description}</div>
                            </section>
                        </div>
                    </Container>
                </>
            ) : ""}
        </main>
    );
};
