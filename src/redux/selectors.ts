import { createSelector } from 'reselect';

const getUsers = (state: any) => state.userReducer.users;

export const userNamesSelector = createSelector(getUsers, (getUsers: any) => {
    const allUsers: any[] = [];
    getUsers.forEach((user: any) => {
        if (user.id > 5) {
            allUsers.push(user);
        }
    });
    return allUsers;
});

