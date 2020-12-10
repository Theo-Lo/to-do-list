import api from "./api";

export const getLabelList = () => {
    return api.get("/labels");
}

export const deleteLabel = (id) => {
    return api.delete(`/labels/${id}`);
}

export const addLabel = (label) => {
    return api.post("/labels", label);
}