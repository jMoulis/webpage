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
    const { type } = this.props;
    if (type !== 'icon') {
      return (
        <button className="contact-mail-link" onClick={this.handleClick}>
          <span className="contact-nav-contact-icon">
            <i className="fa fa-envelope" aria-hidden="true" />
          </span> contact
        </button>
      );
    }
    return (
      <button className="contact-mail-link-icon" title="Mail me - modal-form" onClick={this.handleClick}>
        <i className="fa fa-envelope-o fa-2x" aria-hidden="true" />
      </button>
    );
  }
}

ButtonContact.propTypes = {
  displayModalContact: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

/*
 * Export Default
 */
export default ButtonContact;
