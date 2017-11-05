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

const Form = ({ hideModalContact }) => {
  
  return (
    <div id="contact-form">
      <div id="gradient">
        <div id="contact-form-header">
          <p>&lt; ! - -FULL - - &gt;</p>
          <h3>&lt; contact &gt;</h3>
        </div>
        <form id="contact-form-field">
          <input className="input-form" type="text" placeholder="Nom Prénom*" />
          <input className="input-form" type="text" placeholder="Société*" />
          <input className="input-form" type="text" placeholder="Email*" />
          <input className="input-form" type="text" placeholder="Tel*" />
          <textarea className="textarea-form" placeholder="Message*" />
          <div id="btn-group">
            <button className="btn btn-cancel" type="button" onClick={hideModalContact}>Annuler</button>
            <button className="btn btn-send" type="submit">envoyer le message</button>
          </div>
        </form>
      </div>
    </div>
  )
};

/* Standard propTypes declaration structure
 *
 * Form.propTypes = {
 * item: PropTypes.string.isRequired,
 * };
 */


/*
 * Export Default
 */
export default Form;
