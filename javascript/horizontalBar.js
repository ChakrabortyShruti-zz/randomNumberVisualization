const MIN = 0;
const MAX = 100;

var _divs;
var randomData = [];
for (var i = 0; i < 10; i++) {
	randomData.push(_.random(MIN,MAX));
}

var parentDiv = d3.select('#horizontal_bars');

var createBars = function(r){
	_divs = parentDiv
		.selectAll('div')
		.data(r,function(d){return d});

	var enteredList = _divs.enter().append('div')
		.attr('class','bar')
		.style('height',10)
		.style('color','white');

	enteredList.style('width',function(d){return (d*10)+'px'})
		.style('background-color',function(d){return d3.rgb(10,40,50+d*2)})
		.text(function(d){return d;});

	_divs.exit().remove();
}

var changeData = function(){
	randomData.shift();
	randomData.push(_.random(MIN,MAX))
	createBars(randomData);
}

window.onLoad = createBars(randomData);
setInterval(changeData,1000);