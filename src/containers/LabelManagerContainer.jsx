import { connect } from 'react-redux';
import LabelManager from '../components/LabelManager.jsx';
import { initLabels } from '../actions';

const mapStateToProps = state => ({
    taskList: state.taskList,
    labelList: state.labelList
});

const mapDispatchToProps = dispatch => ({
    initLabelList: (labels) => {
        dispatch(initLabels(labels))
    }
});

const LabelManagerContainer = connect(mapStateToProps, mapDispatchToProps)(LabelManager);
export default LabelManagerContainer;