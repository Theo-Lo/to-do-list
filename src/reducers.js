import { combineReducers } from 'redux';

const taskList = (state = [], action) => {
    if (action.type === "ADD_TASK") {
        return [...state, action.payload];
    }
    if (action.type === "DELETE_TASK") {
        return state;
    }
    if (action.type === "MARK_TASK_AS_DONE") {
        return state;
    }
    return state;
};


export default combineReducers(
    {
        taskList
    }
)