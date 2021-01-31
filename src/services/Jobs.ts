import axios from "axios";

interface JobsQuery {
    description: string;
    location: string;
    full_time: boolean;
    page: number;
}

export const REQUEST_TIMEOUT = 15000;
const BASE_URL = "/positions.json";
const LIMIT = 50;

// TODO : Implement error handling

export const getJobs = async (query?: JobsQuery) => {
    return await axios.get(
        BASE_URL,
        {
            timeout: REQUEST_TIMEOUT,
            params: query ? { ...query, markdown: true } : {}
        }
    ).then(response => {
        return {
            jobs: response.data,
            loading: false,
            error: false,
            hasNextPage: response.data.length === LIMIT,
        };
    }).catch(() => {
        // throw new Error(error);
        return {
            jobs: [],
            loading: false,
            error: true,
            hasNextPage: false,
        };
    });
};

export const getJob = async (id: string) => {
    const baseUrl = `/positions/${id}.json`;

    return await axios.get(
        baseUrl,
        {
            timeout: REQUEST_TIMEOUT,
            params: {markdown: true },
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
    ).then(response => {
        return {
            job: response.data,
            loading: false,
            error: false,
        };
    }).catch(() => {
        return {
            job: undefined,
            loading: false,
            error: true,
        };
    });
};
