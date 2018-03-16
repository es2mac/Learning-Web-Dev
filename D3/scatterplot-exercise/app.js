
// x: urban population rate
// y: subscribers per 100

const width = 600;
const height = 600;
const padding = 40;

// Scales
const xScale = d3.scaleLinear()
    .domain(d3.extent(regionData, d => d.urbanPopulationRate))
    .range([padding, width - padding]);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(regionData, d => d.subscribersPer100)])
    .range([height - padding, padding]);

// Axes
const xAxis = d3.axisBottom(xScale)
    .tickSize(-(width - 2 * padding))
    .tickSizeOuter(0);

const yAxis = d3.axisLeft(yScale)
    .tickSize(-(height - 2 * padding))
    .tickSizeOuter(0);

// Setup
const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height)

svg.insert("g")
    .attr("transform", `translate(0, ${height - padding})`)
    .call(xAxis)
    .select("line");

svg.insert("g")
    .attr("transform", `translate(${padding}, 0)`)
    .call(yAxis)
  .select(".tick>line")
    .remove();

svg.insert("g")
  .selectAll("circle")
  .data(regionData)
  .enter()
  .append("circle")
    .attr("cx", d => xScale(d.urbanPopulationRate))
    .attr("cy", d => yScale(d.subscribersPer100))
    .attr("r", 5)
    .attr("fill", "#255C69");

svg.insert("text")
    .text("blah")
    .attr("font-size", "2em")
    .attr("transform", `translate(${width/2}, ${padding})`);


