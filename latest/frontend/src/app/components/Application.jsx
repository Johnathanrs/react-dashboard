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
import ServiceCardGrid from './applications/ServiceCardGrid.jsx';
import ServiceTable from './applications/ServiceTable.jsx';
import ServiceCardApplications from './applications/ServiceCardApplications.jsx';
import ServiceCreationPanel from './applications/ServiceCreationPanel.jsx';




import settings from '../app.settings';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'applications',
      currentViewType: 'cards',
      isServiceCreationInProgress: false,
      applications: [],
      services: []
    };
  }

  _fetchApplications() {
    $.get(settings.apiBase + '/app_infos').then((result) => {
      this.setState({applications: result});
    });
  }

  _fetchServices() {
    $.get(settings.apiBase + '/service_infos/apps').then((result) => {
      this.setState({services: result});
    });
  }

  _fetchData() {
    this._fetchApplications();
    this._fetchServices();
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

  _renderServiceCards() {
    return <div className="cols-list">
      <ServiceCardGrid items={ this._services() }/>
    </div>;
  }

  _renderServiceRows() {
    return <div className="row-list">
      <ServiceTable items={ this._services() }/>
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
   <td className="deployment">Undeployed <a href="#" className="btn btn-blue">Deploy</a></td>
   */

  _renderApplicationCards() {
    return <div className="cols-list">
      <ApplicationCardGrid ref="applicationCardGrid"
                           items={ this._applications() }
                           onAddApplication={ () => { this.onAddApplication() } }
                           onApplicationChange={ (application) => { this.saveApplication(application) } }/>
    </div>;
  }

  _renderApplicationRows() {
    return <div className="row-list">
      <ApplicationTable ref="applicationTable"
                        items={ this._applications() }
                        onApplicationChange={ (application) => { this.saveApplication(application) } }/>
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
            if (this.state.isServiceCreationInProgress) {
              return <ServiceCreationPanel applications={ this._applications() }
                onCancel={() => { this.onCancelServiceCreation() } }/>;
            } else if (this.currentTab() === 'applications') {
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
    this.refs.applicationCardGrid && this.refs.applicationCardGrid.requestAddApplication();
    this.refs.applicationTable && this.refs.applicationTable.requestAddApplication();
  }

  onAddService() {
    this.setState({isServiceCreationInProgress: true});
    //modalUtil.showModal(<AddServiceModal/>, {title: 'Service'});
  }

  onCancelServiceCreation() {
    this.setState({isServiceCreationInProgress: false});
  }

  saveApplication(application) {
    delete application._isNew;
    console.log('saveApplication application', application);
    $.ajax({
      type: application._id ? 'PUT' : 'POST',
      url: settings.apiBase + '/app_infos',
      data: application,
      dataType: 'json'
    });

    // TODO move this into 'then' promise section
    this._fetchApplications();
    this.refs.applicationCardGrid && this.refs.applicationCardGrid.reset();
    this.refs.applicationTable && this.refs.applicationTable.reset();
  }
}

