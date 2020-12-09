import { combineReducers } from 'redux';

const taskList = (state = [], action) => {
    if (action.type === "ADD_TASK") {
        return state.concat(action.payload);
    }
    if (action.type === "DELETE_TASK") {
        return state.filter(task => task.id != action.payload);
    }
    if (action.type === "MARK_TASK_AS_DONE") {
        return state.map(task => {
            if (task.id === action.payload) {
                return { ...task, done: !task.done };
            }
            return task;
        })
    }
    if(action.type=== "INIT_TODOS"){
        return action.payload
    }
    return state;
};


export default combineReducers(
    {
        taskList
    }
)