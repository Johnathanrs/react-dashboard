var gaugeContainerSideLength = 32;
var gaugeTransform = 'translate(' + (gaugeContainerSideLength/2) + ',' + (gaugeContainerSideLength/2) + ')';
var gaugeBackColor = '#e8eef0';
var gaugeForeColor = '#4fb1e2';
var letterSpacing = '1.40971704';
var fontSize = '10.47494996';
var arcScale = d3.scaleLinear().domain([0, 100]).range([0, Math.PI * 2]);
var sideScale = d3.scaleLinear().domain([0, 100]).range([0, gaugeContainerSideLength]);
var fullArc = Math.PI * 2;

d3.json("http://localhost:3000/api/container_stats/current/top5/cpu", function (error, data) {
  console.log('cpuCard: got CPU data', data);
  dataViz(data)
});

function dataViz(incomingData) {

  function buildGauge(gaugeIndex) {
    d3.select("#cpu")
      .select('.left' + (gaugeIndex+1) + ' h4')
      .html(incomingData[gaugeIndex].Names.toString().substring(0, 16));

    var canvas = d3.select("#cpu").select('.right' + (gaugeIndex+1)).append("svg")
      .attr("width", gaugeContainerSideLength)
      .attr("height", gaugeContainerSideLength);

    var group = canvas.append("g")
      .attr("transform", gaugeTransform);

    var arcInner = d3.arc()
      .innerRadius(sideScale(40))
      .outerRadius(sideScale(48))
      .startAngle(0)
      .endAngle(arcScale(Math.ceil(incomingData[gaugeIndex].percent)));

    var arcOuter = d3.arc()
      .innerRadius(sideScale(40))
      .outerRadius(sideScale(48))
      .startAngle(0)
      .endAngle(fullArc);

    group.append("path")
      .attr("d", arcOuter)
      .attr("fill", gaugeBackColor);

    group.append("path")
      .attr("d", arcInner)
      .attr("fill", gaugeForeColor)
      .style("opacity", 0.800000012);

    var text = group.selectAll("text")
      .data([Math.ceil(incomingData[gaugeIndex].percent)])
      .enter()
      .append("text");

    var textLabels = text
      .attr('text-anchor', 'middle')
      .attr("y", 4)
      .text(function (d) {
          return d + "%";
      })
      .attr("font-family", "San Francisco")
      .attr("font-size", fontSize)
      .attr("fill", "#4D4E57")
      .attr("font-weight", "regular")
      .attr("letter-spacing", letterSpacing);
  }

  [0, 1, 2, 3, 4].forEach(function (gaugeIndex) {
    buildGauge(gaugeIndex);
  });

  d3.select("#svgdataurl").remove();
}
