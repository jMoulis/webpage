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

/*
 * Code
 */

const App = ({ modalContact }) => {
  console.log(modalContact)
  return (
    <div id="app">
      <Header />
      <Main />
      <Footer />
      {modalContact ?
        <Form />
        : ''
      }
    </div>
  );
};


App.propTypes = {
  modalContact: PropTypes.bool.isRequired,
};


/*
 * Export Default
 */
export default App;
