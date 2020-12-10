import { connect } from 'react-redux';
import LabelList from '../components/LabelList.jsx';
import { deleteLabel } from '../actions';

const mapStateToProps = state => ({
    taskList: state.taskList,
    labelList: state.labelList
});

const mapDispatchToProps = dispatch => ({
    removeLabel: (label) => {
        dispatch(deleteLabel(label))
    }
});

const LabelListContainer = connect(mapStateToProps, mapDispatchToProps)(LabelList);
export default LabelListContainer;