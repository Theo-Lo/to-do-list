import { ADD_TASK, DELETE_TASK, MARK_TASK_AS_DONE, INIT_TODOS } from './actionTypes';

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