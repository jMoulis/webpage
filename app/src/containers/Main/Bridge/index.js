/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Bridge from 'src/components/Main/Bridge';
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
const BridgeContainer = createContainer(Bridge);
export default BridgeContainer;
