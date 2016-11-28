import React from 'react';

import Button from '../common/button/Button.jsx';
import CloseRedButton from '../common/button/CloseRedButton.jsx';
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
    <TableColumn title="Type" getter={ () => 'Database' }/>
  </Table>;
};

const ServiceDetails = (props) => {
  const applications = props.item._applications || _.filter(props.allApplications, (application) => _.includes(props.item.svcApplications, application._id));
  var serviceId = props.item._id;
  var className = 'service-card';
  if(props.selectedId === serviceId)
    className += ' active';

  return <td colSpan="7">
    <div className={className} onClick={ () => { props.onSelectService(serviceId) } }>
      <div className="graph">
        <img src={ mockImageUrls['3'] } alt=""/>
      </div>
      <div className="stats">
        <div className="delete-service-btn">
          <CloseRedButton onClick={ () => { props.onServiceNeedsDeleting(props.item) } } />
        </div>
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
      <div className="clearfix"></div>
    </div>
  </td>;
};

const ServiceTable = (props) => {
  const nameColumnGetter = (item) => <div>
    <EditInPlace value={ item.svcName }
                 placeholder="Input name here"
                 onApply={ (newValue) => { props.onServiceChange(_.defaultsDeep({svcName: newValue}, item)) } }/>

  </div>;

  const owner = 'Jason Bourne';
  const status = 'TODO'; // TODO show the weakest status from all the applications in the service
  const errorCount = 0; // TODO sum of all the applications' errors
  return <Table items={props.items} classes="table services">
    <TableColumn title="Name" classes="name" getter={ nameColumnGetter }/>
    <TableColumn title="Owner" classes="owner" getter={ (item) => owner }/>
    <TableColumn title="Deployment" classes="deployment" getter={ (item) => status }/>
    <TableColumn title="Errors" classes="errors" getter={ () => <ErrorCount value={ errorCount } /> }/>
    <DetailsExtraRow>
      <ServiceDetails allApplications={props.allApplications}
                      selectedId={ props.selectedId }
                      onSelectService={ (id) => { props.onSelectService(id) } }
                      onApplicationChange={ (application) => { props.onApplicationChange(application) } }
                      onServiceNeedsSaving={ (service) => { props.onServiceNeedsSaving(service) } }
                      onServiceNeedsDeleting={ (service) => { props.onServiceNeedsDeleting(service) } } />
    </DetailsExtraRow>
  </Table>;
};

ServiceTable.defaultProps = {
  onServiceChange: () => null
};

export default ServiceTable;

