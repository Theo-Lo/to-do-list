import { connect } from 'react-redux';
import TodoDoneItem from "../components/TodoDoneItem";


const mapStateToProps = state => ({
    taskList: state.taskList
})

const TodoDoneItemContainer = connect(mapStateToProps)(TodoDoneItem);

export default TodoDoneItemContainer;