
// x: birth per capita
// y: life expectancy
// color: population density
// size: births

// Constants
const width = 500;
const height = 500;
const padding = 32;
const yMax = d3.max(birthData2011, d => d.lifeExpectancy);

// Scales
const yScale = d3.scaleLinear()
    .domain([0, yMax])
    .range([height - padding, padding]);

const xScale = d3.scaleLinear()
    .domain(d3.extent(birthData2011, d => d.births / d.population))
    .range([padding, width - padding]);

const colorScale = d3.scaleLinear()
    .domain(d3.extent(birthData2011, d => d.population / d.area))
    .range(['lightgreen', 'black']);

const radiusScale = d3.scaleLinear()
    .domain(d3.extent(birthData2011, d => d.births))
    .range([2, 40]);

// Axes
const xAxis = d3.axisBottom(xScale)
    .tickSize(-(height + 2 * padding))
    .tickSizeOuter(0);  // Remove rightmost tick

const yAxis = d3.axisLeft(yScale)
    .tickSize(-(width + 2 * padding))
    .tickSizeOuter(0);

// Initialization
d3.select("svg")
    .append("g")
    .attr("transform", `translate(0,${height - padding})`)
    .call(xAxis);

d3.select("svg")
    .append("g")
    .attr("transform", `translate(${padding})`)
    .call(yAxis);

d3.select("svg")
    .attr("height", height)
    .attr("width", width)
  .append("g")
  .selectAll("circle")
  .data(birthData2011)
  .enter()
    .append("circle")
    .attr("cx", d => xScale(d.births / d.population))
    .attr("cy", d => yScale(d.lifeExpectancy))
    .attr("fill", d => colorScale(d.population / d.area))
    .attr("r", d => radiusScale(d.births));

d3.select("svg")
    .append("text")
    .attr("x", width / 2)
    .attr("y", height - padding)
    .attr("dy", "1.5em")
    .style("text-anchor", "middle")
    .text("Births per Capita");

// TODO: BUGS HERE
d3.select("svg")
    .append("text")
    .attr("x", width / 2)
    .attr("y", -(height - padding))
    .attr("dy", "1.5em")
    .style("text-anchor", "middle")
    .text("Life Expectancy")
    .attr("transform", "rotate(-90)");

d3.select("svg")
    .append("text")
    .attr("x", width / 2)
    .attr("y", padding)
    .style("text-anchor", "middle")
    .attr("font-size", "1.5em")
    .text("Data on Births by Country in 2011");



