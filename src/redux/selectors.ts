import { createSelector } from 'reselect';

const getUsers = (state: any) => state.userReducer.users;
const usersParam = (state: any) => state.userReducer.fetchUserParams;

export const userNamesSelector = createSelector([getUsers, usersParam], (getUsers: any, usersParam: string) => {
    const allUsers: any[] = [];

    getUsers.forEach((user: any) => {
        if (!(user.id <= 5 && usersParam === 'filterIdge5')) {
            allUsers.push(user);
        }
    });
    return allUsers;
});

