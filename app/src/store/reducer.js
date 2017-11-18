/*
 * Npm Import
 */

/*
 * Local Import
 */
 import { realisations }  from 'data/data';

/*
 * Types
 */
export const DISPLAY_MODAL_CONTACT = 'DISPLAY_MODAL_CONTACT';
export const HIDE_MODAL_CONTACT = 'HIDE_MODAL_CONTACT';
export const SEND_MAIL = 'SEND_MAIL';
export const SEND_MAIL_SUCCESS = 'SEND_MAIL_SUCCESS';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const DISPLAY_ALERT = 'DISPLAY_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';
/*
 * State
*/
const initialState = {
  modalContact: false,
  realisations,
  alert: false,
};

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_MODAL_CONTACT: {
      return {
        ...state,
        modalContact: true,
      };
    }
    case HIDE_MODAL_CONTACT: {
      return {
        ...state,
        modalContact: false,
      };
    }
    case SEND_MAIL: {
      return {
        ...state,
      };
    }
    case SEND_MAIL_SUCCESS: {
      return {
        ...state,
        modalContact: false,
        alert: true,
      };
    }
    case DISPLAY_ALERT: {
      return {
        ...state,
        alert: true,
      };
    }
    case HIDE_ALERT: {
      return {
        ...state,
        alert: false,
      };
    }
    case INPUT_CHANGE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    default:
      return state;
  }
};

/*
 *Action creators
 */
export const displayModalContact = () => ({
  type: DISPLAY_MODAL_CONTACT,
});
export const hideModalContact = () => ({
  type: HIDE_MODAL_CONTACT,
});
export const changeInput = ({ name, value }) => ({
  type: INPUT_CHANGE,
  value,
  name,
});
export const sendMail = () => ({
  type: SEND_MAIL,
});
export const sendMailSuccess = () => ({
  type: SEND_MAIL_SUCCESS,
});
export const displayAlert = () => ({
  type: DISPLAY_ALERT,
});
export const hideAlert = () => ({
  type: HIDE_ALERT,
});
/*
 * Export default
*/
export default reducer;
