var studentReport = [
	{name:'ramesh',subject:'maths',score:87},
	{name:'suresh',subject:'maths',score:45},
	{name:'pokemon',subject:'english',score:65},
	{name:'mary',subject:'kannada',score:44},
	{name:'riya',subject:'science',score:72},
	{name:'katie',subject:'social studies',score:82},
	{name:'katie',subject:'maths',score:98},
	{name:'ramesh',subject:'bengali',score:25},
	{name:'suresh',subject:'science',score:55},
	{name:'riya',subject:'tamil',score:75},
	{name:'pokemon',subject:'sports',score:95},
	{name:'pokemon',subject:'social studies',score:32}
];
var subjects = ['maths','english','kannada','science','social studies','bengali','tamil','sports'];
var colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(subjects);

var _scores;

var addLegends = function(){
	d3.select('#legends')
		.selectAll('div')
		.data(subjects)
		.enter()
		.append('div')
		.style('width','70px')
		.style('background-color',function(d){return colorScale(d)})
		.text(function(d){return d})
		.classed('legend',true);
}

var createChart = function(){
	var div = d3.select('#scores')
		.selectAll('div')
		.data(studentReport);

	_scores = div.enter()
		.append('div')
		.attr('class','bar')
		.style('height','25px')
		.style('color','white')
		.style('text-align','center')
		.style('width',function(d){return (d.score*5)+'px'})
		.text(function(d){return d.name +' '+d.score})
		.style('background-color',function(d){return colorScale(d.subject)})
}
var sortChart = function(type){
	_scores.sort(function(a,b){return d3.ascending(a[type],b[type])})
}

window.onload = function(){
	createChart();
	addLegends();
}
