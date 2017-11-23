/*
 * Npm import
 */
import axios from 'axios';

/*
 * Local import
 */
import { SEND_MAIL, sendMailSuccess } from 'src/store/reducer';

/*
 * Code
 */


/*
 * Middleware
 */
export default store => next => (action) => {
  // On écoute les actions qui nous intéressent
  switch (action.type) {
    case SEND_MAIL: {
      const {
        firstname, lastname, company, email, phone, message,
      } = store.getState();

      const formData = {
        firstname,
        lastname,
        company,
        email,
        phone,
        message,
      };
      axios({
        method: 'post',
        data: formData,
        url: '/contact_management/web/api/contacts',
        // url: 'http://localhost:8000/api/contacts',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      })
        .then(() => {
          store.dispatch(sendMailSuccess());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
  }

  // Je passe à mon voisin
  next(action);
};
