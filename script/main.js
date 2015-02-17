(function () {
    'use strict';

    document.addEventListener("DOMContentLoaded", function (event) {
        var dataArray = [20, 40, 60];

        var width = 500,
            height = 500;

        var widthScale = d3
            .scale
            .linear()
            .domain([0, 60])
            .range([0, width]);

        var colorScale = d3
            .scale
            .linear()
            .domain([9, 60])
            .range(["red", "blue"]);

        var canvas = d3
            .select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        var bars = canvas
            .selectAll("rect")
            .data(dataArray)
            .enter()
            .append("rect")
            .attr("width", function (d) {
                return widthScale(d);
            })
            .attr("height", 50)
            .attr("x", 0)
            .attr("y", function (d, i) {
                return i * 60;
            })
            .attr("fill", function (d) {
                return colorScale(d);   
            });
    });
}());