/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Contact from 'src/components/Header/Contact';
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
const ContactContainer = createContainer(Contact);
export default ContactContainer;
