/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import LogoContact from 'src/components/GlobalComponents/LogoContact';

/*
 * Code
 */

const Footer = () => (
  <div id="footer">
    <div id="footer-text">
      <p>
        C&apos;est ce parcours atypique qui m&apos;a enrichi de compétences,
        transversales, et qui fait de moi aujourd&apos;hui
        quelqu&apos;un de <em>rigoureux</em> ayant une <em>approche globale</em> des choses
      </p>
      <p>
        Je reviens aujourd&apos;hui à mes premiers amours en consacrant mon temps de travail
        à une réelle passion.
      </p>

      <div className="footer-decoration" />
      <h1>Julien Moulis</h1>
      <h2>Développeur Web</h2>
      <div className="footer-decoration" />
    </div>
    <div id="logo-wrapper">
      <ul>
        <li className="logo-list-item">
          <a target="_blank" rel="noopener noreferrer" href="https://certificates.opquast.com/certificate/JHWF2D/" title="Certificat OpQuast - new page">
            <img className="footer-logo" alt="opQuast certification logo" src="/img/opquastBadge.png" />
          </a>
        </li>
        <li className="logo-list-item">
          <a target="_blank" rel="noopener noreferrer" href="http://symfony.com/" title="Symfony website - new page" hrefLang="en">
            <img className="footer-logo" alt="Symfony" src="/img/symfony.png" />
          </a>
        </li>
        <li className="logo-list-item">
          <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/" title="React website - new page" hrefLang="en">
            <img className="footer-logo" alt="React" src="/img/react.png" />
          </a>
        </li>
        <li className="logo-list-item">
          <a target="_blank" rel="noopener noreferrer" href="https://oclock.io/" title="Ecole O'Clock - website - new page" hrefLang="fr">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="-14.691 -14.656 188 188">
              <path fill="#0ac3a7" d="M144.73 51.788c-12.773 0-23.13-10.356-23.13-23.13 0-5.044 1.62-9.707 4.36-13.508C112.88 5.61 96.74-.013 79.2-.013 35.11-.013.062 35.477.062 79.564.062 123.65 35.11 158.7 79.2 158.7c44.086 0 79.355-35.05 79.355-79.136 0-10.367-1.95-20.258-5.507-29.324-2.582.996-5.384 1.548-8.318 1.548zM79.2 123.43c-24.03 0-43.868-19.84-43.868-43.865 0-24.25 19.84-44.308 43.867-44.308 24.245 0 44.084 20.06 44.084 44.308 0 24.026-19.84 43.867-44.088 43.867l.004-.002z"/>
              <path fill="#0ac3a7" d="M144.692.168c-15.828 0-28.41 12.74-28.41 28.568 0 15.828 12.582 28.41 28.41 28.41s28.49-12.582 28.49-28.41S160.52.168 144.692.168zm-.014 49.575c-11.49 0-20.98-9.488-20.98-20.98 0-11.595 9.49-21.188 20.98-21.188 11.597 0 21.085 9.593 21.085 21.19 0 11.49-9.488 20.978-21.085 20.978z"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <div id="credits">
      Merci à la totale
    </div>
    <LogoContact />
  </div>
);

/* Standard propTypes declaration structure
 *
 * Footer.propTypes = {
 * item: PropTypes.string.isRequired,
 * };
 */


/*
 * Export Default
 */
export default Footer;
