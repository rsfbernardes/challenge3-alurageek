import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';

function Header() {
  return (
    <nav>
      <HeaderLogo />
      <HeaderButton />
      <HeaderSearch />
    </nav>
  )
}

export default Header;