import { combineReducers } from 'redux';
import { ADD_TASK, DELETE_TASK, MARK_TASK_AS_DONE, INIT_TODOS, DELETE_LABEL, ADD_LABEL, INIT_LABELS } from './actionTypes';

const taskList = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return state.concat(action.payload);
        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload);
        case MARK_TASK_AS_DONE:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return action.payload;
                }
                return task;
            })
        case INIT_TODOS:
            return action.payload;
        default:
            return state;
    }
};

const labelList = (state = [], action) => {
    switch (action.type) {
        case ADD_LABEL:
            return state.concat(action.payload);
        case DELETE_LABEL:
            return state.filter(label => label.id != action.payload);
        case INIT_LABELS:
            return action.payload;
        default:
            return state;
    }
};


export default combineReducers(
    {
        taskList,
        labelList
    }
)