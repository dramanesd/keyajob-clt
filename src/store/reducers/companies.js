import { FETCH_ALL_COMPANIES } from '../actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_COMPANIES:
            return [...action.companies];
        default:
            return state;
    }
};