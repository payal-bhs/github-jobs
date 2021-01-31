import { 
    JobStateProps,
    JobActionTypes,
    MAKE_REQUEST,
    SET_CURR_PAGE,
    UPDATE_CURR_PAGE,
    UPDATE_HAS_NEXT_PAGE,
    UPDATE_SEARCH_FILTER,
    UPDATE_REQUEST_STATUS,
    MAKE_DETAIL_REQUEST
} from "./actionTypes";

const initialState: JobStateProps = {
    searchText: "",
    location: "",
    fullTime: false,
    page: 1,
    hasNextPage: true,
    loading: true,
    error: false,
};

const reducer = (state = initialState, action: JobActionTypes): JobStateProps => {
    switch (action.type) {
    case MAKE_REQUEST:
        return {
            ...state,
            ...action.params
        };
    case SET_CURR_PAGE:
        return {
            ...state,
            page: action.params.page
        };
    case UPDATE_CURR_PAGE:
        return {
            ...state,
            page: state.page + action.params.page
        };
    case UPDATE_HAS_NEXT_PAGE:
        return {
            ...state,
            hasNextPage: action.params.hasNextPage
        };
    case UPDATE_SEARCH_FILTER:
        return {
            ...state,
            ...action.params
        };
    case UPDATE_REQUEST_STATUS:
        return {
            ...state,
            ...action.params
        };
    case MAKE_DETAIL_REQUEST:
        return {
            ...state,
            ...action.params
        };
    default:
        return state;
    }
};

export default reducer;
export type State = ReturnType<typeof reducer>
