import { FETCH_ALL_JOBTYPES } from '../actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_JOBTYPES:
            return [...action.jobTypes];
        default:
            return state;
    }
};