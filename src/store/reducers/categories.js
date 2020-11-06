import { FETCH_ALL_CATEGORIES } from '../actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_CATEGORIES:
            return [...action.categories];
        default:
            return state;
    }
};