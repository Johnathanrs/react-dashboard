data=[10, 40, 60, 80, 100];
applications=["hadoop-nn", "hadoop-dn", "cassandra-seed", "cassandra-peer", "nginx-proxy"]
console.log(data)
console.log(applications)



d3.select('#memory')
    .selectAll('.purple')
    .data(data)
    .style("width", function(d) {return d.toString()+"%";} )


d3.select('#memory')
    .selectAll('.appName')
    .data(applications)
    .text(function (d) {return d})

d3.select('#memory')
    .selectAll('.right h4')
    .data(data)
    .text(function(d) {return d.toString()+"%";})

data.forEach(function(element) {
  // The asynchronous action simulator
  setTimeout(function() {
    console.log(element.toString() +"%");
  }, 100);
});

//works
//d3.select('#memory').data(data).selectAll('.purple')
//    .style("width", "90%")