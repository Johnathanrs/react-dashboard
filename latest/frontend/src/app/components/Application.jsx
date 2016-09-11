import React from 'react';
import $ from 'jquery';
import Panel from './common/panel/Panel.jsx';
import Table from './common/table/Table.jsx';
import TableColumn from './common/table/TableColumn.jsx';
import ViewTypeSelector from './common/viewType/ViewTypeSelector.jsx';
import SimpleTabs from './common/tabs/SimpleTabs.jsx';
import ApplicationOverview from './visualizations/ApplicationOverview.jsx';

import ApplicationSelectionSummary from './applications/ApplicationSelectionSummary.jsx';
import ApplicationCard from './applications/ApplicationCard.jsx';
import ApplicationCardGrid from './applications/ApplicationCardGrid.jsx';
import ApplicationTable from './applications/ApplicationTable.jsx';
import ServiceCard from './applications/ServiceCard.jsx';
import ServiceCardApplications from './applications/ServiceCardApplications.jsx';

import settings from '../app.settings';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'applications',
      currentViewType: 'cards',
      applications: []
    };
  }

  _fetchData() {
    $.get(settings.apiBase + '/app_infos').then((result) => {
      this.setState({applications: result});
    });
  }

  componentDidMount() {
    this._fetchData();
  }

  currentTab() {
    return this.state.currentTab;
  }

  _setCurrentTab(tabValue) {
    this.setState({currentTab: tabValue});
  }

  currentViewType() {
    return this.state.currentViewType;
  }

  _setCurrentViewType(viewType) {
    this.setState({currentViewType: viewType});
  }


  _applications() {
    return this.state.applications || [];
  }

  _services() {
    return this.state.services || [];
  }

  /*
   Custom row for application creation:

   <tr className="add-clone">
   <td colspan="7">
   <form action="#">
   <div className="cols">
   <div className="item">
   <select>
   <option className="label-hide">Select Image</option>
   <option className="label-hide">cassandra-seed</option>
   <option className="label-hide">cassandra-peer</option>
   <option className="label-hide">redis</option>
   <option className="label-hide">hadoop-nn</option>
   <option className="label-hide">oracle-db12</option>
   <option className="label-hide">nginx</option>
   <option className="label-hide">lb-proxy</option>
   <option className="label-hide">web-backend</option>
   <option className="label-hide">evo-rhel</option>
   <option className="label-hide">evo-rhel-secure</option>
   </select>
   </div>
   <div className="item">
   <input type="text" placeholder="Enter name here..."/>
   </div>
   <div className="item">
   <input type="text" placeholder="Enter owner here..."/>
   </div>
   <div className="item">
   <button type="submit" className="btn btn-blue">Create</button>
   <a href="#" className="close"><img src="img/ico_close.png" alt=""/></a>
   </div>
   </div>
   </form>
   </td>
   </tr>
   */

  _renderServiceCards() {
    return <div className="cols-list">
      <ServiceCard />
      <ServiceCardApplications />
      <ServiceCard />
      <ServiceCardApplications />
    </div>;
  }

  _renderServiceRows() {
    return <div className="row-list">
      TODO ServiceTable here
    </div>;
  }

  _renderServices() {
    return <div id="services">
      {
        (() => {
          if (this.currentViewType() === 'cards') {
            return this._renderServiceCards();
          } else if (this.currentViewType() === 'rows') {
            return this._renderServiceRows();
          }
        })()
      }
    </div>;
  }

  /*
   Table row selection:
   <th className="name"><span className="checkbox"><input type="checkbox"></input><label></label></span>Name
   </th>

   <td className="name"><span className="checkbox"><input type="checkbox"></input><label></label></span><a
   href="#">hadoop-nn</a>

   */

  /*
   <td className="deployment">Undeployed <a href="#" className="btn btn-blue">Deploy</a></td>
   */

  _renderApplicationCards() {
    return <div className="cols-list">
      <ApplicationCardGrid items={ this._applications() }/>
    </div>;
  }

  _renderApplicationRows() {
    return <div className="row-list">
      <ApplicationSelectionSummary />
      <ApplicationTable items={ this._applications() }/>
    </div>;
  }

  _renderApplications() {
    return <div id="appls">
      {
        (() => {
          if (this.currentViewType() === 'cards') {
            return this._renderApplicationCards();
          } else if (this.currentViewType() === 'rows') {
            return this._renderApplicationRows();
          }
        })()
      }
    </div>;
  }

  render() {
    return <div>
      <div className="bg-d">
        <div className="container ff">
          <div className="main-title">
            <h2>Applications</h2>
            <ViewTypeSelector currentViewType={ this.currentViewType() }
                              onViewTypeClicked={(viewType) => { this._setCurrentViewType(viewType) }}/>
          </div>

          <Panel title="Application Overview">
            <ApplicationOverview/>
          </Panel>

          <SimpleTabs items={ ['Applications', 'Services'] }
                      onItemClicked={ (tab) => { this._setCurrentTab(tab) } }
                      currentValue={ this.currentTab() }>
            <a href="javascript:void(0)" className="btn btn-grey filter">Filter</a>
            <a href="javascript:void(0)" className="btn btn-add btn-add-app"
               onClick={ () => {this.onAddApplication()} }>Add Application</a>
            <a href="javascript:void(0)" className="btn btn-add btn-add-serv" onClick={ () => {this.onAddService()} }>Add
              Service</a>
          </SimpleTabs>

        </div>
      </div>

      <div className="container ff">
        {
          (() => {
            if (this.currentTab() === 'applications') {
              return this._renderApplications();
            } else if (this.currentTab() === 'services') {
              return this._renderServices();
            }
          })()
        }
      </div>

    </div>;
  }

  onAddApplication() {
    console.log('onAddApplication');
  }

  onAddService() {
    console.log('onAddService');
  }
}

