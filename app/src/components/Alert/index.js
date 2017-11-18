/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */


/*
 * Code
 */

const Alert = ({ hideAlert }) => (
  <div id="alert">
    <div id="alert-wrapper">
      <button className="btn-close-alert" type="button" onClick={hideAlert} title="Cancel - close alert">
        <i className="fa fa-times fa-2x" aria-hidden="true" />
      </button>
      <h1 id="alert-title">Confirmation</h1>
      <p>Je vous remercie pour votre message. Je reviens vers vous dans les plus bref délais</p>
    </div>
  </div>
);

Alert.propTypes = {
  hideAlert: PropTypes.func.isRequired,
};


/*
 * Export Default
 */
export default Alert;
