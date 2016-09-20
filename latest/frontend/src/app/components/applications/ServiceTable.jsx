import React from 'react';

import Button from '../common/button/Button.jsx';
import EditInPlace from '../common/edit/EditInPlace.jsx';
import Table from '../common/table/Table.jsx';
import TableColumn from '../common/table/TableColumn.jsx';
import DetailsExtraRow from '../common/table/DetailsExtraRow.jsx';
import ErrorCount from './ErrorCount.jsx';

const mockImageUrls = {
  '2': require('../../img/2.png'),
  '3': require('../../img/3.png'),
  'ico_red': require('../../img/ico_red.png'),
  'ico_green': require('../../img/ico_green.png'),
  'ico_flag': require('../../img/ico_flag.png'),
  'ico_s_3': require('../../img/ico_s_3.png'),
  'ico_s_2': require('../../img/ico_s_2.png'),
  'ico_s_1': require('../../img/ico_s_1.png'),
  'ico_se_3': require('../../img/ico_se_3.png'),
  'ico_se_2': require('../../img/ico_se_2.png'),
  'ico_se_1': require('../../img/ico_se_1.png')
};

const EmbeddedServiceApplicationTable = (props) => {
  return <Table classes="" items={ props.items }>
    <TableColumn title="Name"
                 getter={ (item) => <span><img src={ mockImageUrls['ico_se_1'] } alt=""/><a href="#">{ item.appName }</a></span> }/>
    <TableColumn title="Uptime" getter={ (item) => item.appUptime }/>
    <TableColumn title="Instances"
                 getter={ (item) => <EditInPlace value={ item.appInstanceCount }
                 placeholder="Click to edit"
                 onApply={ (newValue) => { props.onApplicationChange(_.defaults({appInstanceCount: newValue}, item)) } } /> }/>
    <TableColumn title="Response time" getter={ () => '12 SEC' }/>
    <TableColumn title="Type" getter={ () => 'Database' }/>
  </Table>;
};

const ServiceDetails = (props) => {
  const applications = props.item._applications || _.filter(props.allApplications, (application) => _.includes(props.item.svcApplications, application._id));
  return <td colSpan="7">
    <div className="service-card">
      <div className="graph">
        <img src={ mockImageUrls['3'] } alt=""/>
      </div>
      <div className="stats">
        <ul>
          <li className="orange">
            <strong>2</strong>
            <img src={ mockImageUrls['ico_se_1'] } alt=""/>
            <span className="text">Database</span>
          </li>
          <li className="purple">
            <strong>10</strong>
            <img src={ mockImageUrls['ico_se_2'] } alt=""/>
            <span className="text">Web Engine</span>
          </li>
          <li className="blue">
            <strong>12</strong>
            <img src={ mockImageUrls['ico_se_3'] } alt=""/>
            <span className="text">Applications</span>
          </li>
        </ul>
        <EmbeddedServiceApplicationTable items={ applications }
                                         onApplicationChange={ (changedApplication) => { props.onApplicationChange(changedApplication) } }></EmbeddedServiceApplicationTable>
      </div>
      <div className="service-details-bottom">
        {
          (() => ((props.item._isNew || props.item._hasUnsavedChanges) ?
            <Button onClick={ () => { props.onServiceNeedsSaving(props.item) } }>Save</Button> :
            null))()
        }
      </div>
    </div>
  </td>;
};

const ServiceTable = (props) => {
  const nameColumnGetter = (item) => <div>
    <EditInPlace value={ item.svcName }
                 placeholder="Input name here"
                 onApply={ (newValue) => { props.onServiceChange(_.defaultsDeep({svcName: newValue}, item)) } }/>

  </div>;

  return <Table items={props.items} classes="table services">
    <TableColumn title="Name" classes="name"
                 getter={ nameColumnGetter }/>
    <TableColumn title="Uptime" classes="uptime" getter={ (item) => item.svcUptime }/>
    <TableColumn title="Owner" classes="owner" getter={ (item) => item.svcOwner }/>
    <TableColumn title="Deployment" classes="deployment" getter={ (item) => item.svcStatus }/>
    <TableColumn title="Response time" classes="time" getter={ () => '' }/>
    <TableColumn title="Errors" classes="errors" getter={ () => <ErrorCount value={0} /> }/>
    <DetailsExtraRow>
      <ServiceDetails allApplications={props.allApplications}
                      onApplicationChange={ (application) => { props.onApplicationChange(application) } }
                      onServiceNeedsSaving={ (service) => { props.onServiceNeedsSaving(service) } }/>
    </DetailsExtraRow>
  </Table>;
};

ServiceTable.defaultProps = {
  onServiceChange: () => null
};

export default ServiceTable;

