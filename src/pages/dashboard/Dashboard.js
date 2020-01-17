import React from 'react';
import graph01 from '../../../static/assets/graph_01.png';
import graph02 from '../../../static/assets/graph_02.png';

import {
    DashboardBox,
    DashboardContainer,
    DashboardButton,
    DashboardGraph,
    DashboardGraph02Info,
    DashboardGraphFilter,
    DashboardGraphContainer,
    DashboardGraphInner,
    DashboardInt,
    DashboardLabel,
    DashboardLabelContainer,
    DashboardNumberContainer,
    DashboardSub,
    DashboardSubLabel,
    DashboardTitle,
    DashboardTitleContainer,
} from './Dashboard.style';

export default function Dashboard() {
  return(
    <div>
      <DashboardContainer>
      <DashboardTitleContainer>
        <div>
          <DashboardTitle>Dashboard</DashboardTitle>
          <DashboardSub>dashboard & statistics</DashboardSub>
        </div>
        <DashboardButton>17 January 2016 - 15 February 2016</DashboardButton>
      </DashboardTitleContainer>

        <DashboardBox>
          <DashboardLabelContainer>
            <DashboardLabel>Totals</DashboardLabel>
            <DashboardSubLabel>Last Week</DashboardSubLabel>
          </DashboardLabelContainer>

          <DashboardNumberContainer>
            <DashboardInt>
              <h2>597</h2>
              <p>New Feedbacks</p>
            </DashboardInt>
            <DashboardInt>
              <h2>16.6M$</h2>
              <p>Total Profit</p>
            </DashboardInt>
            <DashboardInt>
              <h2>7.5K</h2>
              <p>New Orders</p>
            </DashboardInt>
            <DashboardInt>
              <h2>+48%</h2>
              <p>Brand Popularity</p>
            </DashboardInt>
          </DashboardNumberContainer>

          <DashboardGraphContainer>
              <DashboardGraphInner>
              <DashboardLabelContainer className="graph-label">
                <div>
                  <DashboardLabel>Site visits</DashboardLabel>
                  <DashboardSubLabel>Weekly Stats</DashboardSubLabel>
                </div>
                <div>
                  <DashboardGraphFilter className="active">New</DashboardGraphFilter>
                  <DashboardGraphFilter>Returning</DashboardGraphFilter>
                </div>
              </DashboardLabelContainer>
              <DashboardGraph style={{ backgroundImage: `url(${graph01})`}}/>
              </DashboardGraphInner>
              <DashboardGraphInner>
              <DashboardLabelContainer className="graph-label">
                <div>
                  <DashboardLabel>Revenue</DashboardLabel>
                  <DashboardSubLabel>Monthly Stats</DashboardSubLabel>
                </div>
                <div>
                  <DashboardGraphFilter className="filter">Filter Range</DashboardGraphFilter>
                </div>
              </DashboardLabelContainer>
              <DashboardGraph className="graph-02" style={{ backgroundImage: `url(${graph02})`}}/>
              <DashboardGraph02Info>
                <div>
                  <p>Revenue:</p>
                  <p>$13.274</p>
                </div>
                <div>
                  <p>Tax:</p>
                  <p>$19.962</p>
                </div>
                <div>
                  <p>Shipment:</p>
                  <p>$1.976</p>
                </div>
                <div>
                  <p>Order:</p>
                  <p>529 479</p>
                </div>
              </DashboardGraph02Info>
              </DashboardGraphInner>

          </DashboardGraphContainer>
        </DashboardBox>

      </DashboardContainer>
    </div>
  )
}
