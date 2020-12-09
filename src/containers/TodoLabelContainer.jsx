import { connect } from 'react-redux';
import TodoLabel from "../components/TodoLabel";
import { deleteLabel } from "../actions";

const mapStateToProps = state => ({
    taskList: state.taskList
})

const mapDispatchToProps = (dispatch) => {
    return {
        removeLabel: (todo) => {
            dispatch(deleteLabel(todo));
        },
    };
};

const TodoLabelContainer = connect(mapStateToProps, mapDispatchToProps)(TodoLabel);

export default TodoLabelContainer;