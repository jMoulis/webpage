/*
 * Npm import
*/
import { createStore, applyMiddleware, compose } from 'redux';

/*
 * Local Import
*/
import reducer from './reducer';
import ajax from './middleware/ajax';

/*
 * Code
*/
// Redux DevTools extension
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}
// Enhancer ajax
const ajaxEnhancer = applyMiddleware(ajax);
const enhancers = compose(
  ajaxEnhancer,
  ...devTools,
);
const store = createStore(reducer, enhancers);

/*
 * Export default
*/
export default store;
