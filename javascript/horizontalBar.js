const MIN = 0;
const MAX = 100;

var _divs;
var randomData = [];
// var color = d3.color('steelblue');

for (var i = 0; i < 10; i++) {
	randomData.push(_.random(MIN,MAX));
}

var parentDiv = d3.select('#horizontal_bars');

var createBars = function(r){
	var divs = parentDiv
		.selectAll('div')
		.data(r);

	divs.enter().append('div')
		.attr('class','bar')
		.style('height',10)
		.style('background-color',function(d){return d3.rgb(10,40,50+d*2)})
		.style('color','white');

	divs.style('width',function(d){return (d*10)+'px'})
		.text(function(d){return d;});

	divs.exit().remove();
}

var changeData = function(){
	randomData.shift();
	randomData.push(_.random(MIN,MAX))
	createBars(randomData);
}

window.onLoad = createBars(randomData);
setInterval(changeData,1000);