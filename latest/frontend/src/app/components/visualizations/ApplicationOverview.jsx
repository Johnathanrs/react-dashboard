import React from 'react';
import _ from 'lodash';
import * as d3 from "d3";
import ReactFauxDOM from 'react-faux-dom';
import ReactDOM from 'react-dom';

/**
 * Prepares data for D3 visualization building.
 * Performs all the necessary conversions etc.
 * @param data {object} raw visualization data
 * @returns prepared visualization data
 */
const prepareData = (() => {
  const parseTime = d3.time.format("%Y-%m-%dT%H:%M:%SZ").parse;
  return function (data) {
    return {
      samples: data.samples.map((sample) => {
        const cloneOfSample = _.clone(sample);
        cloneOfSample.t = parseTime(cloneOfSample.time);
        return cloneOfSample;
      }),
      summary: data.summary
    };
  }
})();

/**
 * Builds D3 visualization
 * @param container {object} fake Faux-based DOM node to put visualization's markup in
 * @param boundingClientRect {object} a given rectangle where we need to build visualization
 * @param data {object} visualization data
 */
function buildVisualization(container, boundingClientRect, data) {
  const containerSize = boundingClientRect;
  const margin = {top: 20, right: 20, bottom: 40, left: 170},
    subMargin = {top: 20, bottom: 10},
    width = containerSize.width - margin.left - margin.right,
    height = (containerSize.height - margin.top - margin.bottom) / 4 - (subMargin.top + subMargin.bottom);

  const x = d3.time.scale().range([0, width]);
  const y = d3.scale.linear().range([height, 0]),
    y1 = d3.scale.linear().range([height, 0]),
    y2 = d3.scale.linear().range([height, 0]),
    y3 = d3.scale.linear().range([height, 0]),
    y4 = d3.scale.linear().range([height, 0]);

  const xFormat = d3.time.format("%I %p");
  x.tickFormat(xFormat);

  const xAxis = d3.svg.axis().scale(x).orient("bottom");

  const area1 = d3.svg.area().x((d) => {
    return x(d.t);
  }).y0(height).y1((d) => {
    return y1(d.health);
  });

  const area2 = d3.svg.area().x((d) => {
    return x(d.t);
  }).y0(height).y1((d) => {
    return y2(d.errorCount);
  });

  const area3 = d3.svg.area().x((d) => {
    return x(d.t);
  }).y0(height).y1((d) => {
    return y3(d.errorDeviation);
  });

  const area4 = d3.svg.area().x((d) => {
    return x(d.t);
  }).y0(height).y1((d) => {
    return y4(d.responseTime);
  });

  const line1 = d3.svg.line().x((d) => {
    return x(d.t);
  }).y((d) => {
    return y1(d.health);
  });

  const line2 = d3.svg.line().x((d) => {
    return x(d.t);
  }).y((d) => {
    return y2(d.errorCount);
  });

  const line3 = d3.svg.line().x((d) => {
    return x(d.t);
  }).y((d) => {
    return y3(d.errorDeviation);
  });

  const line4 = d3.svg.line().x((d) => {
    return x(d.t);
  }).y((d) => {
    return y4(d.responseTime);
  });

  const svgRoot = container.append("svg")
    .attr("width", containerSize.width)
    .attr("height", containerSize.height);

  const colors = [["#4FB1E2", "#E7F3FB"], ["#777CA4", "#EAEBF1"], ["#FF7551", "#FDEDE6"], ["#FFB800", "#FDF9DD"]];
  const defs = svgRoot.append("defs");

  colors.forEach((d, i)  => {
    const color = defs.append("linearGradient")
      .attr("id", "color" + (i + 1))
      .attr("x1", "50%")
      .attr("y1", "0%")
      .attr("x2", "50%")
      .attr("y2", "100%");

    color.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", d[1]);

    color.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#FFFFFF");
  });

  defs.append("clipPath").attr("id", "rectClip")
    .append("rect")
    .attr("width", width + margin.left + margin.right)
    .attr("height", containerSize.height);

  const svg = svgRoot.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("clip-path", "url(#rectClip)");

  svgRoot.append("line")
    .attr("class", "separator")
    .attr("x1", 0)
    .attr("y1", (height + subMargin.top + subMargin.bottom) + margin.top)
    .attr("x2", (width + margin.left))
    .attr("y2", (height + subMargin.top + subMargin.bottom) + margin.top);

  svgRoot.append("line")
    .attr("class", "separator")
    .attr("x1", 0)
    .attr("y1", (height + subMargin.top + subMargin.bottom) * 2 + margin.top)
    .attr("x2", (width + margin.left))
    .attr("y2", (height + subMargin.top + subMargin.bottom) * 2 + margin.top);

  svgRoot.append("line").attr("class", "separator")
    .attr("x1", 0)
    .attr("y1", (height + subMargin.top + subMargin.bottom) * 3 + margin.top)
    .attr("x2", (width + margin.left))
    .attr("y2", (height + subMargin.top + subMargin.bottom) * 3 + margin.top);

  svgRoot.append("line")
    .attr("class", "separator")
    .attr("x1", 0)
    .attr("y1", (height + subMargin.top + subMargin.bottom) * 4 + margin.top)
    .attr("x2", (width + margin.left))
    .attr("y2", (height + subMargin.top + subMargin.bottom) * 4 + margin.top);

  const svg1 = svg.append("g").attr("transform", "translate(0," + subMargin.top + ")");
  const svg2 = svg.append("g").attr("transform", "translate(0," + (subMargin.top * 2 + height + subMargin.bottom) + ")");
  const svg3 = svg.append("g").attr("transform", "translate(0," + (subMargin.top * 3 + height * 2 + subMargin.bottom * 2) + ")");
  const svg4 = svg.append("g").attr("transform", "translate(0," + (subMargin.top * 4 + height * 3 + subMargin.bottom * 3) + ")");

  x.domain(d3.extent(data.samples, (d) => {
    return d.t;
  }));

  y1.domain([0, d3.max(data.samples, (d) => {
    return d.health;
  })]);

  y2.domain([0, d3.max(data.samples, (d) => {
    return d.errorCount;
  })]);

  y3.domain([0, d3.max(data.samples, (d) => {
    return d.errorDeviation;
  })]);

  y4.domain([0, d3.max(data.samples, (d) => {
    return d.responseTime;
  })]);

  svg1.append("path")
    .datum(data.samples)
    .attr("class", "area")
    .style("fill", "url(#color1)")
    .attr("d", area1);

  svg2.append("path")
    .datum(data.samples)
    .attr("class", "area")
    .style("fill", "url(#color2)")
    .attr("d", area2);

  svg3.append("path")
    .datum(data.samples)
    .attr("class", "area")
    .style("fill", "url(#color3)")
    .attr("d", area3);

  svg4.append("path")
    .datum(data.samples)
    .attr("class", "area")
    .style("fill", "url(#color4)")
    .attr("d", area4);

  svg1.append("path")
    .datum(data.samples)
    .attr("class", "line")
    .style("stroke", colors[0][0])
    .attr("d", line1);

  svg2.append("path")
    .datum(data.samples)
    .attr("class", "line")
    .style("stroke", colors[1][0])
    .attr("d", line2);

  svg3.append("path")
    .datum(data.samples)
    .attr("class", "line")
    .style("stroke", colors[2][0])
    .attr("d", line3);

  svg4.append("path")
    .datum(data.samples)
    .attr("class", "line")
    .style("stroke", colors[3][0])
    .attr("d", line4);

  const dataDots = data.samples.slice(1, data.samples.length - 1);
  const lastDot = dataDots[dataDots.length - 1];

  svg1.selectAll("dot").data(dataDots).enter()
    .append("circle")
    .attr("r", 3)
    .style("stroke", colors[0][0])
    .style("stroke-width", 3)
    .style("fill", "#FFFFFF")
    .attr("cx", (d) => {
      return x(d.t);
    }).attr("cy", (d) => {
      return y1(d.health);
    });

  svg2.selectAll("dot").data(dataDots).enter()
    .append("circle")
    .attr("r", 3)
    .style("stroke", colors[1][0])
    .style("stroke-width", 3)
    .style("fill", "#FFFFFF")
    .attr("cx", (d) => {
      return x(d.t);
    }).attr("cy", (d) => {
      return y2(d.errorCount);
    });

  svg3.selectAll("dot").data(dataDots).enter()
    .append("circle")
    .attr("r", 3)
    .style("stroke", colors[2][0])
    .style("stroke-width", 3)
    .style("fill", "#FFFFFF")
    .attr("cx", (d) => {
      return x(d.t);
    }).attr("cy", (d) => {
      return y3(d.errorDeviation);
    });

  svg4.selectAll("dot").data(dataDots).enter()
    .append("circle")
    .attr("r", 3)
    .style("stroke", colors[3][0])
    .style("stroke-width", 3)
    .style("fill", "#FFFFFF")
    .attr("cx", (d) => {
      return x(d.t);
    }).attr("cy", (d) => {
      return y4(d.responseTime);
    });

  svg1.append("circle")
    .attr("r", 6)
    .style("stroke", colors[0][0])
    .style("stroke-width", 4)
    .style("fill", "none")
    .style("opacity", 0.4)
    .attr("cx", x(lastDot.t))
    .attr("cy", y1(lastDot.health));

  svg1.append("circle")
    .attr("r", 10)
    .style("stroke", colors[0][0])
    .style("stroke-width", 5)
    .style("fill", "none")
    .style("opacity", 0.1)
    .attr("cx", x(lastDot.t))
    .attr("cy", y1(lastDot.health));

  svg2.append("circle")
    .attr("r", 6)
    .style("stroke", colors[1][0])
    .style("stroke-width", 4)
    .style("fill", "none")
    .style("opacity", 0.4)
    .attr("cx", x(lastDot.t))
    .attr("cy", y2(lastDot.errorCount));

  svg2.append("circle")
    .attr("r", 10)
    .style("stroke", colors[1][0])
    .style("stroke-width", 5)
    .style("fill", "none")
    .style("opacity", 0.1)
    .attr("cx", x(lastDot.t))
    .attr("cy", y2(lastDot.errorCount));

  svg3.append("circle")
    .attr("r", 6)
    .style("stroke", colors[2][0])
    .style("stroke-width", 4)
    .style("fill", "none")
    .style("opacity", 0.4)
    .attr("cx", x(lastDot.t))
    .attr("cy", y3(lastDot.errorDeviation));

  svg3.append("circle")
    .attr("r", 10)
    .style("stroke", colors[2][0])
    .style("stroke-width", 5)
    .style("fill", "none")
    .style("opacity", 0.1)
    .attr("cx", x(lastDot.t))
    .attr("cy", y3(lastDot.errorDeviation));

  svg4.append("circle")
    .attr("r", 6)
    .style("stroke", colors[3][0])
    .style("stroke-width", 4)
    .style("fill", "none")
    .style("opacity", 0.4)
    .attr("cx", x(lastDot.t))
    .attr("cy", y4(lastDot.responseTime));

  svg4.append("circle")
    .attr("r", 10)
    .style("stroke", colors[3][0])
    .style("stroke-width", 5)
    .style("fill", "none")
    .style("opacity", 0.1)
    .attr("cx", x(lastDot.t))
    .attr("cy", y4(lastDot.responseTime));

  svgRoot.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(" + margin.left + "," + (containerSize.height - margin.bottom + 5) + ")")
    .call(xAxis);

  svgRoot.append("text")
    .attr("class", "info-title")
    .text("Reported Availability")
    .attr("x", 20).attr("y", margin.top + 25);

  svgRoot.append("text")
    .attr("class", "info-value")
    .text(data.summary.health * 100 + "%")
    .attr("x", 20)
    .attr("y", margin.top + 55);

  svgRoot.append("text")
    .attr("class", "info-title")
    .text("Error Count")
    .attr("x", 20)
    .attr("y", margin.top + 25 + (height + subMargin.top + subMargin.bottom));

  svgRoot.append("text")
    .attr("class", "info-value")
    .text(data.summary.errorCount)
    .attr("x", 20)
    .attr("y", margin.top + 55 + (height + subMargin.top + subMargin.bottom));

  svgRoot.append("text")
    .attr("class", "info-title")
    .text("Deviation Errors")
    .attr("x", 20)
    .attr("y", margin.top + 25 + (height + subMargin.top + subMargin.bottom) * 2);

  svgRoot.append("text")
    .attr("class", "info-value")
    .text(data.summary.errorDeviation)
    .attr("x", 20)
    .attr("y", margin.top + 55 + (height + subMargin.top + subMargin.bottom) * 2);

  svgRoot.append("text")
    .attr("class", "info-title")
    .text("Sample Response Time")
    .attr("x", 20)
    .attr("y", margin.top + 25 + (height + subMargin.top + subMargin.bottom) * 3);

  svgRoot.append("text")
    .attr("class", "info-value")
    .text(data.summary.responseTime)
    .attr("x", 20)
    .attr("y", margin.top + 55 + (height + subMargin.top + subMargin.bottom) * 3);
}

/**
 * @class ApplicationOverview
 * Renders Application Overview visualization (error, response time, health statistics).
 */
class ApplicationOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visualization: null
    };
  }

  render() {
    return <div className="application-overview-visualization">
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

export default ApplicationOverview;
