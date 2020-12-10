import { connect } from 'react-redux';
import TodoItem from "../components/TodoItem";
import { deleteTask, markTaskAsDone, addLabel } from "../actions";

const mapStateToProps = state => ({
    labelList: state.labelList
});

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => {
            dispatch(deleteTask(id));
        },
        markTaskAsDone: (todo) => {
            dispatch(markTaskAsDone(todo))
        }
    };
};

const TodoItemContainer = connect(mapStateToProps, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;