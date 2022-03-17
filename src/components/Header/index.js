import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';

function Header() {
  return (
    <nav>
      <HeaderLogo />
      <input type="text" />
      <HeaderSearch />
      <HeaderButton />
    </nav>
  )
}

export default Header;