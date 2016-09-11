import React from 'react';

import Button from './common/button/Button.jsx';
import Panel from './common/panel/Panel.jsx';
import Events from './dashboard/Events.jsx';
import DashboardSummary from './dashboard/DashboardSummary.jsx';
import ApplicationOverview from './visualizations/ApplicationOverview.jsx';
import OverallReliability from './visualizations/OverallReliability.jsx';
import OverallResourceUtilization from './visualizations/OverallResourceUtilization.jsx';

const imageUrls = {
  g: require('../img/g.png'),
  g1: require('../img/g1.png'),
  g2: require('../img/g2.png'),
  g3: require('../img/g3.png'),
  g4: require('../img/g4.png'),
  g5: require('../img/g5.png'),
  circle: require('../img/circle.png')
};

export default class Dashboard extends React.Component {
  render() {
    return <div className="container">

      <div id="content">

        <div className="stats-cols">
          <DashboardSummary />
        </div>

        <Panel title="System Utilization Overview"
          headingAside={ <Button type="grey">More Details</Button> }>
          <img src={ imageUrls.g } alt=""/>
        </Panel>

        <Panel title="Application Overview"
               headingAside={ <Button type="grey">More Details</Button> }>
          <ApplicationOverview />
        </Panel>

        <div className="row">
          <div className="col">

            <Panel title="Highest Overall Utilization"
                   headingAside={ <Button type="grey">Full List</Button> }>
              <OverallResourceUtilization/>
            </Panel>

          </div>
          <div className="col">

            <Panel title="Highest Overall Utilization"
                   headingAside={ <Button type="grey">Full List</Button> }>
              <OverallReliability/>
            </Panel>

          </div>
        </div>

      </div>

      <aside id="sidebar">
        <Events />
      </aside>
    </div>;
  }
}
