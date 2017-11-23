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

class Form extends React.Component {
  static propTypes = {
    changeInput: PropTypes.func.isRequired,
    sendMail: PropTypes.func.isRequired,
  }
  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.props.changeInput(value, name);
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.sendMail();
  }
  render() {
    const { hideModalContact } = this.props;
    return (
      <div id="contact-form-wrapper">
        <div id="contact-form-modal">
          <div id="contact-form-header">
            <div id="contact-form-header-title">
              <h4>&lt; ! - -FULL - - &gt;</h4>
              <h3>&lt; contact &gt;</h3>
            </div>
            <button className="btn-close-modal" type="button" onClick={hideModalContact} title="Cancel - close the modal">
              <i className="fa fa-times fa-2x" aria-hidden="true" />
            </button>
          </div>
          <form id="contact-form" method="post" onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} className="input-form" type="text" placeholder="Prénom *" id="firstname" name="firstname" required />
            <input onChange={this.handleChange} className="input-form" type="text" placeholder="Nom *" id="lastname" name="lastname" required />
            <input onChange={this.handleChange} className="input-form" type="text" placeholder="Société" id="company" name="company" />
            <input onChange={this.handleChange} className="input-form" type="email" placeholder="Email *" id="email" name="email" required />
            <input onChange={this.handleChange} className="input-form" type="text" placeholder="Tel" id="phone" name="phone" />
            <textarea onChange={this.handleChange} className="textarea-form" placeholder="Message*" id="message" name="message" required />
            <div id="btn-group">
              <button className="btn btn-cancel" type="button" onClick={hideModalContact} title="Cancel - close the modal">Annuler</button>
              <button className="btn btn-send" type="submit" title="Envoyer le message">envoyer</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


Form.propTypes = {
  hideModalContact: PropTypes.func.isRequired,
};


/*
 * Export Default
 */
export default Form;
