import React from "react";
import { Heading } from "../../ui/Heading.component";
import JobList from "../JobList/JobList.component";
import JobPagination from "../JobPagination/JobPagination.component";
import JobFilter from "../JobFilter/JobFilter.component";
import { JobDetail } from "../JobDetail/JobDetail.component";
import { Container } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <Container className="my-4 main-component">
            <Heading />
            <main className="main-container">
                <Router>
                    <Switch>
                        <Route exact path="/" render={() => {
                            return (
                                <>
                                    <JobFilter />
                                    <JobPagination />
                                    <JobList />
                                    <JobPagination />
                                </>
                            );
                        }}>
                        </Route>
                        <Route path="/detail/:id" exact={false} render={props => {
                            return (
                                // eslint-disable-next-line react/prop-types
                                <JobDetail id={props.match.params.id}/>
                            );
                        }}>
                        </Route>
                    </Switch>
                </Router>
            </main>
        </Container>
    );
};

export default App;
