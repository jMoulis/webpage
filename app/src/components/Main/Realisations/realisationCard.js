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

const RealisationCard = ({ data }) => {
  return (
    <div className="realisation-card">
      <span>Logo</span>
      <h4 className="realisation-card-company">{data.company}</h4>
      <p className="realisation-card-location">{data.location}</p>
      <p className="realisation-card-title">{data.title}</p>
      <div>Seperator</div>
      <ul className="realisation-card-functionlity">
        {data.functionalities.map((functionality, index) => (
          <li key={index}>{functionality}</li>
        ))}
      </ul>
      <ul className="realisation-card-techno">
        {data.technos.map((techno, index) => (
          <li key={index}>{techno}</li>
        ))}
      </ul>
    </div>
  )
};

/* Standard propTypes declaration structure
 *
 * Realisations.propTypes = {
 * item: PropTypes.string.isRequired,
 * };
 */


/*
 * Export Default
 */
export default RealisationCard;
