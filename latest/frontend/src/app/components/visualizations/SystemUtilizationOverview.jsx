import buildVisualization from './SystemUtilizationOverview.d3';

import React from 'react';
import _ from 'lodash';
import * as d3 from "d3";
import ReactFauxDOM from 'react-faux-dom';
import ReactDOM from 'react-dom';

const prepareData = (() => {
  const parseTime = d3.time.format("%Y-%m-%dT%H").parse;
  return function (data) {
    let preparedData = { avg: { cpu: 0, memory: 0, disk: 0, network: 0 }, days: [] };
//console.log("logging data")
//      console.log(data);
//      console.log(data.toString());
      var parsedJSON = JSON.parse(data);
//      console.log("parsed json")
//      console.log(parsedJSON)
    parsedJSON.forEach(function (d) {
      if (d.value.period == "hour" && d.value.lxcId == null) {
        preparedData.days.push({
          time: parseTime(d.value.timeFrom),
          cpu: d.value.cpu * 100,
          memory: d.value.memory * 100,
          disk: d.value.blkioRead + d.value.blkioWrite,
          network: d.value.networkRx + d.value.networkTx,
          diskR: d.value.blkioRead,
          diskW: d.value.blkioWrite,
          networkR: d.value.networkRx,
          networkW: d.value.networkTx
        });
      }
    });

    if (preparedData.days.length > 0) {
      preparedData.avg.cpu = d3.sum(preparedData.days, function (d) { return d.cpu; }) / preparedData.days.length;
      preparedData.avg.memory = d3.sum(preparedData.days, function (d) { return d.memory; }) / preparedData.days.length;
      preparedData.avg.disk = d3.sum(preparedData.days, function (d) { return d.disk; }) / preparedData.days.length;
      preparedData.avg.network = d3.sum(preparedData.days, function (d) { return d.network; }) / preparedData.days.length;

      preparedData.avg.diskR = d3.sum(preparedData.days, function (d) { return d.diskR; }) / preparedData.days.length;
      preparedData.avg.diskW = d3.sum(preparedData.days, function (d) { return d.diskW; }) / preparedData.days.length;
      preparedData.avg.networkR = d3.sum(preparedData.days, function (d) { return d.networkR; }) / preparedData.days.length;
      preparedData.avg.networkW = d3.sum(preparedData.days, function (d) { return d.networkW; }) / preparedData.days.length;
    }
    return preparedData;
  }
})();

/**
 * @class SystemUtilizationOverview
 * Renders System Utilization Overview visualization (CPU, Memory, Disk, Network statistics).
 */
export default class SystemUtilizationOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visualization: null
    };
  }

  render() {
    return <div className="system-utilization-overview-visualization">
      { this.state.visualization }
    </div>;
  }

  /**
   * Performs initial D3 diagram building
   */
  componentDidMount() {
    const containerElement = ReactFauxDOM.createElement('section');
    setTimeout(() => {
      this._buildVisualization(containerElement);
    }, 0);
  }

  /**
   * Performs D3 diagram rebuilding each time when component's properties are updated
   * @param prevProps
   * @param prevState
   */
  componentDidUpdate(prevProps, prevState) {
    const containerElement = ReactFauxDOM.createElement('section');
    setTimeout(() => {
      this._buildVisualization(containerElement);
    }, 0);
  }

  _buildVisualization(containerElement) {
    if (this.props.visualizationData) {
      const preparedData = prepareData(this.props.visualizationData);
      const componentDomNode = ReactDOM.findDOMNode(this);
      buildVisualization(d3.select(containerElement), componentDomNode.getBoundingClientRect(), preparedData);
      this.setState({
        visualization: containerElement.toReact()
      });
    } else {
      // We can render loading spinner here if necessary
    }
  }
}

