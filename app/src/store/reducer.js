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
const DISPLAY_MODAL_CONTACT = 'DISPLAY_MODAL_CONTACT';
const HIDE_MODAL_CONTACT = 'HIDE_MODAL_CONTACT';

/*
 * State
*/
const initialState = {
  modalContact: false,
  realisations
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

/*
 * Export default
*/
export default reducer;
