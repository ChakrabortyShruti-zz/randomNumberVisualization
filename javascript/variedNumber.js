const HEIGHT = 400;
const WIDTH = 600;

var numbers = [0,1,2,3,4,5,6,7,8,9,10];

var div = d3.select('#numbers')
	.append('div')
	.attr('width', WIDTH)
	.attr('height', HEIGHT)
	.classed('container',true);

var font_scale = d3.scaleLinear()
	.domain([0,10])
	.range(['italic bold 12px/30px Georgia, serif','italic bold 120px/180px Georgia, serif']);

div.selectAll('div')
	.data(numbers)
	.enter()
	.append('div')
	.text(function(d){return d})
	.style('font',function(d){return font_scale(d)})
	.style('float','left')
	.style('border-style','groove')
	.style('border-width','thin')
	.style('margin','3px')
	.style('padding','10px')
	.classed('variedNumber',true);


