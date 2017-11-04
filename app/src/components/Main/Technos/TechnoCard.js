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

const TechnoCard = ({ techno }) => (
  <div className="techno-card">
    <h4 className="techno-card-title">{techno.title}</h4>
    <ul className="techno-card-list">
      {techno.details.map((detail, index) => <li className="techno-card-item" key={index}>{detail}</li>)}
    </ul>
  </div>
);

TechnoCard.propTypes = {
  techno: PropTypes.object.isRequired,
};

/*
 * Export Default
 */
export default TechnoCard;
