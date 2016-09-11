import React from 'react';

import Table from '../common/table/Table.jsx';
import TableColumn from '../common/table/TableColumn.jsx';
import ErrorCount from './ErrorCount.jsx';

const mockImageUrls = {
  '2': require('../../img/2.png'),
  '3': require('../../img/3.png'),
  'ico_red': require('../../img/ico_red.png'),
  'ico_green': require('../../img/ico_green.png'),
  'ico_flag': require('../../img/ico_flag.png'),
  'ico_s_3': require('../../img/ico_s_3.png'),
  'ico_s_2': require('../../img/ico_s_2.png'),
  'ico_s_1': require('../../img/ico_s_1.png')
};

const ServiceTable = (props) => <Table items={props.items}>
  <TableColumn title="Name" classes="name" getter={ () => 'MDL_Gateway' }/>
  <TableColumn title="Uptime" classes="uptime" getter={ () => '12 hours 2 min' }/>
  <TableColumn title="Owner" classes="owner" getter={ () => 'Jason Richards' }/>
  <TableColumn title="Deployment" classes="deployment" getter={ () => 'Undeployed' }/>
  <TableColumn title="Instances" classes="instances" getter={ () => 12 }/>
  <TableColumn title="Response time" classes="time" getter={ () => '12 sec' }/>
  <TableColumn title="Errors" classes="errors" getter={ () => <ErrorCount value={0} /> }/>
</Table>;

