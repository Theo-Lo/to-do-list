import { ADD_TASK, DELETE_TASK, MARK_TASK_AS_DONE } from './actionTypes';

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    };
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    };
}

export const markTaskAsDone = (id) => {
    return {
        type: MARK_TASK_AS_DONE,
        payload: id
    };
}