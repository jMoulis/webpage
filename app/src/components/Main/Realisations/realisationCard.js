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
      <span className="realisation-card-logo"><i className="fa fa-desktop" aria-hidden="true"></i></span>
      <h4 className="realisation-card-company">{data.company}</h4>
      <span className="realisation-card-location">{data.location}</span>
      <p className="realisation-card-title">{data.title}</p>
      <div id="realisation-decoration"></div>
      <div className="realisation-card-functionality">
        <span className="realisation-card-functionality-title">Fonctionalités principales:</span>
        <ul className="realisation-card-functionality-label">
          {data.functionalities.map((functionality, index) => (
            <li key={index}>{functionality}</li>
          ))}
        </ul>
      </div>
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
