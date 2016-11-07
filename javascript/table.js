const WIDTH = 600;
const HEIGHT = 400;

var tagName = ['Title','n','n square','log(n)','log(n) rounded'];
var number = [1,2,3,4,5,6,7,8,9,10];

var tags = d3.select('#table')
	.append('div')
	.classed('tags',true);

tags.selectAll('div')
	.data(tagName)
	.enter()
	.append('div')
	.text(function(d){return d})
	.classed('tag',true);


var data = d3.select('#table')
	.append('div')
	.classed('data',true);

var row_0_div = data
	.append('div')
	.classed('row_0',true);

var row_0_child_divs = row_0_div.selectAll('div')
	.data(number)
	.enter()
	.append('div')
	.text(function(d){return d})
	.classed('number',true); 


var row_1_div = data
	.append('div')
	.classed('row_1',true);

var row_1_child_divs = row_1_div.selectAll('div')
	.data(number)
	.enter()
	.append('div')
	.text(function(d){return d})
	.classed('number',true); 

var row_2_div = data
	.append('div')
	.classed('row_2',true);

var square = d3.scalePow().exponent(2);	

var row_2_child_divs = row_2_div.selectAll('div')
	.data(number)
	.enter()
	.append('div')
	.text(function(d){return square(d)})
	.classed('number',true); 

var row_3_div = data
	.append('div')
	.classed('row_3',true);

var log = d3.scaleLog().base(10);

var row_3_child_divs = row_3_div.selectAll('div')
	.data(number)
	.enter()
	.append('div')
	.text(function(d){return log(d).toFixed(4)})
	.classed('number',true); 


var row_4_div = data
	.append('div')
	.classed('row_4',true);

var log = d3.scaleLog();

var row_4_child_divs = row_4_div.selectAll('div')
	.data(number)
	.enter()
	.append('div')
	.text(function(d){return Math.round(log(d))})
	.classed('number',true); 
