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

        var circle = canvas
            .append("circle")
            .attr("cx", 50)
            .attr("cy", 100)
            .attr("fill", "black")
            .attr("r", 25);
        
        transitionStart(circle);
    }
    
    function transitionStart(circle) {
        circle
            .transition()
            .duration(1500)
            .attr("cx", 150)
            .attr("cy", 150)
            .attr("fill", "white")
            .each("end", function () {
                transitionReturn(circle);
            });
    }
    
    function transitionReturn(circle) {
        circle
            .transition()
            .duration(1500)
            .attr("cx", 50)
            .attr("cy", 100)
            .attr("fill", "black")
            .each("end", function () {
                transitionStart(circle);
            });
    }
}());