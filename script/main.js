(function () {
    'use strict';

    document.addEventListener("DOMContentLoaded", function (event) {
        var dataArray = [10, 20, 30, 40, 50, 60];

        var max = 60;
        
        var numTicks = 2;
        
        var containerWidth = 500,
            containerHeight = 500,
            width = 400,
            height = 400;

        var widthScale = d3
            .scale
            .linear()
            .domain([0, max])
            .range([0, width]);

        var colorScale = d3
            .scale
            .linear()
            .domain([9, max])
            .range(["red", "blue"]);

        var axis = d3
            .svg
            .axis()
            .scale(widthScale)
            .ticks(numTicks)
            .tickValues(function () {
                var vals = [0];
                
                for (var x = 1; x <= numTicks; x += 1) {
                    vals.push(max/x);
                }
                
                return vals;
            });

        var canvas = d3
            .select("body")
            .append("svg")
            .attr("width", containerWidth)
            .attr("height", containerHeight)
            .append("g")
            .attr("transform", "translate(10, 10)")
            
        canvas
            .append("g")
            .attr("transform", "translate(0, 400)")
            .call(axis);

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