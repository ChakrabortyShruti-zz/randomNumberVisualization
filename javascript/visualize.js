const MARGIN = 30;
const HEIGHT = 400;
const WIDTH = 600;
const MAX = 100;
const MIN = 1;
const INNER_HEIGHT = HEIGHT - 2*MARGIN;
const INNER_WIDTH = WIDTH - 2*MARGIN;

var _g,_yScale,_xScale,_svg;

var randomData = [];
for (var i = 0; i < 10; i++) {
	randomData.push(_.random(MIN,MAX));
}

var createChart = function(){
	d3.select('svg').remove();

	_svg = d3.select('.container').append('svg')
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

}

var loadBarChart = function(r){
	d3.select('.bars').remove();

	g = _svg.append('g')
		.attr('transform','translate('+MARGIN+', '+MARGIN+')')
		.classed('bars',true);

	var rect = g.selectAll('rect')
		.data(r);

	rect.enter().append('rect')
		.attr('x',function(d,i) { return _xScale(i);})
		.attr('y',function(d){return _yScale(d);})
		.attr('height',function(d){return INNER_HEIGHT-_yScale(d);})
		.attr('width',INNER_WIDTH/(10*2))
		.append('title')
		.text(function(d){return d;});

	g.selectAll('rect').exit().remove();
}

var loadLineGraph = function(){
	var path = g.append("path");

	var line = d3.line()
		.x(function(d,i) { return _xScale(i);})
		.y(function(d){
			console.log(d,"----1");
			return HEIGHT-_yScale(d);})

	path.attr("d",line(r));
}

var changeChart = function(){
	randomData.shift();
	randomData.push(_.random(MIN,MAX));
	loadBarChart(randomData);
};

window.onLoad = createChart();
setInterval(changeChart,1000);