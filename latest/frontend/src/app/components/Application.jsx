import React from 'react';
import Panel from './common/panel/Panel.jsx';
import Table from './common/table/Table.jsx';
import TableColumn from './common/table/TableColumn.jsx';
import ViewTypeSelector from './common/viewType/ViewTypeSelector.jsx';
import SimpleTabs from './common/tabs/SimpleTabs.jsx';
import ApplicationOverview from './visualizations/ApplicationOverview.jsx';

import ApplicationSelectionSummary from './applications/ApplicationSelectionSummary.jsx';
import ApplicationCard from './applications/ApplicationCard.jsx';
import ServiceCard from './applications/ServiceCard.jsx';
import ServiceCardApplications from './applications/ServiceCardApplications.jsx';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'applications',
      currentViewType: 'cards'
    };
  }

  componentDidMount() {

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

  _renderServices() {
    return <div id="services">
      <div className="row-list">
        TODO ServiceTable here
      </div>
      <div className="cols-list">
        <ServiceCard />
        <ServiceCardApplications />
        <ServiceCard />
        <ServiceCardApplications />
      </div>
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

  _renderApplications() {
    return <div id="appls">
      <div className="row-list">
        <ApplicationSelectionSummary />
        <Table>
          <TableColumn title="Name" getter={ () => 'hadoop-nn' }/>
          <TableColumn title="Uptime" getter={ () => '12 hours 2 Min' }/>
          <TableColumn title="Owner" getter={ () => 'Jason Richards' }/>
          <TableColumn title="Deployment" getter={ () => 'Undeployed' }/>
          <TableColumn title="Instances" getter={ () => '12' }/>
          <TableColumn title="Response Time" getter={ () => '15 sec' }/>
          <TableColumn title="Errors" getter={ () => <div><img width="12" src="img/ico_red.png" alt=""/>2</div> }/>
        </Table>

      </div>
      <div className="cols-list">
        <section className="add-aplication">
          <article>
            <a href="#" className="add">ADD APPLICATION</a>
          </article>
          <ApplicationCard />
          <ApplicationCard />
          <ApplicationCard />
          <ApplicationCard />
          <ApplicationCard />
          <ApplicationCard />
        </section>
      </div>
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
        { this._renderServices() }
        { this._renderApplications() }
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

