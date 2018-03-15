
const minYear = d3.min(birthData, d => d.year);
const maxYear = d3.max(birthData, d => d.year);
const maxBirths = d3.max(birthData, d => d.births);
const width = 600;
const height = 600;
const barPadding = 10;
const numBars = 12;
const barWidth = (width - (numBars - 1) * barPadding) / numBars;

var yScale = d3.scaleLinear()
                 .domain([0, maxBirths])
                 .range([height, 0]);

d3.select("input")
    .property("min", minYear)
    .property("max", maxYear)
    .property("value", minYear);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .selectAll("rect")
  .data(birthData.filter(function(d) {
    return d.year === minYear;
  }))
  .enter()
  .append("rect")
    .attr("width", barWidth)
    .attr("height",function(d) {
      return height - yScale(d.births);
    })
    .attr("y", function(d) {
      return yScale(d.births);
    })
    .attr("x", function(d,i) {
      return (barWidth + barPadding) * i;
    })
    .attr("fill", "purple");

d3.select("input")
    .on("input", function() {
      var year = +d3.event.target.value;
      d3.selectAll("rect")
        .data(birthData.filter(function(d) {
          return d.year === year;
        }))
          .attr("height",function(d) {
              return height - yScale(d.births);
          })
          .attr("y", function(d) {
              return yScale(d.births);
          })
    });