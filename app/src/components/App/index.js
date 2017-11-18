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
  console.log('Hello, je vois que le code est important pour toi. Alors aussi improbable que celà puisse paraître, ce site est entière développé en React... Pourquoi? pour l\'instant le site est statique mis à part deux trois petits composant redux... Mais j\'ai deux trois petites idées derrière la tête... A suivre');
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
