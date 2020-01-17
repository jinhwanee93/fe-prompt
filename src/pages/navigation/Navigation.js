import React from 'react'

import {
  NavigationActive,
  NavigationButton,
  NavigationButtonContainer,
  NavigationContainer,
  NavigationHeader
} from './Navigation.style';

export default function Navigation() {
  return(
    <div>
      <NavigationContainer>
        <NavigationHeader/>

        <NavigationButtonContainer>
          <NavigationButton>
            <div>01</div>
            <p>Calendar</p>
          </NavigationButton>
          <NavigationButton>
            <div>02</div>
            <p>Documentation</p>
          </NavigationButton>
          <NavigationButton className="active">
            <div>03</div>
            <p>Dashboard</p>
            <NavigationActive/>
          </NavigationButton>
        </NavigationButtonContainer>

        <NavigationButtonContainer>
          <NavigationButton>
            <div>01</div>
            <p>Admin Plugins</p>
          </NavigationButton>
          <NavigationButton>
            <div>02</div>
            <p>Admin Forms</p>
          </NavigationButton>
          <NavigationButton>
            <div>03</div>
            <p>Admin Layouts</p>
          </NavigationButton>
        </NavigationButtonContainer>

        <NavigationButtonContainer>
          <NavigationButton>
            <div>01</div>
            <p>Information Panels</p>
          </NavigationButton>
          <NavigationButton>
            <div>02</div>
            <p>Ecommerce</p>
          </NavigationButton>
        </NavigationButtonContainer>

        <NavigationButtonContainer>
          <NavigationButton>
            <div>01</div>
            <p>UI Elements</p>
          </NavigationButton>
          <NavigationButton>
            <div>02</div>
            <p>Form Elements</p>
          </NavigationButton>
          <NavigationButton>
            <div>03</div>
            <p>Plugins</p>
          </NavigationButton>
          <NavigationButton>
            <div>04</div>
            <p>Pages</p>
          </NavigationButton>
        </NavigationButtonContainer>

        <NavigationButtonContainer>
          <NavigationButton>
            <div>01</div>
            <p>Executive Meeting</p>
          </NavigationButton>
          <NavigationButton>
            <div>02</div>
            <p>HelpDesk Redesign</p>
          </NavigationButton>
          <NavigationButton>
            <div>03</div>
            <p>Sony Board Meeting</p>
          </NavigationButton>
        </NavigationButtonContainer>
        
      </NavigationContainer>
    </div>
  )
}
