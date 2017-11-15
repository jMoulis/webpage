/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import ButtonContact from 'src/containers/GlobalComponents/ButtonContact';

/*
 * Code
 */

const Contact = () => (
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
    <ButtonContact />
  </nav>
);


/*
 * Export Default
 */
export default Contact;
