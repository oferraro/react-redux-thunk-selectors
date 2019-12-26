import {
    FETCH_STATUS_IN_PROGRESS,
    FETCH_STATUS_IN_FINISHED,
    SET_FETCHED_USERS,
    CLEAN_USERS,
    SET_FETCH_USERS_PARAMS
} from './types';

const initialState = {
    users: [],
    name: '',
    email: '',
    fetching: false,
    token: '',
    fetchUserParams: ''
};

export function userReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_STATUS_IN_PROGRESS:
            return { ...state, fetching: true };
        case FETCH_STATUS_IN_FINISHED:
            return { ...state, fetching: false };
        case SET_FETCHED_USERS:
            return { ...state, users: action.payload };
        case CLEAN_USERS:
            return { ...state, users: [] };
        case SET_FETCH_USERS_PARAMS:
            return { ...state, fetchUserParams: action.payload }
        default:
            return state;
    }
}

