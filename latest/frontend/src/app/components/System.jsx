import React from 'react';

import Panel from './common/panel/Panel.jsx';
import CpuUtilization from './visualizations/CpuUtilization.jsx';
import MemoryUtilization from './visualizations/MemoryUtilization.jsx';
import Network from './visualizations/Network.jsx';
import Disk from './visualizations/Disk.jsx';
import TrendingUtilization from './visualizations/TrendingUtilization.jsx';

export default class System extends React.Component {
  render() {
    return <div>
      <div className="bg-d v2">
        <div className="container ff">

          <div className="tabs">
            <ul>
              <li className="current"><a href="#top">Top 5</a></li>
              <li><a href="#bot">Bottom 5</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container ff v6">
        <div className="tab-content active" id="top">
          <div className="row row-4">
            <div className="col">

              <Panel title="CPU Utilization">
                <CpuUtilization/>
              </Panel>

            </div>
            <div className="col">

              <Panel title="Memory Utilization">
                <MemoryUtilization/>
              </Panel>

            </div>
            <div className="col">

              <Panel title="Network">
                <Network />
              </Panel>

            </div>
            <div className="col">

              <Panel title="Disk">
                <Disk />
              </Panel>

            </div>
          </div>
        </div>

        <div className="tab-content" id="bot">
          <Panel title="Tab2"></Panel>
        </div>

        <Panel title="Trending Utilization">
          <TrendingUtilization/>
        </Panel>

        <div id="FilterableContainerListingBoxcontainer">
        </div>
      </div>
    </div>;
  }
}
