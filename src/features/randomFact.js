import { createAction, createReducer } from "@reduxjs/toolkit";


const isFetching = createAction('is fetching');
const success = createAction('success');
const failure = createAction('failure');

const actions = { isFetching, success, failure };

const STATUS = {
    NORMAL : 'normal',
    FETCHING : 'is fetching',
    SUCCESS : 'success',
    FAILURE : 'failure'
};

const initialState = {
    status : STATUS.NORMAL,
    fact : null
};

const reducer = createReducer(initialState, builder => {
    builder
        .addCase(isFetching, (state, action) => ({
            ...state,
            status : STATUS.FETCHING
        }))
        .addCase(success, (state, action) => ({
            fact : action.payload,
            status : STATUS.SUCCESS
        }))
        .addCase(failure, (state, action) => ({
            status : STATUS.FAILURE,
            fact : null
        }))
});

export { reducer, STATUS, actions };