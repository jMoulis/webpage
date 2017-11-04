/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

/*
 * Code
 */

const App = () => (
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

/* Standard propTypes declaration structure
 *
 * App.propTypes = {
 * item: PropTypes.string.isRequired,
 * };
 */


/*
 * Export Default
 */
export default App;
