import React from 'react';

import Table from '../common/table/Table.jsx';
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
        appName: 'test-name',
        appExec: '/test/exec'
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
    const owner = 'Jason Richards';
    const instances = 12;
    const responseTime = '15 sec';
    const errorCount = 0;
    return <Table items={ this.props.items } supportsSelection={ false }>
      <TableColumn title="Name" classes="name" getter="appName"/>
      <TableColumn title="Uptime" classes="uptime" getter="appUptime"/>
      <TableColumn title="Owner" classes="owner" getter={ () => owner }/>
      <TableColumn title="Deployment" classes="deployment" getter="appStatus"/>
      <TableColumn title="Instances" classes="instances" getter={ () => instances }/>
      <TableColumn title="Response Time" classes="time" getter={ () => responseTime }/>
      <TableColumn title="Errors"
                   classes="errors"
                   getter={ () => <ErrorCount value={errorCount} /> }/>
      <FirstExtraRow>
        <AddApplicationRow item={this.state.applicationToAdd}
                           onCancel={ () => { this.reset() } }
                           onApply={ (application) => { this.props.onApplicationChange && this.props.onApplicationChange(application) } }/>
      </FirstExtraRow>
    </Table>;
  }

  requestAddApplication() {
    this.setState({applicationToAdd: {}});
  }
}

export default ApplicationTable;
