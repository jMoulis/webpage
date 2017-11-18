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
import Form from 'src/containers/Form';
import Alert from 'src/containers/Alert';

/*
 * Code
 */

const App = ({ modalContact, alert }) => (
  <div id="app">
    <Header />
    <Main />
    <Footer />
    {modalContact ?
      <Form />
      : ''
    }
    {alert ?
      <Alert />
      : ''
    }
  </div>
);


App.propTypes = {
  modalContact: PropTypes.bool.isRequired,
  alert: PropTypes.bool.isRequired,
};


/*
 * Export Default
 */
export default App;
