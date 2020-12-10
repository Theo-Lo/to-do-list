import { connect } from 'react-redux';
import LabelAdder from '../components/LabelAdder.jsx';
import { addLabel } from '../actions';

const mapStateToProps = state => ({
    labelList: state.labelList
});

const mapDispatchToProps = dispatch => ({
    addLabel: (label) => {
        dispatch(addLabel(label))
    }
});

const LabelAdderContainer = connect(mapStateToProps, mapDispatchToProps)(LabelAdder);
export default LabelAdderContainer;