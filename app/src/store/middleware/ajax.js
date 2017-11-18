/*
 * Npm import
 */
import axios from 'axios';

/*
 * Local import
 */
import { SEND_MAIL } from 'src/store/reducer';

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
        firstname, company, email, tel, comment,
      } = store.getState();

      const formData = {
        firstname,
        company,
        email,
        tel,
        comment,
      };
      axios({
        method: 'post',
        data: formData,
        url: 'http://localhost:8000/api/contact',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      })
        .then(({ data }) => {
          console.log(data);
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
