import React from 'react';
import _ from 'lodash';
import $ from 'jquery';

import Panel from './common/panel/Panel.jsx';
import Table from './common/table/Table.jsx';
import TableColumn from './common/table/TableColumn.jsx';
import CpuUtilization from './visualizations/CpuUtilization.jsx';
import MemoryUtilization from './visualizations/MemoryUtilization.jsx';
import Network from './visualizations/Network.jsx';
import Disk from './visualizations/Disk.jsx';
import TrendingUtilization from './visualizations/TrendingUtilization.jsx';

import settings from '../app.settings';

export default class System extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      containers: [],
      cpuUtilizationItems: []
    };
  }

  _fetchData() {
    $.get(settings.apiBase + '/container_stats/current').then((result) => {
      this.setState({containers: result});
    });
    $.get(settings.apiBase + '/container_stats/current/top5/cpu').then((result) => {
      this.setState({cpuUtilizationItems: result});
    });
  }

  componentDidMount() {
    this._fetchData();
  }

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

      <Table items={ this.state.containers }>
        <TableColumn title="Container name" classes="name"
                     getter={(item) => (_.isArray(item.Names) ? item.Names[0] : item.Names)}/>
        <TableColumn title="Host" getter="host_dns"/>
        <TableColumn title="Host ring" getter={ () => 'HOST_RING_123' }/>
        <TableColumn title="Owner" getter={ () => 'Jason Richards' }/>
        <TableColumn title="CPU"
                     getter={ (item) => (Math.round((item.cpu_stats[0].cpu_usage[0].total_usage / item.cpu_stats[0].system_cpu_usage) * 100 * 100) / 100)+'%' }/>
        <TableColumn title="Network" getter={ (item) => `${item.network.tx_bytes}b / ${item.network.rx_bytes}b`}/>
        <TableColumn title="Memory" getter={
            (item) => {
              const stat = item.memory_stats[0];
              const memUsage = stat.usage;
              const memLimit = stat.limit;
              return (Math.round((memUsage / memLimit) * 100 * 100) / 100) + '%';
            }
          }/>
        <TableColumn title="Disk" getter={ () => 145}/>

        <div className="container ff v6">
          <div className="tab-content active" id="top">
            <div className="row row-4">
              <div className="col">

                <Panel title="CPU Utilization">
                  <CpuUtilization items={ this.state.cpuUtilizationItems }/>
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


        </Table>
      </div>
    </div>;
  }
}
