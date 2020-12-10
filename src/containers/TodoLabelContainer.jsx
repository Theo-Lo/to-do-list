import { connect } from 'react-redux';
import TodoLabel from "../components/TodoLabel";
import { markTaskAsDone } from "../actions";

const mapStateToProps = state => ({
    taskList: state.taskList
})

const mapDispatchToProps = (dispatch) => {
    return {
        markTaskAsDone: (todo) => {
            dispatch(markTaskAsDone(todo))
        }
    };
};

const TodoLabelContainer = connect(mapStateToProps, mapDispatchToProps)(TodoLabel);

export default TodoLabelContainer;