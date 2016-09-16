import React from 'react';

import modalUtil from '../common/modal/modalUtil';

import ApplicationSelectionSummary from './ApplicationSelectionSummary.jsx';
import ApplicationTable from './ApplicationTable.jsx';
import AddServiceModal from './AddServiceModal.jsx';

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
                                   onApply={() => { this.onApplyApplicationSelection() } }
                                   onCancel={() => { this.props.onCancel && this.props.onCancel() } }/>
      <ApplicationTable ref="applicationTable"
                        items={ this.props.applications }
                        supportsSelection={ true }
                        onSelectionChange={ (selectedItems) => { this.setState({selectedApplicationCount: selectedItems.length})} }/>
    </div>;
  }

  onApplyApplicationSelection() {
    const modalContent = <AddServiceModal applications={ this._selectedApplications() }/>;
    const modalHandle = modalUtil.showModal(modalContent, {title: 'Service'});
  }

}

