import { FETCH_STATUS_IN_PROGRESS, FETCH_STATUS_IN_FINISHED, SET_FETCHED_USERS, CLEAN_USERS } from './types';

const initialState = {
    users: [],
    name: '',
    email: '',
    fetching: false,
    token: ''
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
        default:
            return state;
    }
}

