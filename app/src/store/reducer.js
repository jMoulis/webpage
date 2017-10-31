/*
 * Npm Import
 */

/*
 * Local Import
 */

/*
 * Types
 */
const HELLO_WORLD = 'HELLO_WORLD';

/*
 * State
*/
const initialState = {
  value: 'default',
};

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
		case HELLO_WORLD:
			console.log('Hello World');

    default:
      return state;
  }
};

/*
 *Action creators
 */
export const defaultAction = () => ({
	type: HELLO_WORLD,
})

/*
 * Export default
*/
export default reducer;

