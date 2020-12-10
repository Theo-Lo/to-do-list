import { connect } from 'react-redux';
import TodoGroup from "../components/TodoGroup";
import { initTodos, initLabels } from "../actions";

const mapStateToProps = state => ({
    taskList: state.taskList
})

const mapDispatchToProps = (dispatch) => ({
    initTodoList: (todos) => {
        dispatch(initTodos(todos));
    },
    initLabelList: (labels) => {
        dispatch(initLabels(labels));
    },
})

const TodoGroupContainer = connect(mapStateToProps, mapDispatchToProps)(TodoGroup);

export default TodoGroupContainer;