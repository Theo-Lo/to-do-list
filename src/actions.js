import { ADD_TASK, DELETE_TASK, MARK_TASK_AS_DONE, INIT_TODOS, DELETE_LABEL, ADD_LABEL } from './actionTypes';

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

export const markTaskAsDone = (todo) => {
    return {
        type: MARK_TASK_AS_DONE,
        payload: todo
    };
}

export const initTodos = (todos) => {
    return {
        type: INIT_TODOS,
        payload: todos
    };
}

export const deleteLabel = (todo) => {
    return {
        type: DELETE_LABEL,
        payload: todo
    };
}

export const addLabel = (todo) => {
    return {
        type: ADD_LABEL,
        payload: todo
    };
}