const ServiceTableMock = () => <div className="table services">
  <table>
    <thead>
    <tr>
      <th className="name">Name</th>
      <th className="uptime">UPTIME</th>
      <th className="owner">Owner</th>
      <th className="deployment">Deployment</th>
      <th className="instances">Instances</th>
      <th className="time">RESPONSE TIME</th>
      <th className="errors">ERRORS</th>
    </tr>
    </thead>
  </table>
  <div className="scroll-bar">
    <table>
      <tbody>
      <tr className="active">
        <td className="name down"><span className="arrow"></span>MDL_Gateway</td>
        <td className="uptime">12 hours 2 Min</td>
        <td className="owner">Jason Richards</td>
        <td className="deployment">Undeployed</td>
        <td className="instances" contenteditable="true">12</td>
        <td className="time">12 SEC</td>
        <td className="errors"><img width="11" src={ mockImageUrls['ico_flag'] } alt=""/>0</td>
      </tr>
      <tr className="details active">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src={ mockImageUrls['3'] } alt=""/>
            </div>
            <div className="stats">
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
              <table>
                <thead>
                <tr>
                  <th className="th-name">NAME</th>
                  <th className="th-uptime">UPTIME</th>
                  <th className="th-instances">INSTANCES</th>
                  <th className="th-time">RESPONSE TIME</th>
                  <th className="th-type">TYPE</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_1'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_1'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td className="name down"><span className="arrow"></span>MDL_Gateway</td>
        <td className="uptime">12 hours 2 Min</td>
        <td className="owner">Jason Richards</td>
        <td className="deployment">Undeployed</td>
        <td className="instances" contenteditable="true">12</td>
        <td className="time">12 SEC</td>
        <td className="errors"><img width="11" src={ mockImageUrls['ico_flag'] } alt=""/>0</td>
      </tr>
      <tr className="details">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src={ mockImageUrls['3'] } alt=""/>
            </div>
            <div className="stats">
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
              <table>
                <thead>
                <tr>
                  <th className="th-name">NAME</th>
                  <th className="th-uptime">UPTIME</th>
                  <th className="th-instances">INSTANCES</th>
                  <th className="th-time">RESPONSE TIME</th>
                  <th className="th-type">TYPE</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_1'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_1'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td className="name down"><span className="arrow"></span>MDL_Gateway</td>
        <td className="uptime">12 hours 2 Min</td>
        <td className="owner">Jason Richards</td>
        <td className="deployment">Undeployed</td>
        <td className="instances" contenteditable="true">12</td>
        <td className="time">12 SEC</td>
        <td className="errors"><img width="11" src={ mockImageUrls['ico_flag'] } alt=""/>0</td>
      </tr>
      <tr className="details">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src={ mockImageUrls['3'] } alt=""/>
            </div>
            <div className="stats">
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
              <table>
                <thead>
                <tr>
                  <th className="th-name">NAME</th>
                  <th className="th-uptime">UPTIME</th>
                  <th className="th-instances">INSTANCES</th>
                  <th className="th-time">RESPONSE TIME</th>
                  <th className="th-type">TYPE</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_1'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_1'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td className="name down"><span className="arrow"></span>MDL_Gateway</td>
        <td className="uptime">12 hours 2 Min</td>
        <td className="owner">Jason Richards</td>
        <td className="deployment">Undeployed</td>
        <td className="instances" contenteditable="true">12</td>
        <td className="time">12 SEC</td>
        <td className="errors"><img width="11" src={ mockImageUrls['ico_flag'] } alt=""/>0</td>
      </tr>
      <tr className="details">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src={ mockImageUrls['3'] } alt=""/>
            </div>
            <div className="stats">
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
              <table>
                <thead>
                <tr>
                  <th className="th-name">NAME</th>
                  <th className="th-uptime">UPTIME</th>
                  <th className="th-instances">INSTANCES</th>
                  <th className="th-time">RESPONSE TIME</th>
                  <th className="th-type">TYPE</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_1'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_1'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td className="name down"><span className="arrow"></span>MDL_Gateway</td>
        <td className="uptime">12 hours 2 Min</td>
        <td className="owner">Jason Richards</td>
        <td className="deployment">Undeployed</td>
        <td className="instances" contenteditable="true">12</td>
        <td className="time">12 SEC</td>
        <td className="errors"><img width="11" src={ mockImageUrls['ico_flag'] } alt=""/>0</td>
      </tr>
      <tr className="details">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src={ mockImageUrls['3'] } alt=""/>
            </div>
            <div className="stats">
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
              <table>
                <thead>
                <tr>
                  <th className="th-name">NAME</th>
                  <th className="th-uptime">UPTIME</th>
                  <th className="th-instances">INSTANCES</th>
                  <th className="th-time">RESPONSE TIME</th>
                  <th className="th-type">TYPE</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_1'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_1'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td className="name down"><span className="arrow"></span>MDL_Gateway</td>
        <td className="uptime">12 hours 2 Min</td>
        <td className="owner">Jason Richards</td>
        <td className="deployment">Undeployed</td>
        <td className="instances" contenteditable="true">12</td>
        <td className="time">12 SEC</td>
        <td className="errors"><img width="11" src={ mockImageUrls['ico_flag'] } alt=""/>0</td>
      </tr>
      <tr className="details">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src={ mockImageUrls['3'] } alt=""/>
            </div>
            <div className="stats">
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
              <table>
                <thead>
                <tr>
                  <th className="th-name">NAME</th>
                  <th className="th-uptime">UPTIME</th>
                  <th className="th-instances">INSTANCES</th>
                  <th className="th-time">RESPONSE TIME</th>
                  <th className="th-type">TYPE</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_1'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_1'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src={ mockImageUrls['ico_se_3'] } alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <div className="to-clone hide">
      <tr>
        <td className="name down"><span className="arrow"></span>NEW one</td>
        <td className="uptime">12 hours 2 Min</td>
        <td className="owner">Jason Richards</td>
        <td className="deployment">Undeployed</td>
        <td className="instances" contenteditable="true">12</td>
        <td className="time">12 SEC</td>
        <td className="errors"><img width="11" src={ mockImageUrls['ico_flag'] } alt=""/>0</td>
      </tr>
      <tr className="details">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src={ mockImageUrls['3'] } alt=""/>
            </div>
            <div className="stats">
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
              <table>
                <thead>
                <tr>
                  <th className="th-name">NAME</th>
                  <th className="th-uptime">UPTIME</th>
                  <th className="th-instances">INSTANCES</th>
                  <th className="th-time">RESPONSE TIME</th>
                  <th className="th-type">TYPE</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
    </div>
  </div>
</div>;

export default ServiceTable;

