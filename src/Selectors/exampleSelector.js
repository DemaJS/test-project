/*  exampleText: state.examplePage.exampleText,
    exampleValue: state.examplePage.exampleValue,
    exampleProfile:state.examplePage.exampleProfile,
    pageSize:state.examplePage.pageSize,
    totalCount:state.examplePage.totalCount,
    users:state.examplePage.users  */

import {createSelector} from "reselect";

export const getExampleText = (state) => {
    return state.examplePage.exampleText
}
export const getExampleProfile = (state) => {
    return state.examplePage.exampleProfile
}
export const getPageSize = (state) => {
    return state.examplePage.pageSize
}
export const getTotalCount = (state) => {
    return state.examplePage.totalCount
}
export const getUsersSelector = (state) => {
    return state.examplePage.users
}
export const superUserSelector = createSelector(getUsersSelector, (users) => {
    return users
})