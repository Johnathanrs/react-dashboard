import React from 'react';

import Table from '../common/table/Table.jsx';

const ApplicationTable = () => <Table>
  <TableColumn title="Name" getter={ () => 'hadoop-nn' }/>
  <TableColumn title="Uptime" getter={ () => '12 hours 2 Min' }/>
  <TableColumn title="Owner" getter={ () => 'Jason Richards' }/>
  <TableColumn title="Deployment" getter={ () => 'Undeployed' }/>
  <TableColumn title="Instances" getter={ () => '12' }/>
  <TableColumn title="Response Time" getter={ () => '15 sec' }/>
  <TableColumn title="Errors" getter={ () => <div><img width="12" src="img/ico_red.png" alt=""/>2</div> }/>
</Table>;
