import api from "./api";

export const getTodoList = () => {
    return api.get("/todos");
}

export const addNewTodo = (text) => {
    return api.post("/todos", { text: text, done: false, labelIdList: [] });
}

export const deleteTodo = (id) => {
    return api.delete(`/todos/${id}`);
}

export const updateTodoLabel = (id, todo) => {
    return api.put(`/todos/${id}`, todo);
}