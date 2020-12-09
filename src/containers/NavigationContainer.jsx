import { connect } from 'react-redux';
import Navigation from "../components/Navigation";

const mapStateToProps = state => ({
    taskList: state.taskList
})

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;