class FilterableContainerListingBox extends React.Component {
    render() {
        return (

            <ContainerListingList />


        )
    }
};


class ContainerListingList extends React.Component {
    render() {
        console.log("ContainerListingList sees lxcs as: ");
        console.log(lxcs)
        return (

            <ContainerListingRow containers={lxcs}/>



        )
    }
};


class ContainerListingRow extends React.Component {

    constructor() {
        super();

        this.state = {
            showContainers: false,
            containers: []
        };
    }
    componentWillMount() {
        this._fetchContainers();
        var test = this._fetchContainers();
        console.log("fetched containers")
        console.log(test)
    }
    render() {
        const containers_row = this._getContainers();
        console.log("Container Listing Row sees this.props.containers as: ")
        console.log(this.props.containers)
        return (

            <div className="table loading-more">
				<table>
					<thead>
						<tr>
							<th className="name">CONTAINER NAME</th>
							<th>HOST</th>
							<th>HOST RING</th>
							<th>OWNER</th>
							<th>CPU</th>
							<th>NETWORK</th>
							<th>MEMORY</th>
							<th>DISK</th>
						</tr>
					</thead>
      {containers_row}
      
		
</table>
				<ul className="pagination">
					<li className="current"><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
				</ul>
				<div className="load-more">
					<a href="#" className="btn btn-blue less">Show less</a>
					<a href="#" className="btn btn-blue more">Show more</a>
				</div>
			</div>


        )
    }
    _fetchContainers() {
        $.ajax({
            method: 'GET',
            url: "http://127.0.0.1:3000/api/container_infos",
            success: (containers) => {
                this.setState({
                    containers
                })
            }
        });
    }

    _getContainers() {
        return this.state.containers.map((containers) => {
            return (<ContainerItem  key={containers._id}
                                    name={containers.Names}
                                    status={containers.Status} 
                                    uptime={containers.Status} />);
        });

    }
}



class ContainerItem extends React.Component {
    render() {
        return (

            <tbody>
						<tr>
							<td className="name"><a href="#">{this.props.name}</a></td>
							<td>HOST_123</td>
							<td>HOST_RING_123</td>
							<td>Jason Richards</td>
							<td>CPU_123</td>
							<td>NETWORK_123</td>
							<td>56,12 GB</td>
							<td>145</td>
						</tr>
					</tbody>

        );
    }

}

var LXCURL = "http://127.0.0.1:3000/api/container_infos"
var ContainersData = jQuery.ajax({
    url: LXCURL,
    async: false,
    dataType: 'json'
}).responseText

console.log("Getting container_infos");
console.log(ContainersData);

var lxcs = jQuery.parseJSON(ContainersData);
console.log("LXCs is: ");
console.log(lxcs);

ReactDOM.render(
    <FilterableContainerListingBox />,
    document.getElementById('FilterableContainerListingBoxcontainer')
);