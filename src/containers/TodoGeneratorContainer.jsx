import { connect } from 'react-redux';
import TodoGenerator from "../components/TodoGenerator";
import { addTask } from "../actions";

const mapStateToProps = state => ({
    taskList: state.taskList
})

const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => {
        dispatch(addTask(task));
    },
})

const TodoGeneratorContainer = connect(mapStateToProps, mapDispatchToProps)(TodoGenerator)

export default TodoGeneratorContainer;