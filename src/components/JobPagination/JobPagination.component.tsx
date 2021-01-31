import React from "react";
import { Pagination } from "react-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { UPDATE_CURR_PAGE } from "../../store/actionTypes";
import { State } from "../../store/reducer";
import "./JobPagination.style.css";

const mapState = (state: State) => ({
    page: state.page,
    hasNextPage: state.hasNextPage
});

const mapDispatch = {
    onAdjustPage: (curPage: number) => ({ type: UPDATE_CURR_PAGE, params: { page: curPage } }),
};

const connector = connect(mapState, mapDispatch);
type JobPaginationProps = ConnectedProps<typeof connector>;

const JobPagination = (props: JobPaginationProps) => {
    const { page, hasNextPage } = props;

    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev onClick={() => props.onAdjustPage(-1)} />}
            {page !== 1 && <Pagination.Item>1</Pagination.Item>}
            {page > 2 && <Pagination.Ellipsis />}
            {page > 2 && <Pagination.Item onClick={() => props.onAdjustPage(-1)}>{page - 1}</Pagination.Item>}
            <Pagination.Item active>{page}</Pagination.Item>
            {hasNextPage && <Pagination.Item onClick={() => props.onAdjustPage(1)}>{page + 1}</Pagination.Item>}
            {hasNextPage && <Pagination.Next onClick={() => props.onAdjustPage(1)} />}
        </Pagination>
    );
};

export default connector(JobPagination);
