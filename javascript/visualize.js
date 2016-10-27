const MARGIN = 30;
const HEIGHT = 400;
const WIDTH = 600;
const MAX = 100;
const MIN = 1;
const INNER_HEIGHT = HEIGHT - 2*MARGIN;
const INNER_WIDTH = WIDTH - 2*MARGIN;

var _g,_yScale,_xScale,_svg,_line,_rect;

var randomData = [];
for (var i = 0; i < 10; i++) {
	randomData.push(_.random(MIN,MAX));
}

line = d3.line()
		.x(function(d,i) { return _xScale(i);})
		.y(function(d){ return _yScale(d);})

var createChart = function(chartId){
	_svg = d3.select('#'+chartId).append('svg')
			.attr('width', WIDTH)
			.attr('height', HEIGHT)
			.classed('svg',true);


	_xScale = d3.scaleLinear()
		.domain([0,10])
		.range([0,WIDTH - 2*MARGIN]);

	_yScale = d3.scaleLinear()
		.domain([0,100])
		.range([HEIGHT - 2*MARGIN,0]);

	var xAxis = d3.axisBottom(_xScale).ticks(10);
	var yAxis = d3.axisLeft(_yScale).ticks(10);

	_svg.append('g')
		.attr('transform', 'translate('+MARGIN+', '+(HEIGHT - MARGIN)+')')
		.call(xAxis);

	_svg.append('g')
		.attr('transform', 'translate('+(MARGIN)+', '+ (MARGIN) +')')
		.call(yAxis);

	_svg.append('g')
		.attr('transform','translate('+MARGIN+', '+MARGIN+')')
		.classed(chartId,true);
}

var loadBarChart = function(r,id){
	_rect = d3.select('.'+id)
		.selectAll('rect')
		.data(r);

	_rect.enter()
		.append('rect')
		.attr('width',INNER_WIDTH/(10*2));
}

var updateBarChart = function(r,id){
	_rect.attr('x',function(d,i) { return _xScale(i);})
		.attr('y',function(d){return _yScale(d);})
		.attr('height',function(d){return INNER_HEIGHT-_yScale(d);});

	_rect.selectAll('rect').exit().remove();
}

var createLineChart = function(r,id){
	var path = d3.select('.'+id).append("path");
	path.attr('d',line(r));
}

var updateLineGraph = function(r,id){
	d3.select('.'+id)
		.select('path')
		.attr('d',line(r));
}

var changeChart = function(){
	randomData.shift();
	randomData.push(_.random(MIN,MAX));
	loadBarChart(randomData,'bar_graph');
	updateBarChart(randomData,'bar_graph');
	updateLineGraph(randomData,'line_chart');
};

window.onload = function(){
	createChart('bar_graph');
	createChart('line_chart');
	createLineChart(randomData,'line_chart');
}
setInterval(changeChart,400);