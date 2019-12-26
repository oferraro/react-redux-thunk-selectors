import axios from 'axios';
import {
    FETCH_STATUS_IN_PROGRESS, FETCH_STATUS_IN_FINISHED, SET_FETCHED_USERS, CLEAN_USERS, SET_FETCH_USERS_PARAMS
} from "./types";

export const fetchFinished = () => {
    return {
        type: FETCH_STATUS_IN_FINISHED
    };
};

export const fetchInProgress = () => {
    return {
        type: FETCH_STATUS_IN_PROGRESS
    };
};

export const fetchUsersSuccess = (users: any) => {
    return {
        type: SET_FETCHED_USERS,
        payload: users,
    }
};

export const cleanUsers = () => {
    return {
        type: CLEAN_USERS
    }
};

export const setFetchUsersParams = (params: string) => {
    return {
        type: SET_FETCH_USERS_PARAMS,
        payload: params
    }
};

export const fetchUsers = (params: any, dispatch: any) => {
    dispatch(fetchInProgress());
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data;
            dispatch(fetchUsersSuccess(users));
        })
        .catch(error => {
            dispatch(fetchFinished());
        });
};

