import React from 'react';

const ServiceTable = () => <div className="table services">
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
        <td className="errors"><img width="11" src="img/ico_flag.png" alt=""/>0</td>
      </tr>
      <tr className="details active">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src="img/3.png" alt=""/>
            </div>
            <div className="stats">
              <ul>
                <li className="orange">
                  <strong>2</strong>
                  <img src="img/ico_se_1.png" alt=""/>
                  <span className="text">Database</span>
                </li>
                <li className="purple">
                  <strong>10</strong>
                  <img src="img/ico_se_2.png" alt=""/>
                  <span className="text">Web Engine</span>
                </li>
                <li className="blue">
                  <strong>12</strong>
                  <img src="img/ico_se_3.png" alt=""/>
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
                  <td className="th-name"><img src="img/ico_se_1.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_1.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
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
        <td className="errors"><img width="11" src="img/ico_flag.png" alt=""/>0</td>
      </tr>
      <tr className="details">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src="img/3.png" alt=""/>
            </div>
            <div className="stats">
              <ul>
                <li className="orange">
                  <strong>2</strong>
                  <img src="img/ico_se_1.png" alt=""/>
                  <span className="text">Database</span>
                </li>
                <li className="purple">
                  <strong>10</strong>
                  <img src="img/ico_se_2.png" alt=""/>
                  <span className="text">Web Engine</span>
                </li>
                <li className="blue">
                  <strong>12</strong>
                  <img src="img/ico_se_3.png" alt=""/>
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
                  <td className="th-name"><img src="img/ico_se_1.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_1.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
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
        <td className="errors"><img width="11" src="img/ico_flag.png" alt=""/>0</td>
      </tr>
      <tr className="details">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src="img/3.png" alt=""/>
            </div>
            <div className="stats">
              <ul>
                <li className="orange">
                  <strong>2</strong>
                  <img src="img/ico_se_1.png" alt=""/>
                  <span className="text">Database</span>
                </li>
                <li className="purple">
                  <strong>10</strong>
                  <img src="img/ico_se_2.png" alt=""/>
                  <span className="text">Web Engine</span>
                </li>
                <li className="blue">
                  <strong>12</strong>
                  <img src="img/ico_se_3.png" alt=""/>
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
                  <td className="th-name"><img src="img/ico_se_1.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_1.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
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
        <td className="errors"><img width="11" src="img/ico_flag.png" alt=""/>0</td>
      </tr>
      <tr className="details">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src="img/3.png" alt=""/>
            </div>
            <div className="stats">
              <ul>
                <li className="orange">
                  <strong>2</strong>
                  <img src="img/ico_se_1.png" alt=""/>
                  <span className="text">Database</span>
                </li>
                <li className="purple">
                  <strong>10</strong>
                  <img src="img/ico_se_2.png" alt=""/>
                  <span className="text">Web Engine</span>
                </li>
                <li className="blue">
                  <strong>12</strong>
                  <img src="img/ico_se_3.png" alt=""/>
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
                  <td className="th-name"><img src="img/ico_se_1.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_1.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
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
        <td className="errors"><img width="11" src="img/ico_flag.png" alt=""/>0</td>
      </tr>
      <tr className="details">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src="img/3.png" alt=""/>
            </div>
            <div className="stats">
              <ul>
                <li className="orange">
                  <strong>2</strong>
                  <img src="img/ico_se_1.png" alt=""/>
                  <span className="text">Database</span>
                </li>
                <li className="purple">
                  <strong>10</strong>
                  <img src="img/ico_se_2.png" alt=""/>
                  <span className="text">Web Engine</span>
                </li>
                <li className="blue">
                  <strong>12</strong>
                  <img src="img/ico_se_3.png" alt=""/>
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
                  <td className="th-name"><img src="img/ico_se_1.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_1.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
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
        <td className="errors"><img width="11" src="img/ico_flag.png" alt=""/>0</td>
      </tr>
      <tr className="details">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src="img/3.png" alt=""/>
            </div>
            <div className="stats">
              <ul>
                <li className="orange">
                  <strong>2</strong>
                  <img src="img/ico_se_1.png" alt=""/>
                  <span className="text">Database</span>
                </li>
                <li className="purple">
                  <strong>10</strong>
                  <img src="img/ico_se_2.png" alt=""/>
                  <span className="text">Web Engine</span>
                </li>
                <li className="blue">
                  <strong>12</strong>
                  <img src="img/ico_se_3.png" alt=""/>
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
                  <td className="th-name"><img src="img/ico_se_1.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_1.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Database</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">1</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
                  </td>
                  <td className="th-uptime">12 hours 2 Min</td>
                  <td className="th-instances">2</td>
                  <td className="th-time">12 SEC</td>
                  <td className="th-type">Application</td>
                </tr>
                <tr>
                  <td className="th-name"><img src="img/ico_se_3.png" alt=""/><a href="#">Application…123</a>
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
        <td className="errors"><img width="11" src="img/ico_flag.png" alt=""/>0</td>
      </tr>
      <tr className="details">
        <td colspan="7">
          <div className="service-card">
            <div className="graph">
              <img src="img/3.png" alt=""/>
            </div>
            <div className="stats">
              <ul>
                <li className="orange">
                  <strong>2</strong>
                  <img src="img/ico_se_1.png" alt=""/>
                  <span className="text">Database</span>
                </li>
                <li className="purple">
                  <strong>10</strong>
                  <img src="img/ico_se_2.png" alt=""/>
                  <span className="text">Web Engine</span>
                </li>
                <li className="blue">
                  <strong>12</strong>
                  <img src="img/ico_se_3.png" alt=""/>
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

