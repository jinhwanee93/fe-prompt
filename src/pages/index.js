import React from "react"
import Dashboard from './dashboard/Dashboard';
import Footer from './footer/Footer';
import Header from './header/Header';
import Navigation from './navigation/Navigation';

import {
  GlobalContent,
  GlobalStyle,
  GlobalPosition
} from './index.style';

export default function Index() {
  return(
    <div>
      <GlobalStyle/>
      <GlobalPosition>
        <div>
          <Navigation/>
        </div>
        <GlobalContent>
          <Header/>
          <Dashboard/>
          <Footer/>
        </GlobalContent>
      </GlobalPosition>
    </div>
  )
}
