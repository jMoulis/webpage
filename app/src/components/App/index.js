import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import Form from 'src/containers/Form';
import Alert from 'src/containers/Alert';
import { title } from 'data/data';

const App = ({ modalContact, alert }) => (
  <div id="app">
    <Header title={title} />
    <Main />
    <Footer title={title} />
    {modalContact ? <Form /> : ''}
    {alert ? <Alert /> : ''}
  </div>
);

App.propTypes = {
  modalContact: PropTypes.bool.isRequired,
  alert: PropTypes.bool.isRequired,
};

export default App;
