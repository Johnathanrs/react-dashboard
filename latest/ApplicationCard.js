class FilterableApplicationCardBox extends React.Component {
  render() {
  return (
							
				<ApplicationCardList />
                            
   
  )
  }
};

class ApplicationCardRow extends React.Component {
   render() {
    return (
<section className="add-aplication">
      
              <CreateAppCard />
                            {this.props.applications.map(
             (applications) => <ApplicationCardItem  key={applications.key}
                                    name={applications.name}
                                    version={applications.version}
                                    status={applications.status} 
                                    health={applications.health}
                                    service={applications.service}
                                    uptime={applications.uptime} />
             )}
						
                        </section>
);
   }
}

class ApplicationCardItem extends React.Component{
    render(){
        return (
            
            <article>
        							<div className="head">
								<img src="img/1.png" alt="" />
								<h4><a href="#">{this.props.name}</a></h4>
         
								<div className="tags">
										
									<a href="#" className="stat">
										<img src="img/ico_flag.png" width="10" alt="" />
										<span>0 ERRORS</span>
									</a>
									<a href="#" className="stat ins">
										<img src="img/ico_green.png" width="13" alt="" />
										<span>12 INSTANCES</span>
									</a>
								</div>
							</div>
							<ul>
								<li><strong>DEPLOYMENT</strong><span>{this.props.status}</span></li>
								<li><strong>RESPONSE TIME</strong><span>12 SEC</span></li>
								<li><strong>SERVICE</strong><span>{this.props.service}</span></li>
								<li><strong>UPTIME</strong><span>{this.props.uptime}</span></li>
							</ul>
            </article>
            
        );
    }
    
}


class CreateAppCard extends React.Component {
    render() {
        
        return (
        
                        <article>
							<a href="#" className="add">ADD APPLICATION2</a>
						</article>
        
        );
    }

}

class ApplicationCardList extends React.Component {
    render() {
        
        return(
            				<div className="list-type-r cols-list active">
            				

						<ApplicationCardRow applications={applications} />
					
					
            </div>

        );
    }

}



let applications= [
    {key: 1, name: "cassandra-seed", status: "Undeployed", service:"None", health: "Not Applicable", uptime: "Not Applicable"},
    {key: 2, name: "cassandra-peer", status: "Deployed", service:"None", health: "Healthy", uptime: "12 hours 2 Min"},
    {key: 3, name: "hadoop-nn", status: "Undeployed", service:"None", health: "Not Applicable", uptime: "Not Applicable"},
    {key: 4, name: "oracle-db12", status: "Deployed", service:"None", health: "Healthy", uptime: "12 hours 2 Min"},
    {key: 5, name: "nginx", status: "Undeployed", service:"None", health: "Not Applicable", uptime: "Not Applicable"},
    {key: 6, name: "evo-rhel", status: "Deployed", service:"None", health: "Healthy", uptime: "12 hours 2 Min"},
    {key: 7, name: "evo-rhel-secure", status: "Undeployed", service:"None", health: "Not Applicable", uptime: "Not Applicable"}
    ]

/* DEBUG console.log(applications) */

ReactDOM.render(
  <FilterableApplicationCardBox />,
  document.getElementById('FilterableApplicationCardBoxcontainer')
);


