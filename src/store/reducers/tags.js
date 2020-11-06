import { FETCH_ALL_TAGS } from '../actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_TAGS:
            return [...action.tags];
        default:
            return state;
    }
};