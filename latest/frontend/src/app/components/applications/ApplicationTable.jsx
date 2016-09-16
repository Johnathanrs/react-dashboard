import React from 'react';

import Table from '../common/table/Table.jsx';
import TableColumn from '../common/table/TableColumn.jsx';
import FirstExtraRow from '../common/table/FirstExtraRow.jsx';
import DetailsExtraRow from '../common/table/DetailsExtraRow.jsx';
import ErrorCount from './ErrorCount.jsx';

const ApplicationDetails = (props) => {
  //console.log('ApplicationDetails props', props);
  return <td>App details</td>;
};

class ApplicationTable extends React.Component {
  render() {
    const owner = 'Jason Richards';
    const instances = 12;
    const responseTime = '15 sec';
    const errorCount = 0;
    return <Table items={ this.props.items }>
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
        <td colSpan="7">First Extra Row</td>
      </FirstExtraRow>
      <DetailsExtraRow>
        <ApplicationDetails/>
      </DetailsExtraRow>
    </Table>;
  }
}

export default ApplicationTable;
