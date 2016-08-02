

class FilterableServiceListingBox extends React.Component {
  render() {
  return (
							
				<ServiceListingList />
                            
   
  )
  }
};

      
class ServiceListingList extends React.Component {
  render() {
  return (
        <div className="list-type-r row-list">
                  <div className="table services">
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
                     <ServiceListingRow services={services}/>
                  </div>
               </div>

      
  )
  }
};
  

class ServiceListingRow extends React.Component {
   render() {
    return (
        <div className="scroll-bar">
                        <table>
                            
                            {this.props.services.map(
                                (services) => <ServiceListingItem key={services.key}
                                                  name={services.name}
                                                  applications={services.applications}
                                                  uptime={services.uptime}
                                                  owner={services.owner}
                                                  status={services.status}/>
                            )}

                        </table>
<div className="to-clone hide">
    <table>
        <tbody>
								<tr>
									<td className="name down"><span className="arrow"></span>NEW one</td>
									<td className="uptime">12 hours 2 Min</td>
									<td className="owner">Jason Richards</td>
									<td className="deployment">Undeployed</td>
									<td className="instances">12</td>
									<td className="time">12 SEC</td>
									<td className="errors"><img width="11" src="img/ico_flag.png" alt="" />0</td>
								</tr>
								<tr className="details">
									<td colSpan="7">
										<div className="service-card">	
											<div className="graph">
												<img src="img/3.png" alt="" />
											</div>
											<div className="stats">
												<ul>
													<li className="orange">
														<strong>2</strong>
														<img src="img/ico_se_1.png" alt="" />
														<span className="text">Database</span>
													</li>
													<li className="purple">
														<strong>10</strong>
														<img src="img/ico_se_2.png" alt="" />
														<span className="text">Web Engine</span>
													</li>
													<li className="blue">
														<strong>12</strong>
														<img src="img/ico_se_3.png" alt="" />
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
        </tbody>
        </table>
							</div>
                     </div>
        
        );
   }
}

class ServiceListingItem extends React.Component {
    render() {
        return (
        

                                       <tbody>
{/*
                              <tr className="active">
                                 <td className="name down"><span className="arrow"></span>MDL_Gateway</td>
                                 <td className="uptime">12 hours 2 Min</td>
                                 <td className="owner">Jason Richards</td>
                                 <td className="deployment">Undeployed</td>
                                 <td className="instances">12</td>
                                 <td className="time">12 SEC</td>
                                 <td className="errors"><img width="11" src="img/ico_flag.png" alt="" />0</td>
                              </tr>


                              <tr className="details active">
                                 <td colSpan="7">
                                    <div className="service-card">
                                       <div className="graph">
                                          <img src="img/3.png" alt="" />
                                       </div>
                                       <div className="stats">
                                          <ul>
                                             <li className="orange">
                                                <strong>2</strong>
                                                <img src="img/ico_se_1.png" alt="" />
                                                <span className="text">Database</span>
                                             </li>
                                             <li className="purple">
                                                <strong>10</strong>
                                                <img src="img/ico_se_2.png" alt="" />
                                                <span className="text">Web Engine</span>
                                             </li>
                                             <li className="blue">
                                                <strong>12</strong>
                                                <img src="img/ico_se_3.png" alt="" />
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
                                                   <td className="th-name"><img src="img/ico_se_1.png" alt="" /><a href="#">Application…123</a></td>
                                                   <td className="th-uptime">12 hours 2 Min</td>
                                                   <td className="th-instances">1</td>
                                                   <td className="th-time">12 SEC</td>
                                                   <td className="th-type">Database</td>
                                                </tr>
                                                <tr>
                                                   <td className="th-name"><img src="img/ico_se_1.png" alt="" /><a href="#">Application…123</a></td>
                                                   <td className="th-uptime">12 hours 2 Min</td>
                                                   <td className="th-instances">2</td>
                                                   <td className="th-time">12 SEC</td>
                                                   <td className="th-type">Database</td>
                                                </tr>
                                                <tr>
                                                   <td className="th-name"><img src="img/ico_se_3.png" alt="" /><a href="#">Application…123</a></td>
                                                   <td className="th-uptime">12 hours 2 Min</td>
                                                   <td className="th-instances">1</td>
                                                   <td className="th-time">12 SEC</td>
                                                   <td className="th-type">Application</td>
                                                </tr>
                                                <tr>
                                                   <td className="th-name"><img src="img/ico_se_3.png" alt="" /><a href="#">Application…123</a></td>
                                                   <td className="th-uptime">12 hours 2 Min</td>
                                                   <td className="th-instances">2</td>
                                                   <td className="th-time">12 SEC</td>
                                                   <td className="th-type">Application</td>
                                                </tr>
                                                <tr>
                                                   <td className="th-name"><img src="img/ico_se_3.png" alt="" /><a href="#">Application…123</a></td>
                                                   <td className="th-uptime">12 hours 2 Min</td>
                                                   <td className="th-instances">1</td>
                                                   <td className="th-time">12 SEC</td>
                                                   <td className="th-type">Application</td>
                                                </tr>
                                                <tr>
                                                   <td className="th-name"><img src="img/ico_se_3.png" alt="" /><a href="#">Application…123</a></td>
                                                   <td className="th-uptime">12 hours 2 Min</td>
                                                   <td className="th-instances">2</td>
                                                   <td className="th-time">12 SEC</td>
                                                   <td className="th-type">Application</td>
                                                </tr>
                                                <tr>
                                                   <td className="th-name"><img src="img/ico_se_3.png" alt="" /><a href="#">Application…123</a></td>
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
*/}
                
                
                
                              <tr>
                                 <td className="name down"><span className="arrow"></span>{this.props.name}</td>
                                 <td className="uptime">{this.props.uptime}</td>
                                 <td className="owner">{this.props.owner}</td>
                                 <td className="deployment">{this.props.status}</td>
                                 <td className="instances">12</td>
                                 <td className="time">12 SEC</td>
                                 <td className="errors"><img width="11" src="img/ico_flag.png" alt="" />0</td>
                              </tr>
                              <tr className="details">
                                 <td colSpan="7">
                                    <div className="service-card">
                                       <div className="graph">
                                          <img src="img/3.png" alt="" />
                                       </div>
                                       <div className="stats">
                                          <ul>
                                             <li className="orange">
                                                <strong>2</strong>
                                                <img src="img/ico_se_1.png" alt="" />
                                                <span className="text">Database</span>
                                             </li>
                                             <li className="purple">
                                                <strong>10</strong>
                                                <img src="img/ico_se_2.png" alt="" />
                                                <span className="text">Web Engine</span>
                                             </li>
                                             <li className="blue">
                                                <strong>12</strong>
                                                <img src="img/ico_se_3.png" alt="" />
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
                                                      {this.props.applications.map(
                                (SvcApplications) => <ServiceListingItemApplication key={SvcApplications.key}
                                                  name={SvcApplications.name}
                                                  uptime={SvcApplications.uptime}
                                                  health={SvcApplications.health}
                                                  status={SvcApplications.status}/>
                            )}
                                          {/*      <ServiceListingItemApplication SvcApplications={this.props.applications}/>*/}
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                           </tbody>
            
        );
        
    }
    
}


