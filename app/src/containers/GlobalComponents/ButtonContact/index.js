/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import ButtonContact from 'src/components/GlobalComponents/ButtonContact';
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
const ButtonContactContainer = createContainer(ButtonContact);
export default ButtonContactContainer;
