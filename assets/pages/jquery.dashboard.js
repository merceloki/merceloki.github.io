
/**
* Theme: Ubold Admin Template
* Author: Coderthemes
* Morris Chart
*/

!function($) {
    "use strict";

    var Dashboard1 = function() {
    	this.$realData = []
    };
    
    //creates Stacked chart
    Dashboard1.prototype.createStackedChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            stacked: true,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#eeeeee',
            barColors: lineColors
        });
    },

    //creates area chart with dotted
    Dashboard1.prototype.createAreaChartDotted = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 0,
            lineWidth: 0,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            pointFillColors: Pfillcolor,
            pointStrokeColors: Pstockcolor,
            resize: true,
            gridLineColor: '#eef0f2',
            lineColors: lineColors
        });

   },

    //creates Bar chart
    Dashboard1.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#eeeeee',
            barColors: lineColors
        });
    },
    
   //creates Donut chart
    Dashboard1.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true, //defaulted to true
            colors: colors
        });
    },
    
    Dashboard1.prototype.init = function() {

        //creating Stacked chart
        var $stckedData  = [
            { y: 'Jan', a: 0, b: 180, c: 0, d: 0 },
            // { y: 'Feb', a: 75,  b: 65, c: 80, d: 51 },
            // { y: 'Mar', a: 100, b: 90, c: 56, d: 122 },
            // { y: 'Apr', a: 190,  b: 0, c: 0, d: 0 },
            { y: 'May', a: 100, b: 0, c: 0, d: 0 },
            // { y: 'Jun', a: 75,  b: 65, c: 110, d: 42 },
            // { y: 'Jul', a: 50,  b: 40, c: 85, d: 31 },
            // { y: 'Aug', a: 75,  b: 65, c: 52, d: 61 },
            { y: 'Sep', a: 0,  b: 0, c: 200, d: 0 },
            // { y: 'Oct', a: 75,  b: 65, c: 90, d: 99 },
            // { y: 'Nov', a: 100, b: 90, c: 130, d: 22 },
            { y: 'Dec', a: 0, b: 0, c: 0, d: 22 }

        ];
        this.createStackedChart('morris-bar-stacked', $stckedData, 'y', ['a', 'b', 'c', 'd'], ['Plano 1', 'Plano 2', 'Plano 3', 'Plano 4'], ['#E23260', '#87D37C', '#F5D76E', '#0A60AB']);
 
        //creating donut chart
        var $donutData = [
                {label: "Assoc. 3", value: 12},
                {label: "Assoc. 1", value: 30},
                {label: "Assoc. 2", value: 20}
            ];
        // this.createDonutChart('morris-donut-example', $donutData, ['#ebeff2', '#5fbeaa', '#5d9cec']);
        // this.createDonutChart('morris-donut-pontos-assoc-mes', $donutData, ['#ebeff2', '#5fbeaa', '#5d9cec']);
    
        //creating bar chart
        var $barData  = [
            { y: '2009', a: 100, b: 90 , c: 40, d: 12 },
            { y: '2010', a: 75,  b: 65 , c: 20, d: 24 },
            { y: '2011', a: 50,  b: 40 , c: 50, d: 25 },
            { y: '2012', a: 75,  b: 65 , c: 95, d: 62 },
            { y: '2013', a: 50,  b: 40 , c: 22, d: 82 },
            { y: '2014', a: 75,  b: 65 , c: 56, d: 12 },
            { y: '2015', a: 100, b: 90 , c: 60, d: 22 }
        ];
        this.createBarChart('bar-chart-socio-cidade', $barData, 'y', ['a', 'b', 'c', 'd'], ['Plano 1', 'Plano 2', 'Plano 3', 'Plano 4'], ['#E23260', '#87D37C', '#F5D76E', '#0A60AB']);
        this.createBarChart('bar-chart-socio-mes', $barData, 'y', ['a', 'b', 'c', 'd'], ['Plano 1', 'Plano 2', 'Plano 3', 'Plano 4'], ['#E23260', '#87D37C', '#F5D76E', '#0A60AB']);

        //creating area chart
        var $areaDotData = [
                { y: '2009', a: 10, b: 20, c:30 },
                { y: '2010', a: 75,  b: 65, c:30 },
                { y: '2011', a: 50,  b: 40, c:30 },
                { y: '2012', a: 75,  b: 65, c:30 },
                { y: '2013', a: 50,  b: 40, c:30 },
                { y: '2014', a: 75,  b: 65, c:30 },
                { y: '2015', a: 90, b: 60, c:30 }
            ];
        // this.createAreaChartDotted('morris-area-with-dotted', 0, 0, $areaDotData, 'y', ['a', 'b', 'c'], ['Desktops ', 'Tablets ', 'Mobiles '],['#ffffff'],['#999999'], ['#5fbeaa', '#5d9cec','#ebeff2']);

    },

    //init
    $.Dashboard1 = new Dashboard1, $.Dashboard1.Constructor = Dashboard1
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.Dashboard1.init();
}(window.jQuery);


