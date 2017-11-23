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

const RealisationCard = ({ data }) => (
  <div className="realisation-card">
    <span className="realisation-card-logo">
      <i className="fa fa-desktop fa-3x" aria-hidden="true" />
    </span>
    <h3 className="realisation-card-company">{data.company}</h3>
    <span className="realisation-card-location">{data.location}</span>
    <p className="realisation-card-title">{data.title}</p>
    <div className="realisation-decoration shake" />
    <div className="realisation-card-functionality">
      <h4 className="realisation-card-functionality-title">Fonctionalités principales:</h4>
      <ul className="realisation-card-functionality-label">
        {data.functionalities.map((functionality, index) => (
          <li key={index}>{functionality}</li>
        ))}
      </ul>
    </div>
    <h4 className="realisation-card-functionality-title">Technologies utilisées:</h4>
    <ul className="realisation-card-techno">
      {data.technos.map((techno, index) => (
        <li key={index}>{techno}</li>
      ))}
    </ul>
  </div>
);


RealisationCard.propTypes = {
  data: PropTypes.object.isRequired,
};


/*
 * Export Default
 */
export default RealisationCard;
