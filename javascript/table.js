var number = [1,2,3,4,5,6,7,8,9,10,11];

var data = d3.select('#table').append('div').classed('data',true);

var updateRow = function(operations){
	var keys = Object.keys(operations);
	for (var i = 0; i < keys.length; i++) {
		var selection = data
			.append('div')
			.classed(keys[i],true);

		selection.append('div')
			.text(keys[i])
			.classed('operationValue',true);

		selection.selectAll('operationValue')
			.data(number)
			.enter()
			.append('div')
			.text(function(d){return operations[keys[i]](d)})
			.classed('operationValue',true);
	}
}

var log = function(d){
	return d3.scaleLog()(d).toFixed(4);
}

var operations = {  
					'title' : d3.scaleLinear().domain([1,10]).range([1,10]),
					'n' : d3.scaleLinear().domain([1,10]).range([1,10]),
					'n_square' : d3.scalePow().exponent(2),
					'log' : log,
					'rounded_log' : d3.scaleLog().rangeRound([0,1]),
					'cube' : d3.scalePow().exponent(3)
				 }; 

window.onload = function(){
	updateRow(operations);
}