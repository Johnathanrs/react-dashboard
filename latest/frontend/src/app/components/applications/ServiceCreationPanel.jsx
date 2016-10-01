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
    /*const instancesGetter = (item, itemIndex, itemState) => itemState.selected ?
      <EditInPlace value={ item.instanceCount }
                   placeholder="Click to edit"
                   onApply={ (newValue) => { item.instanceCount = newValue; } }/> : null;*/
    //const tableItems = _.map(this.props.applications, (application) => ({application, instanceCount: null}));

    return <div>
      <ApplicationSelectionSummary applicationCount={ this.state.selectedApplicationCount }
                                   onApply={() => { this.onContinueServiceCreation() } }
                                   onCancel={() => { this.props.onCancel && this.props.onCancel() } }/>

      <Table ref="applicationTable"
             items={ this.props.applications }
             supportsSelection={ true }
             onSelectionChange={ (selectedItems) => { this.setState({selectedApplicationCount: selectedItems.length})} }>
        <TableColumn title="Name" classes="name" getter="appName"/>
        <TableColumn title="Image" classes="image" getter={ () => image }/>
        <TableColumn title="Exec" classes="exec" getter={ () => exec }/>
        <TableColumn title="Status" classes="status" getter="appStatus"/>
        <TableColumn title="Instances" classes="instances" getter={ () => null }/>
        <TableColumn title="Uptime" classes="time" getter="appUptime"/>
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


  _showServiceCreationModal() {
    let modalHandle;
    const modalContent = <ServiceCreationModal applications={ this._selectedItems() }
                                               onCancel={ () => { modalHandle.close() } }
                                               onApply={ (preparedServiceData) => { this.onApply(preparedServiceData) } }/>;
    modalHandle = modalUtil.showModal(modalContent, {title: 'Service'});
  }

  onApply(preparedServiceData) {
    this.props.onApply && this.props.onApply(preparedServiceData);
  }

  onContinueServiceCreation() {
    this._showServiceCreationModal();

    // TODO probably this is not needed
    //const selectedItems = this._selectedItems();
    //const applications = _.map(selectedItems, (item) => _.defaults({newInstanceCount: item.instanceCount}, item.application));

    //this.props.onApply && this.props.onApply(applications);
  }

}

