var tagName = ['Title','n','n square','log(n)','log(n) rounded','cube'];
var number = [1,2,3,4,5,6,7,8,9,10,11];

var createDiv = function(className){
	return d3.select('#table').append('div').classed(className,true);
}

var tags = createDiv('tags');
tags.selectAll('div')
	.data(tagName)
	.enter()
	.append('div')
	.text(function(d){return d})
	.classed('tag',true);

var data = createDiv('data');
var updateRow = function(className,scale){
	var selection = data
		.append('div')
		.classed('row_0',true);

	selection.selectAll('div')
		.data(number)
		.enter()
		.append('div')
		.text(function(d){return scale(d)})
		.classed('number',true);
}

var log = function(d){
	return d3.scaleLog()(d).toFixed(4);
}

var row_0_div = updateRow('row_0',d3.scaleLinear().domain([1,10]).range([1,10]));
var row_1_div = updateRow('row_1',d3.scaleLinear().domain([1,10]).range([1,10]));
var row_2_div = updateRow('row_2',d3.scalePow().exponent(2));
var row_3_div = updateRow('row_3',log);
var row_4_div = updateRow('row_4',d3.scaleLog().rangeRound([0,1]));
var row_5_div = updateRow('row_5',d3.scalePow().exponent(3));
