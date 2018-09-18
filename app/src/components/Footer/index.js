/*
 * Npm import
 */
import React from 'react';

/*
 * Local import
 */
import FootFooter from './FootFooter';
import LogoFooter from './LogoFooter';
import HeaderFooter from './HeaderFooter';

/*
 * Code
 */

const Footer = ({ title }) => (
  <footer id="footer">
    <HeaderFooter title={title} />
    <LogoFooter />
    <FootFooter />
  </footer>
);

/*
 * Export Default
 */
export default Footer;
