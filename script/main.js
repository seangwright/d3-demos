(function () {
    'use strict';

    document.addEventListener("DOMContentLoaded", eListener);
    
    function eListener(event) {
        var data = [10, 20, 30, 40, 50];

        var canvas = d3
            .select("body")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500);

        var circle1 = canvas
            .append("circle")
            .attr("cx", 50)
            .attr("cy", 100)
            .attr("fill", "red")
            .attr("r", 25);
        
        var circle2 = canvas
            .append("circle")
            .attr("cx", 50)
            .attr("cy", 200)
            .attr("fill", "red")
            .attr("r", 25);

        var circles = canvas
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) {
                return d * 5 - 100;
            })
            .attr("cy", function (d) {
                return d * 5 - 100;
            })
            .attr("fill", "green")
            .attr("r", 25)
    }
}());