class ServiceListingItemApplication extends React.Component {
    render() {
        {/*DEBUG console.log(this.props.application_list[0].name) */}
        return (
                                                            <tr>
                                                   <td className="th-name"><img src="img/ico_se_1.png" alt="" /><a href="#">{this.props.name}</a></td>
                                                    {/*WORKS<td className="th-name"><img src="img/ico_se_1.png" alt="" /><a href="#">{this.props.applications[0].name}</a></td>*/}
                                                   <td className="th-uptime">{this.props.uptime}</td>
                                                   <td className="th-instances">1</td>
                                                   <td className="th-time">12 SEC</td>
                                                   <td className="th-type">Database</td>
                                                </tr>
            );
        }
}



let services = [
    {key: 1, name: "CVX_DataLake", status: "Undeployed", owner:"Jason Bourne", health: "Not Applicable", uptime: "Not Applicable", applications:[
        {key: 1, name: "cassandra-seed", status: "Undeployed",  health: "Not Applicable", uptime: "Not Applicable"}, 
        {key: 2, name: "cassandra-peer", status: "Deployed", health: "Healthy", uptime: "12 hours 2 Min"},
        {key: 3, name: "hadoop-dn", status: "Undeployed", health: "Not Applicable", uptime: "Not Applicable"},
        {key: 4, name: "hadoop-nn", status: "Deployed", health: "Healthy", uptime: "12 hours 2 Min"} 
        ]
    },
        {key: 2, name: "AAPL_DataLake", status: "Deployed", owner:"Steve Wozniak", health: "Healthy", uptime: "2 Days 12 Hours", applications:[
        {key: 1, name: "cassandra-seed", status: "Undeployed",  health: "Not Applicable", uptime: "Not Applicable"}, 
        {key: 2, name: "cassandra-peer", status: "Deployed", health: "Healthy", uptime: "12 hours 2 Min"},
        {key: 3, name: "hadoop-dn", status: "Undeployed", health: "Not Applicable", uptime: "Not Applicable"},
        {key: 4, name: "hadoop-nn", status: "Deployed", health: "Healthy", uptime: "12 hours 2 Min"} 
        ]
    }
]

console.log(services)

let dbservices = [
    {key: 1, name: "CVX_DataLake", applications:[ {app_id: 1}, {app_id:2} ]},
     ]

ReactDOM.render(
  <FilterableServiceListingBox />,
  document.getElementById('FilterableServiceListingBoxcontainer')
);


