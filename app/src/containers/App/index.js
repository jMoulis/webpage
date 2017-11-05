/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import App from 'src/components/App';
import { displayModalContact } from 'src/store/reducer';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  modalContact: state.modalContact,
});

// Actions
const mapDispatchToProps = dispatch => ({
  displayModalContact: () => {
    dispatch(displayModalContact());
  },
});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(App);
export default AppContainer;
