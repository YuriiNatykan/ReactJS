//селектор, ф-я принимает стейт, достает что ему нужно и возвращает его в бизнес
import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
}
//ресилектор - проверяет измилились ли данные с селекторов и только при изменении обновляет стейт
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}