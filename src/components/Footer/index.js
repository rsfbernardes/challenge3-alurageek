import React from 'react';

import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterDevelopedBy from './FooterDevelopedBy';

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <FooterLogo />
        </div>

        <div>
          <FooterLinks />
        </div>

        <div>
          <FooterContact />
        </div>
      </div>

      <div>
        <FooterDevelopedBy />
      </div>
    </footer>
  )
}

export default Footer;