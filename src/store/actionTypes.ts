export const MAKE_REQUEST = "MAKE_REQUEST";
export const SET_CURR_PAGE = "SET_CURR_PAGE";
export const UPDATE_CURR_PAGE = "UPDATE_CURR_PAGE";
export const UPDATE_HAS_NEXT_PAGE = "UPDATE_HAS_NEXT_PAGE";
export const UPDATE_SEARCH_FILTER = "UPDATE_SEARCH_FILTER";
export const UPDATE_REQUEST_STATUS = "UPDATE_REQUEST_STATUS";
export const MAKE_DETAIL_REQUEST = "MAKE_DETAIL_REQUEST";


export interface SearchParamsProps {
    searchText: string;
    location: string;
    fullTime: boolean;
}
export interface JobRequestProps {
    searchText: string;
    location: string;
    fullTime: boolean;
    page: number;
    loading: boolean;
}
export interface CurPageProps {
    page: number;
}
export interface UpdateRequestProps {
    hasNextPage: boolean;
    loading: boolean;
    error: boolean;
}
export interface DetailRequestProps {
    loading: boolean;
    error: boolean;
}
export interface HaveNextPageProps {
    hasNextPage: boolean;
}

export interface JobProps {
    id: string;
    type: string;
    url: string;
    created_at: string;
    company: string;
    company_url: string;
    location: string;
    title: string;
    description: string;
    how_to_apply: string;
    company_logo: string;
}

export interface JobStateProps {
    searchText: string;
    location: string;
    fullTime: boolean;
    page: number;
    hasNextPage: boolean;
    loading: boolean;
    error: boolean;
}

interface MakeRequestActionProps {
    type: typeof MAKE_REQUEST;
    params: JobRequestProps;
}

interface SetCurrPageActionProps {
    type: typeof SET_CURR_PAGE;
    params: CurPageProps;
}

interface UpdateCurrPageActionProps {
    type: typeof UPDATE_CURR_PAGE;
    params: CurPageProps;
}

interface UpdateHasNextPageActionProps {
    type: typeof UPDATE_HAS_NEXT_PAGE;
    params: HaveNextPageProps;
}

interface UpdateSearchFilterActionProps {
    type: typeof UPDATE_SEARCH_FILTER;
    params: SearchParamsProps;
}

interface UpdateLoadingActionProps {
    type: typeof UPDATE_REQUEST_STATUS;
    params: UpdateRequestProps;
}

interface MakeDetailRequestActionProps {
    type: typeof MAKE_DETAIL_REQUEST;
    params: DetailRequestProps;
}

export type JobActionTypes = MakeRequestActionProps | SetCurrPageActionProps | UpdateCurrPageActionProps | UpdateHasNextPageActionProps | UpdateSearchFilterActionProps | UpdateLoadingActionProps | MakeDetailRequestActionProps;

