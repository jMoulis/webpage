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

class ButtonContact extends React.Component {
  handleClick = () => {
    const { displayModalContact } = this.props;
    displayModalContact();
  }
  render() {
    return (
      <button className="contact-mail-link" onClick={this.handleClick}>
        <span className="contact-nav-contact-icon">
          <i className="fa fa-envelope" aria-hidden="true" />
        </span> contact
      </button>
    );
  }
}

ButtonContact.propTypes = {
  displayModalContact: PropTypes.func.isRequired,
};


/*
 * Export Default
 */
export default ButtonContact;
