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

class Contact extends React.Component {
  handleClick = () => {
    const { displayModalContact } = this.props;
    displayModalContact();
    console.log('click')
  }
  render() {
    return (
      <nav id="contact-nav">
        <ul id="contact-nav-info">
          <li id="contact-nav-info-item-star" className="contact-nav-info-item">
            <i className="fa fa-star-o" aria-hidden="true" />
          </li>
          <li id="contact-nav-info-item-name" className="contact-nav-info-item">Julien Moulis</li>
          <li id="contact-nav-info-item-jobTitle" className="contact-nav-info-item">Développeur Web</li>
          <li id="contact-nav-info-item-location" className="contact-nav-info-item">région de Genève</li>
          <li id="contact-nav-info-item-phoneNumber" className="contact-nav-info-item">+33 6 43 39 07 14</li>
        </ul>
        <button id="contact-nav-contact" className="contact-mail-link" onClick={this.handleClick}>contact</button>
      </nav>
    );
  }
}

/* Standard propTypes declaration structure
 *
 * Contact.propTypes = {
 * item: PropTypes.string.isRequired,
 * };
 */


/*
 * Export Default
 */
export default Contact;
