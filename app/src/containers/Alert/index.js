/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Alert from 'src/components/Alert';
import { displayAlert, hideAlert } from 'src/store/reducer';

/*
 * Code
 */
// State
const mapStateToProps = state => ({

});

// Actions
const mapDispatchToProps = dispatch => ({
  displayAlert: () => {
    dispatch(displayAlert());
  },
  hideAlert: () => {
    dispatch(hideAlert());
  },
});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AlertContainer = createContainer(Alert);
export default AlertContainer;
