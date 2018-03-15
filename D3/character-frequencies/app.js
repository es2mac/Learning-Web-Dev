

const width = 800;
const height = 400;
const barPadding = 10;

const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

d3.select("#reset")
    .on("click", function() {
      d3.selectAll(".letter")
        .remove();

      d3.select("#phrase")
          .text("");

      d3.select("#count")
          .text("");
    });


d3.select("form")
    .on("submit", function() {
      d3.event.preventDefault();
      var input = d3.select("input");
      var text = input.property("value");
      var data = getFrequencies(text);
      var barWidth = width / data.length - barPadding;

      var letters = svg
          .selectAll(".letter")
          .data(data, function(d) {
              return d.character;
          });

      letters
          .classed("new", false)
        .exit()
          .remove();

        letters
          .enter()
          .append("rect")
            .classed("letter", true)
            .classed("new", true)
          .merge(letters)
            .style("width", barWidth)
            .style("height", function(d) {
                return d.count * 20;
            })
            .style("x", function(d, i) {
                console.log(i);
                return i * (barWidth + barPadding);
            })
            .style("y", function(d, i) {
                return height - d.count * 20;
            })

        d3.select("#phrase")
            .text("Analysis of: " + text);

      d3.select("#count")
          .text("(New characters: " + letters.enter().nodes().length + ")");

      input.property("value", "");
    });

function getFrequencies(str) {
  var sorted = str.split("").sort();
  var data = [];
  for (var i = 0; i < sorted.length; i++) {
    var last = data[data.length - 1];
    if (last && last.character === sorted[i]) last.count++;
    else data.push({ character: sorted[i], count: 1 });
  }
  return data;
}