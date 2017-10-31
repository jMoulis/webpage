/*
 * Npm import
*/
import { createStore } from 'redux';

/*
 * Local Import
*/
import reducer from './reducer';

/*
 * Code
*/
// DevTools
let devTools;
if (window.devToolsExtension) {
  devTools = window.devToolsExtension();
}
const store = createStore(reducer, devTools);

/*
 * Export default
*/
export default store;

