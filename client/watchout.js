// start slingin' some d3 here.
var width = 800;
var height = 600;

//draw the svg element
var svg = d3.select(".board").append("svg")
    .attr("width", width)
    .attr("height", height);

//create random positions within width and height
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//draw the enemies inside of the svg element

//creates all the enemies to bind to the DOM via data
var enemies = _.range(30);

//binding the enemies to the actual svg elements and appending ellipses
svg.selectAll(".enemy")
  .data(enemies)
  .enter()
  .append("ellipse")
  .attr("cx", function(){ return getRandomInt(width)})
  .attr("cy", function(){ return getRandomInt(height)})
  .attr("rx", "10")
  .attr("ry", "10")
  .attr("class", "enemy")
  .style("fill", "red");

// setInterval(cb, time)
//reset the position of the element every second
setInterval(function(){
  svg.selectAll(".enemy")
  .data(enemies)
  .transition()
  .duration(1000)
  .attr("cx", function(){ return getRandomInt(width)})
  .attr("cy", function(){ return getRandomInt(height)});
}, 2000);

// create player

var drag = d3.behavior.drag()
  .on('drag', function () {
    d3.select(this)
      .attr("cx", d3.event.x)
      .attr("cy", d3.event.y)
  });

var player = svg.selectAll(".player")
  .data([0])
  .enter()
  .append("ellipse")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("rx", "10")
  .attr("ry", "10")
  .attr("class", "player")
  .style("fill", "green")
  .call(drag);








