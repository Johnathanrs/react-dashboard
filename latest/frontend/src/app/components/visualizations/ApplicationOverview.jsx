import React from 'react';
import * as d3 from "d3";


var parseTime2 = d3.timeParse("%Y-%m-%dT%H:%M:%SZ");
console.log("parsing date string")
console.log(parseTime2("2016-10-05T00:00:00Z"))


function initGraph4(container, data) {
  console.log("logging container")
  console.log(container)
  console.log("logging data")
  console.log(data)
  container.html("");
  var containerSize = container.node().getBoundingClientRect();

  var margin = {top: 20, right: 20, bottom: 40, left: 170},
    subMargin = {top: 20, bottom: 10},
    width = containerSize.width - margin.left - margin.right,
    height = (containerSize.height - margin.top - margin.bottom) / 4 - (subMargin.top + subMargin.bottom);
  console.log(width)
  console.log(height)

  var x = d3.scaleTime().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]),
    y1 = d3.scaleLinear().range([height, 0]),
    y2 = d3.scaleLinear().range([height, 0]),
    y3 = d3.scaleLinear().range([height, 0]),
    y4 = d3.scaleLinear().range([height, 0]);

  var xFormat = d3.timeFormat("%I %p");
  x.tickFormat(xFormat);


//    var xAxis = d3.svg.axis().scale(x).orient("bottom");
  var xAxis = d3.axisBottom().scale(x);

  var area1 = d3.area().x(function (d) {
    return x(d.t);
  }).y0(height).y1(function (d) {
    return y1(d.health);
  });
  var area2 = d3.area().x(function (d) {
    return x(d.t);
  }).y0(height).y1(function (d) {
    return y2(d.errorCount);
  });
  var area3 = d3.area().x(function (d) {
    return x(d.t);
  }).y0(height).y1(function (d) {
    return y3(d.errorDeviation);
  });
  var area4 = d3.area().x(function (d) {
    return x(d.t);
  }).y0(height).y1(function (d) {
    return y4(d.responseTime);
  });

  var line1 = d3.line().x(function (d) {
    return x(d.t);
  }).y(function (d) {
    return y1(d.health);
  });
  var line2 = d3.line().x(function (d) {
    return x(d.t);
  }).y(function (d) {
    return y2(d.errorCount);
  });
  var line3 = d3.line().x(function (d) {
    return x(d.t);
  }).y(function (d) {
    return y3(d.errorDeviation);
  });
  var line4 = d3.line().x(function (d) {
    return x(d.t);
  }).y(function (d) {
    return y4(d.responseTime);
  });

  var svgRoot = container.append("svg").attr("width", containerSize.width).attr("height", containerSize.height);

  var colors = [["#4FB1E2", "#E7F3FB"], ["#777CA4", "#EAEBF1"], ["#FF7551", "#FDEDE6"], ["#FFB800", "#FDF9DD"]];
  var defs = svgRoot.append("defs");

  colors.forEach(function (d, i) {
    var color = defs.append("linearGradient").attr("id", "color" + (i + 1)).attr("x1", "50%").attr("y1", "0%").attr("x2", "50%").attr("y2", "100%");
    color.append("stop").attr("offset", "0%").attr("stop-color", d[1]);
    color.append("stop").attr("offset", "100%").attr("stop-color", "#FFFFFF");
  });

  var clipRect = defs.append("clipPath").attr("id", "rectClip").append("rect").attr("width", 0).attr("height", containerSize.height);

  var svg = svgRoot.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")").attr("clip-path", "url(#rectClip)");

  svgRoot.append("line").attr("class", "separator")
    .attr("x1", 0).attr("y1", (height + subMargin.top + subMargin.bottom) + margin.top).attr("x2", (width + margin.left)).attr("y2", (height + subMargin.top + subMargin.bottom) + margin.top);
  svgRoot.append("line").attr("class", "separator")
    .attr("x1", 0).attr("y1", (height + subMargin.top + subMargin.bottom) * 2 + margin.top).attr("x2", (width + margin.left)).attr("y2", (height + subMargin.top + subMargin.bottom) * 2 + margin.top);
  svgRoot.append("line").attr("class", "separator")
    .attr("x1", 0).attr("y1", (height + subMargin.top + subMargin.bottom) * 3 + margin.top).attr("x2", (width + margin.left)).attr("y2", (height + subMargin.top + subMargin.bottom) * 3 + margin.top);
  svgRoot.append("line").attr("class", "separator")
    .attr("x1", 0).attr("y1", (height + subMargin.top + subMargin.bottom) * 4 + margin.top).attr("x2", (width + margin.left)).attr("y2", (height + subMargin.top + subMargin.bottom) * 4 + margin.top);

  var svg1 = svg.append("g").attr("transform", "translate(0," + subMargin.top + ")");
  var svg2 = svg.append("g").attr("transform", "translate(0," + (subMargin.top * 2 + height + subMargin.bottom) + ")");
  var svg3 = svg.append("g").attr("transform", "translate(0," + (subMargin.top * 3 + height * 2 + subMargin.bottom * 2) + ")");
  var svg4 = svg.append("g").attr("transform", "translate(0," + (subMargin.top * 4 + height * 3 + subMargin.bottom * 3) + ")");

  x.domain(d3.extent(data.samples, function (d) {
    return d.t;
  }));
  y1.domain([0, d3.max(data.samples, function (d) {
    return d.health;
  })]);
  y2.domain([0, d3.max(data.samples, function (d) {
    return d.errorCount;
  })]);
  y3.domain([0, d3.max(data.samples, function (d) {
    return d.errorDeviation;
  })]);
  y4.domain([0, d3.max(data.samples, function (d) {
    return d.responseTime;
  })]);

  svg1.append("path").datum(data.samples).attr("class", "area").style("fill", "url(#color1)").attr("d", area1);
  svg2.append("path").datum(data.samples).attr("class", "area").style("fill", "url(#color2)").attr("d", area2);
  svg3.append("path").datum(data.samples).attr("class", "area").style("fill", "url(#color3)").attr("d", area3);
  svg4.append("path").datum(data.samples).attr("class", "area").style("fill", "url(#color4)").attr("d", area4);

  svg1.append("path").datum(data.samples).attr("class", "line").style("stroke", colors[0][0]).attr("d", line1);
  svg2.append("path").datum(data.samples).attr("class", "line").style("stroke", colors[1][0]).attr("d", line2);
  svg3.append("path").datum(data.samples).attr("class", "line").style("stroke", colors[2][0]).attr("d", line3);
  svg4.append("path").datum(data.samples).attr("class", "line").style("stroke", colors[3][0]).attr("d", line4);

  var dataDots = data.samples.slice(1, data.samples.length - 1);
  var lastDot = dataDots[dataDots.length - 1];

  svg1.selectAll("dot").data(dataDots).enter()
    .append("circle").attr("r", 3).style("stroke", colors[0][0]).style("stroke-width", 3).style("fill", "#FFFFFF")
    .attr("cx", function (d) {
      return x(d.t);
    }).attr("cy", function (d) {
      return y1(d.health);
    });
  svg2.selectAll("dot").data(dataDots).enter()
    .append("circle").attr("r", 3).style("stroke", colors[1][0]).style("stroke-width", 3).style("fill", "#FFFFFF")
    .attr("cx", function (d) {
      return x(d.t);
    }).attr("cy", function (d) {
      return y2(d.errorCount);
    });
  svg3.selectAll("dot").data(dataDots).enter()
    .append("circle").attr("r", 3).style("stroke", colors[2][0]).style("stroke-width", 3).style("fill", "#FFFFFF")
    .attr("cx", function (d) {
      return x(d.t);
    }).attr("cy", function (d) {
      return y3(d.errorDeviation);
    });
  svg4.selectAll("dot").data(dataDots).enter()
    .append("circle").attr("r", 3).style("stroke", colors[3][0]).style("stroke-width", 3).style("fill", "#FFFFFF")
    .attr("cx", function (d) {
      return x(d.t);
    }).attr("cy", function (d) {
      return y4(d.responseTime);
    });

  svg1.append("circle").attr("r", 6).style("stroke", colors[0][0]).style("stroke-width", 4).style("fill", "none").style("opacity", 0.4)
    .attr("cx", x(lastDot.t)).attr("cy", y1(lastDot.health));
  svg1.append("circle").attr("r", 10).style("stroke", colors[0][0]).style("stroke-width", 5).style("fill", "none").style("opacity", 0.1)
    .attr("cx", x(lastDot.t)).attr("cy", y1(lastDot.health));

  svg2.append("circle").attr("r", 6).style("stroke", colors[1][0]).style("stroke-width", 4).style("fill", "none").style("opacity", 0.4)
    .attr("cx", x(lastDot.t)).attr("cy", y2(lastDot.errorCount));
  svg2.append("circle").attr("r", 10).style("stroke", colors[1][0]).style("stroke-width", 5).style("fill", "none").style("opacity", 0.1)
    .attr("cx", x(lastDot.t)).attr("cy", y2(lastDot.errorCount));

  svg3.append("circle").attr("r", 6).style("stroke", colors[2][0]).style("stroke-width", 4).style("fill", "none").style("opacity", 0.4)
    .attr("cx", x(lastDot.t)).attr("cy", y3(lastDot.errorDeviation));
  svg3.append("circle").attr("r", 10).style("stroke", colors[2][0]).style("stroke-width", 5).style("fill", "none").style("opacity", 0.1)
    .attr("cx", x(lastDot.t)).attr("cy", y3(lastDot.errorDeviation));

  svg4.append("circle").attr("r", 6).style("stroke", colors[3][0]).style("stroke-width", 4).style("fill", "none").style("opacity", 0.4)
    .attr("cx", x(lastDot.t)).attr("cy", y4(lastDot.responseTime));
  svg4.append("circle").attr("r", 10).style("stroke", colors[3][0]).style("stroke-width", 5).style("fill", "none").style("opacity", 0.1)
    .attr("cx", x(lastDot.t)).attr("cy", y4(lastDot.responseTime));

  svgRoot.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(" + margin.left + "," + (containerSize.height - margin.bottom + 5) + ")")
    .call(xAxis);

  svgRoot.append("text").attr("class", "info-title").text("Reported Availability").attr("x", 20).attr("y", margin.top + 25);
  svgRoot.append("text").attr("class", "info-value").text(data.summary.health * 100 + "%").attr("x", 20).attr("y", margin.top + 55);
  svgRoot.append("text").attr("class", "info-title").text("Error Count").attr("x", 20).attr("y", margin.top + 25 + (height + subMargin.top + subMargin.bottom));
  svgRoot.append("text").attr("class", "info-value").text(data.summary.errorCount).attr("x", 20).attr("y", margin.top + 55 + (height + subMargin.top + subMargin.bottom));
  svgRoot.append("text").attr("class", "info-title").text("Deviation Errors").attr("x", 20).attr("y", margin.top + 25 + (height + subMargin.top + subMargin.bottom) * 2);
  svgRoot.append("text").attr("class", "info-value").text(data.summary.errorDeviation).attr("x", 20).attr("y", margin.top + 55 + (height + subMargin.top + subMargin.bottom) * 2);
  svgRoot.append("text").attr("class", "info-title").text("Sample Response Time").attr("x", 20).attr("y", margin.top + 25 + (height + subMargin.top + subMargin.bottom) * 3);
  svgRoot.append("text").attr("class", "info-value").text(data.summary.responseTime).attr("x", 20).attr("y", margin.top + 55 + (height + subMargin.top + subMargin.bottom) * 3);

  clipRect.transition().duration(2000).attr("width", width + margin.left + margin.right);
}


