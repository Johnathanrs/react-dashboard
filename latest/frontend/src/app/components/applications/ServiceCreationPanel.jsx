import React from 'react';

import modalUtil from '../common/modal/modalUtil';

import ApplicationSelectionSummary from './ApplicationSelectionSummary.jsx';
import ApplicationTable from './ApplicationTable.jsx';
import ServiceCreationModal from './ServiceCreationModal.jsx';

export default class ServiceCreationPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedApplicationCount: 0
    };
  }

  _selectedApplications() {
    return this.refs.applicationTable.selectedItems();
  }

  render() {
    return <div>
      <ApplicationSelectionSummary applicationCount={ this.state.selectedApplicationCount }
                                   onApply={() => { this.onApply() } }
                                   onCancel={() => { this.props.onCancel && this.props.onCancel() } }/>
      <ApplicationTable ref="applicationTable"
                        items={ this.props.applications }
                        supportsSelection={ true }
                        onSelectionChange={ (selectedItems) => { this.setState({selectedApplicationCount: selectedItems.length})} }/>
    </div>;
  }

  // TODO remove
  /*onApplyApplicationSelection() {
    let modalHandle;
    const modalContent = <ServiceCreationModal applications={ this._selectedApplications() }
      onCancel={ () => { modalHandle.close() } }
      onApply={ () => { console.log('Creating the service...') } }/>;
    modalHandle = modalUtil.showModal(modalContent, {title: 'Service'});
  }*/

  onApply() {
    const selectedApplications = this._selectedApplications();
    this.props.onApply && this.props.onApply(selectedApplications);
  }

}

