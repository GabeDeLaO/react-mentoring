import { FILTER, IS_LOADING } from './actionTypes';

// Action Creator Methods (fancy name for redux action functions).
export const doFilter = (filterTerm) => ({
  type: FILTER,
  payload: {
    filterTerm
  }
})