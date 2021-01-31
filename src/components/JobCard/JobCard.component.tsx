import React from "react";
import { Card, Badge } from "react-bootstrap";
import { getDateDiff } from "../../lib/helper";
import { JobProps } from "../../store/actionTypes";
// import { Link } from "react-router-dom";

// export const JobCard = (props: JobProps) => {
//     const detailLink = `detail/${props.id}`;
//     return (
//         <Card className="component-job-tile">
//             <Card.Body>
//                 <Card.Title>{props.title}</Card.Title>
//                 <Link to={detailLink}>
//                     <Card.Subtitle className="mb-2 text-muted">{props.company}</Card.Subtitle>
//                 </Link>
//                 <Card.Text>{props.location}</Card.Text>
//                 <Card.Text><Badge variant="secondary">{props.type}</Badge></Card.Text>
//                 <Card.Link href={detailLink}>
//                     <Button variant="primary">View Detail</Button>
//                 </Card.Link>
//             </Card.Body>
//             <Card.Footer className="text-muted">Posted {getDateDiff(props.created_at)}</Card.Footer>
//         </Card>
//     );
// };

export const JobCard = (props: JobProps) => {
    const detailLink = `detail/${props.id}`;
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Link href={detailLink}>
                            <Card.Title className="card-title-text">
                                {props.title} - <span className="text-muted font-weight-light">{props.company}</span>
                            </Card.Title>
                        </Card.Link>
                        <Card.Subtitle className="text-muted mb-2">
                            Posted {getDateDiff(props.created_at)}
                        </Card.Subtitle>
                        <Badge variant="secondary" className="mr-2">{props.type}</Badge>
                        <Badge variant="secondary">{props.location}</Badge>
                    </div>
                    <Card.Link href={detailLink}>
                        <img  className="d-none d-md-block" height="50" alt={props.company} src={props.company_logo} />
                    </Card.Link>
                </div>
            </Card.Body>
        </Card>
    );
};
