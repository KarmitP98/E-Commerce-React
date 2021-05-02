import { createSelector } from "reselect";

const selectUser = state => state.user;

/**
 * Return current user
 */
export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)