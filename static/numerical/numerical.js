/*!
 * previewer.js v0.0.1
 * https://github.com/yuinchien/font
 *
 * Copyright (c) 2017 Yuin Chien
 *
 */

function Numerical(glyph, theme) {

	var self = this;

	this.mapping = {
		'0': 'zero',
		'1': 'one',
		'2': 'two',
		'3': 'three',
		'4': 'four',
		'5': 'five',
		'6': 'six',
		'7': 'seven',
		'8': 'eight',
		'9': 'nine',
		':': 'colon',
		'.': 'dot',
		'+': 'plus',
		'=': 'equal',
		'-': 'minus',
	};

	this.theme = {
		'default': ['#000', '#fff'],
		'dark': ['#000', '#666'],
		'light': ['#999', '#fff'],
	};

	this.shapes = {};

	this.shapes['zero'] = {'circle':'conic -145'};
	this.shapes['one'] = {'rect rounded-top-left rounded-bottom-right':'linear 45'};
	this.shapes['two'] = {'circle':'conic 135', 'rect rounded-top-left':'linear -225'};
	this.shapes['three'] = {'rect':'conic -50', 'circle':'conic 45'};
	this.shapes['four'] = {'rect ':'conic 135', 'rect rounded-top-left ':'linear 45'};
	this.shapes['five'] = {'rect':'conic -50', 'circle':'conic 45'};
	this.shapes['six'] = {'rect':'conic -50', 'circle':'conic 45'};
	this.shapes['five'] = {'rect rounded-bottom-right':'linear -45', 'circle':'conic -90'};
	this.shapes['six'] = {'rect rounded-top-left': 'linear 45', 'circle':'conic -90'};
	this.shapes['seven'] = {'rect rounded-bottom-right rounded-top-left':'linear 45', 'rect rounded-bottom-right':'linear 135'};
	this.shapes['eight'] = {'circle top':'conic 180', 'circle':'conic 0'};
	this.shapes['nine'] = {'rect rounded-bottom-right':'linear 125', 'circle':'conic -270'};
	this.shapes['colon'] = {'rect rounded-all top':'linear 45', 'rect rounded-all':'linear 45'};
	this.shapes['dot'] = {'rect rounded-all':'linear 45'};
	this.shapes['plus'] = {'rect':'conic 162'};
	this.shapes['equal'] = {'rect top':'linear -45', 'rect':'linear -45'};
	this.shapes['minus'] = {'rect':'linear -45'};

	var color1 = this.theme[theme][0];
	var color2 = this.theme[theme][1];

	var letter = document.createElement('div');
	letter.className = 'glyph ' + this.mapping[glyph];
	var shapes = this.shapes[ this.mapping[glyph] ];

	for(var key in shapes) {
		var shape = document.createElement("div");
		shape.className = key;
		var gradient = shapes[key].split(' ');
		if(gradient[0]=='linear') {
			shape.style.background = 'linear-gradient('+gradient[1]+'deg, '+ color1 + ' 0%, '+ color2 +' 100%)';
		} else {
			shape.style.background = 'conic-gradient(from '+gradient[1]+'deg, '+color2+', '+color1+')';
		}
		letter.appendChild(shape);
	}
	return letter;
}
