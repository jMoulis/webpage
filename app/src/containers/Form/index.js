/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Form from 'src/components/Form';
import { hideModalContact } from 'src/store/reducer';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  modalContact: state.modalContact,
});

// Actions
const mapDispatchToProps = dispatch => ({
  hideModalContact: () => {
    dispatch(hideModalContact());
  },
});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const FormContainer = createContainer(Form);
export default FormContainer;
