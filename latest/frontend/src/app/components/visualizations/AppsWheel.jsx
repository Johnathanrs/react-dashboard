import buildVisualization from './AppsWheel.d3';

import React from 'react';
import _ from 'lodash';
import * as d3 from "d3";
import ReactFauxDOM from 'react-faux-dom';
import ReactDOM from 'react-dom';

function prepareData(data) {
  // Prepare data for visualization if needed
  return data;
}

export default class AppsWheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visualization: null
    };
  }

  render() {
    return <div className="apps-wheel-visualization">
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
      buildVisualization(d3.select(containerElement), componentDomNode.getBoundingClientRect(), preparedData, 'Apps Wheel');
      this.setState({
        visualization: containerElement.toReact()
      });
    } else {
      // We can render loading spinner here if necessary
    }
  }
}

