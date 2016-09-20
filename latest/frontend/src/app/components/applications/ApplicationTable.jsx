import React from 'react';

import Table from '../common/table/Table.jsx';
import EditInPlace from '../common/edit/EditInPlace.jsx';
import TableColumn from '../common/table/TableColumn.jsx';
import FirstExtraRow from '../common/table/FirstExtraRow.jsx';
import CustomRow from '../common/table/CustomRow.jsx';
import DetailsExtraRow from '../common/table/DetailsExtraRow.jsx';
import ErrorCount from './ErrorCount.jsx';

const imageUrls = {
  'ico_close': require('../../img/ico_close.png')
};

class AddApplicationRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      application: {
        appName: '',
        appExec: ''
      }
    };
  }

  render() {
    if (this.props.item) {
      return <td colSpan="7" className="add-clone">
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
              <input type="text"
                     placeholder="Enter name here..."
                     value={ this.state.application.appName }
                     onChange={ (evt) => { this.onNameChange(evt) } }/>
            </div>
            <div className="item">
              <input type="text"
                     placeholder="Enter exec path here..."
                     value={ this.state.application.appExec }
                     onChange={ (evt) => { this.onExecChange(evt) } }/>
            </div>
            <div className="item">
              <button type="submit" className="btn btn-blue" onClick={ (evt) => {this.onApply(evt)} }>Create</button>
              <a href="javascript:void(0)" className="close"
                 onClick={ () => { this.props.onCancel && this.props.onCancel() } }>
                <img src={ imageUrls['ico_close'] } alt=""/>
              </a>
            </div>
          </div>
        </form>
      </td>;
    } else {
      return null;
    }
  }

  onNameChange(evt) {
    this.setState({
      application: _.defaults({appName: evt.target.value}, this.state.application)
    });
  }

  onExecChange(evt) {
    this.setState({
      application: _.defaults({appExec: evt.target.value}, this.state.application)
    });
  }

  onApply(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.props.onApply && this.props.onApply(this.state.application);
  }
}

class ApplicationTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationToAdd: null
    };
  }

  reset() {
    this.setState({
      applicationToAdd: null
    });
  }

  render() {
    //const owner = 'Jason Richards';
    const image = 'app-image';
    const exec = '/usr/sbin/application';
    const instances = 12;
    const responseTime = '15 sec';
    const errorCount = 0;
    const uptime = '2h 30min';
    return <Table ref="table"
                  items={ this.props.items }
                  supportsSelection={ this.props.supportsSelection }
      onSelectionChange={ (items) => { this.props.onSelectionChange(items) } }>
      <TableColumn title="Name" classes="name" getter="appName"/>
      <TableColumn title="Image" classes="image" getter={ () => image }/>
      <TableColumn title="Exec" classes="exec" getter={ () => exec }/>
      <TableColumn title="Status" classes="status" getter="appStatus"/>
      <TableColumn title="Instances" classes="instances" getter={ () => <EditInPlace value={ 12 } onApply={ () => {} } /> }/>
      <TableColumn title="Uptime" classes="time" getter={ () => uptime }/>
      <TableColumn title="Errors"
                   classes="errors"
                   getter={ () => <ErrorCount value={errorCount} /> }/>
      <FirstExtraRow>
        <AddApplicationRow item={this.state.applicationToAdd}
                           onCancel={ () => { this.reset() } }
                           onApply={ (application) => { this.props.onApplicationNeedsSaving(application) } }/>
      </FirstExtraRow>
    </Table>;
  }

  requestAddApplication() {
    this.setState({applicationToAdd: {}});
  }

  selectedItems() {
    return this.refs.table.selectedItems();
  }
}

ApplicationTable.defaultProps = {
  supportsSelection: false,
  onApplicationNeedsSaving: () => null,
  onSelectionChange: () => null
};

export default ApplicationTable;
