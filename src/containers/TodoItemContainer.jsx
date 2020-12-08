import {connect} from 'react-redux';
import TodoItem from "../components/TodoItem";
import {deleteTask, markTaskAsDone} from "../actions";


const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => {
            dispatch(deleteTask(id));
        },
        markTaskAsDone: (id) => {
            dispatch(markTaskAsDone(id))
        }
    };
};

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;