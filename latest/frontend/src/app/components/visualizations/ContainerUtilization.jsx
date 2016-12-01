import buildVisualization from './ContainerUtilization.d3';

console.log("ContainerUtilization started")

import React from 'react';
import _ from 'lodash';
import * as d3 from "d3";
import ReactFauxDOM from 'react-faux-dom';
import ReactDOM from 'react-dom';

function prepareData(data) {
	const parseTime = d3.time.format("%Y-%m-%dT%H").parse;
	// console.log("data passed to prepareData")
	// console.log(data)
	// d3.json(data, function (error, json) {	
		var data3 = [];
		// json.forEach(function (d) {
			data.forEach(function (d) {
				if (d.value.period == "hour" && d.value.lxcId != null && d.value.lxcId.length > 0) {
					for (var i = 0; i < data3.length; i++) {
						if (data3[i].appId == d.value.lxcId) {
							data3[i].days.push({
								time: parseTime(d.value.timeFrom),
								cpu: d.value.cpu * 100,
								memory: d.value.memory * 100,
								disk: d.value.blkioRead + d.value.blkioWrite,
								network: d.value.networkRx + d.value.networkTx
							});
							return;
						}
					}
					data3.push({
						appId: d.value.lxcId,
						avg: 0,
						days: [
							{
								time: parseTime(d.value.timeFrom),
								cpu: d.value.cpu * 100,
								memory: d.value.memory * 100,
								disk: d.value.blkioRead + d.value.blkioWrite,
								network: d.value.networkRx + d.value.networkTx
							}
						]
					});
				}
			});
			data3.forEach(function (d) {
				if (d.days.length > 0) {
					d.avg = {
						cpu: d3.sum(d.days, function (d1) { return d1.cpu; }) / d.days.length,
						memory: d3.sum(d.days, function (d1) { return d1.memory; }) / d.days.length,
						disk: d3.sum(d.days, function (d1) { return d1.disk; }) / d.days.length,
						network: d3.sum(d.days, function (d1) { return d1.network; }) / d.days.length
					};
				}
			});
			// console.log("logging data3")
			// console.log(data3)
			return data3;
			// // init graph 1B
			// var graph1BLines = d3.selectAll("#graph1b .graph-container")[0];
			// initGraph1b(d3.select(graph1BLines[0]), data3, { appId: "f2193d3beeb8da439485436c183a55dbb9382ed8125afaab7f6c781b8eefcff5" });
			// initGraph1b(d3.select(graph1BLines[1]), data3, { appId: "f1085e71b11b6657a7d3fe462611dc5d79dd2e015035ca570ec244eebd03866e" });
			// initGraph1b(d3.select(graph1BLines[2]), data3, { appId: "c21ba840cc179339eca174deee4b669aade9c801dbe9406d6eb02ab889cdf7df" });
			// initGraph1b(d3.select(graph1BLines[3]), data3, { appId: "4e87c0a643626201999d67c5bccb7ea43a3e0636d80ad1a2ee4fce41319fc444" });
			// initGraph1b(d3.select(graph1BLines[4]), data3, { appId: "480e6c8ae9b0959123253e93b230bdb3e48eeba2ee62b96f463bc578e40208e2" });
		// })
	//});
};

export default class ContainerUtilization extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visualization3: null,

		};
	}
	render() {
		return <div className="container-utilization-visualization">
			{ this.state.visualization3 }
		</div>;
	}

	/**
	 * Performs initial D3 diagram building
	 */
	
	componentDidMount() {
		const containerElement = ReactFauxDOM.createElement('div');
		setTimeout(() => {
			this._buildVisualization(containerElement);
		},100);
	}

	/**
	 * Performs D3 diagram rebuilding each time when component's properties are updated
	 * @param prevProps
	 * @param prevState
	 */
	
	componentDidUpdate(prevProps, prevState) {
		const containerElement = ReactFauxDOM.createElement('div');
		containerElement.style.setProperty('height', 60);
		console.log("abc");
		setTimeout(() => {
		//	this._buildVisualization(containerElement);
		}, 100);
	}	
	
	_buildVisualization(containerElement) {
		if (this.props.visualizationData && this.props.visualizationData.length > 0) {
			
			const componentRect = ReactDOM.findDOMNode(this).getBoundingClientRect();

			const e = d3.select(containerElement);
			const s = {width:componentRect.width, height:60};
			const d = prepareData(this.props.visualizationData);

			buildVisualization(e, s, d, { appId: "f2193d3beeb8da439485436c183a55dbb9382ed8125afaab7f6c781b8eefcff5" });
			buildVisualization(e, s, d, { appId: "f1085e71b11b6657a7d3fe462611dc5d79dd2e015035ca570ec244eebd03866e" });
			buildVisualization(e, s, d, { appId: "c21ba840cc179339eca174deee4b669aade9c801dbe9406d6eb02ab889cdf7df" });
			buildVisualization(e, s, d, { appId: "4e87c0a643626201999d67c5bccb7ea43a3e0636d80ad1a2ee4fce41319fc444" });
			buildVisualization(e, s, d, { appId: "480e6c8ae9b0959123253e93b230bdb3e48eeba2ee62b96f463bc578e40208e2" });

			this.setState({
				visualization3: containerElement.toReact()
			});
		} else {
			// We can render loading spinner here if necessary
		}
	}
}