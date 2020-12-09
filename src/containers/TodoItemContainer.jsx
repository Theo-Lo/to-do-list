import { connect } from 'react-redux';
import TodoItem from "../components/TodoItem";
import { deleteTask, markTaskAsDone, addLabel } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => {
            dispatch(deleteTask(id));
        },
        markTaskAsDone: (todo) => {
            dispatch(markTaskAsDone(todo))
        },
        addLabel: (todo) => {
            dispatch(addLabel(todo))
        }
    };
};

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;