//        d3.json("../../../../../../thesharpcoder/data40.json", function (error, json) {
d3.json("http://localhost:31338/thesharpcoder/data40.json", function (error, json) {

  const data4 = json;

  data4.samples.forEach(function (d) {
    d.t = parseTime2(d.time);
  });

  initGraph4(d3.select(".app-over"), data4);
//            initGraph4(d3.select(".app-over"), data4);

});
//const mockImageUrls = {
//  g1: require('../../img/g1.png'),
//  g2: require('../../img/g2.png'),
//  g3: require('../../img/g3.png'),
//  g4: require('../../img/g4.png'),
//  g5: require('../../img/g5.png')
//};

//const ApplicationOverview = () => <section className="app-over">
//  <article>
//    <div className="left">
//      <h4>Reported Availability</h4>
//
//      <p>24%</p>
//    </div>
//    <div className="right">
//      <img src={ mockImageUrls.g1 } alt=""/>
//    </div>
//  </article>
//  <article>
//    <div className="left">
//      <h4>Error Count</h4>
//
//      <p>124</p>
//    </div>
//    <div className="right">
//      <img src={ mockImageUrls.g2 } alt=""/>
//    </div>
//  </article>
//  <article>
//    <div className="left">
//      <h4>Deviation Errors</h4>
//
//      <p>48%</p>
//    </div>
//    <div className="right">
//      <img src={ mockImageUrls.g3 } alt=""/>
//    </div>
//  </article>
//  <article>
//    <div className="left">
//      <h4>Sample Response Time</h4>
//
//      <p>102</p>
//    </div>
//    <div className="right">
//      <img src={ mockImageUrls.g4 } alt=""/>
//    </div>
//  </article>
//  <article className="label">
//    <div className="left">
//    </div>
//    <div className="right">
//      <img src={ mockImageUrls.g5 } alt=""/>
//    </div>
//  </article>
//</section>;


const ApplicationOverview = () => <section className="app-over">

</section>;
export default ApplicationOverview;
