import axios from 'axios';
import { FETCH_STATUS_IN_PROGRESS, FETCH_STATUS_IN_FINISHED, SET_FETCHED_USERS, CLEAN_USERS } from "./types";

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

export const fetchUsersSuccess = (users) => {
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

export const fetchUsers = (dispatch) => {
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

