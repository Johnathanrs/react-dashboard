import React from 'react';

import modalUtil from '../common/modal/modalUtil';
import EditInPlace from '../common/edit/EditInPlace.jsx';
import Table from '../common/table/Table.jsx';
import TableColumn from '../common/table/TableColumn.jsx';

import ErrorCount from './ErrorCount.jsx';
import ApplicationSelectionSummary from './ApplicationSelectionSummary.jsx';
//import ApplicationTable from './ApplicationTable.jsx';
import ServiceCreationModal from './ServiceCreationModal.jsx';

export default class ServiceCreationPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedApplicationCount: 0
    };
  }

  _selectedItems() {
    return this.refs.applicationTable.selectedItems();
  }

  render() {
    const image = 'app-image';
    const exec = '/usr/sbin/application';
    const errorCount = 0;
    const uptime = '2h 30min';
    const instancesGetter = (item, itemIndex, itemState) => itemState.selected ?
      <EditInPlace value={ item.instanceCount }
                   placeholder="Click to edit"
                   onApply={ (newValue) => { item.instanceCount = newValue; } }/> : null;
    const tableItems = _.map(this.props.applications, (application) => ({application, instanceCount: null}));

    return <div>
      <ApplicationSelectionSummary applicationCount={ this.state.selectedApplicationCount }
                                   onApply={() => { this.onApply() } }
                                   onCancel={() => { this.props.onCancel && this.props.onCancel() } }/>

      <Table ref="applicationTable"
             items={ tableItems }
             supportsSelection={ true }
             onSelectionChange={ (selectedItems) => { this.setState({selectedApplicationCount: selectedItems.length})} }>
        <TableColumn title="Name" classes="name" getter="application.appName"/>
        <TableColumn title="Image" classes="image" getter={ () => image }/>
        <TableColumn title="Exec" classes="exec" getter={ () => exec }/>
        <TableColumn title="Status" classes="status" getter="application.appStatus"/>
        <TableColumn title="Instances" classes="instances" getter={ instancesGetter }/>
        <TableColumn title="Uptime" classes="time" getter="application.appUptime"/>
        <TableColumn title="Errors"
                     classes="errors"
                     getter={ () => <ErrorCount value={errorCount} /> }/>
      </Table>
    </div>;
  }

  /* TODO remove
   <ApplicationTable ref="applicationTable"
   items={ this.props.applications }
   supportsSelection={ true }
   onSelectionChange={ (selectedItems) => { this.setState({selectedApplicationCount: selectedItems.length})} }/>
   */


  // TODO remove
  /*onApplyApplicationSelection() {
   let modalHandle;
   const modalContent = <ServiceCreationModal applications={ this._selectedApplications() }
   onCancel={ () => { modalHandle.close() } }
   onApply={ () => { console.log('Creating the service...') } }/>;
   modalHandle = modalUtil.showModal(modalContent, {title: 'Service'});
   }*/

  onApply() {
    const selectedItems = this._selectedItems();
    const applications = _.map(selectedItems, (item) => _.defaults({newInstanceCount: item.instanceCount}, item.application));
    this.props.onApply && this.props.onApply(applications);
  }

}

