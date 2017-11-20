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
  <article className="techno-card">
    <h3 className="techno-card-title">{techno.title}</h3>
    <ul className="techno-card-list">
      {techno.details.map((detail, index) => <li className="techno-card-item" key={index}>{detail}</li>)}
    </ul>
  </article>
);

TechnoCard.propTypes = {
  techno: PropTypes.object.isRequired,
};

/*
 * Export Default
 */
export default TechnoCard;
