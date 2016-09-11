import React from 'react';

import Table from '../common/table/Table.jsx';
import TableColumn from '../common/table/TableColumn.jsx';

const mockImageUrls = {
  'ico_red': require('../../img/ico_red.png'),
  'ico_flag': require('../../img/ico_flag.png')
};

const renderErrors = (errorCount) => <div><img width="12"
                                               src={ mockImageUrls[errorCount > 0 ? 'ico_red' : 'ico_flag'] }
                                               alt=""/>{errorCount}</div>;

const ApplicationTable = (props) => {
  const owner = 'Jason Richards';
  const instances = 12;
  const responseTime = '15 sec';
  const errorCount = 0;
  return <Table items={ props.items }>
    <TableColumn title="Name" classes="name" getter="appName"/>
    <TableColumn title="Uptime" classes="uptime" getter="appUptime"/>
    <TableColumn title="Owner" classes="owner" getter={ () => owner }/>
    <TableColumn title="Deployment" classes="deployment" getter="appStatus"/>
    <TableColumn title="Instances" classes="instances" getter={ () => instances }/>
    <TableColumn title="Response Time" classes="time" getter={ () => responseTime }/>
    <TableColumn title="Errors"
                 classes="errors"
                 getter={ () => renderErrors(errorCount) }/>
  </Table>;
}

export default ApplicationTable;
