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
export const INPUT_CHANGE = 'INPUT_CHANGE';
/*
 * State
*/
const initialState = {
  modalContact: false,
  realisations,
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
/*
 * Export default
*/
export default reducer;
