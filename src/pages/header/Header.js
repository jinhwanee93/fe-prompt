import React from 'react';
import placeholder_profile from '../../../static/assets/profile_placeholder.jpeg';

import {
  HeaderContainer,
  HeaderSearch,
  HeaderProfile
} from './Header.style';

export default function Header() {
  return(
    <div>
      <HeaderContainer>
        <HeaderSearch placeholder="Search..."/>
        <HeaderProfile style={{ backgroundImage: `url(${placeholder_profile})`}}/>
      </HeaderContainer>
    </div>
  )
}
