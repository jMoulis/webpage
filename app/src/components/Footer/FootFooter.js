/*
 * Npm import
 */
import React from 'react';

/*
 * Local import
 */
import LogoContact from 'src/components/GlobalComponents/LogoContact';

/*
 * Code
 */

const FootFooter = () => (
  <section id="footer-footer">
    <div id="credits">
      <h5 className="title-footer">Crédits</h5>
      <ul id="credits-list">
        <li>
          Graphiste -{' '}
          <a
            href="http://goudolmuriel.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Muriel Goudol Directrice artistique - website - new page"
            hrefLang="fr"
          >
            Muriel Goudol
          </a>
        </li>
        <li>Intégration - Moi (Il faut bien que je travaille)</li>
        <li>
          Code Source-
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jMoulis/webpage"
            title="Project GitHub - new page"
          >
            Repo GitHub
          </a>
        </li>
      </ul>
    </div>
    <a
      href="#app"
      className="scroll-up a-reset"
      rel="noopener noreferrer"
      title="Go top page"
    >
      <i className="fa fa-chevron-circle-up fa-3x" aria-hidden="true" />
    </a>
    <LogoContact />
  </section>
);

/*
 * Export Default
 */
export default FootFooter;
