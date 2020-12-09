import { connect } from 'react-redux';
import TodoGroup from "../components/TodoGroup";
import { initTodos } from "../actions";

const mapStateToProps = state => ({
    taskList: state.taskList
})

const mapDispatchToProps = (dispatch) => ({
    initTodoList: (todos) => {
        dispatch(initTodos(todos));
    },
})

const TodoGroupContainer = connect(mapStateToProps, mapDispatchToProps)(TodoGroup);

export default TodoGroupContainer;