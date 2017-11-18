/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Form from 'src/components/Form';
import { hideModalContact, changeInput, sendMail } from 'src/store/reducer';

/*
 * Code
 */
// State
const mapStateToProps = (state, name) => ({
  modalContact: state.modalContact,
  value: state[name],
});

// Actions
const mapDispatchToProps = dispatch => ({
  hideModalContact: () => {
    dispatch(hideModalContact());
  },
  changeInput: (value, name) => {
    dispatch(changeInput({ value, name }));
  },
  sendMail: () => {
    dispatch(sendMail());
  },
});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const FormContainer = createContainer(Form);
export default FormContainer;
