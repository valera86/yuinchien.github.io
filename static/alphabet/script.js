

const EXPRESSION_LIST = ['OK','XO','HI','AH','NO','OH'];
const WEEKDAY_LIST = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
const COLOR_LIST = ['BLACK','GREEN','GREEN','WHITE','OLIVE','BROWN','CORAL','KHAKI','BEIGE','CREAM','IVORY'];
const NAME_LIST = ['JEFF','DORI','YUIN','ALEX','DEAN','JONO','STAN','JULE','ANDY','ZUNI','TONI','QINN','MATT','PAUL','NICK','MIKE','SARA','LISA','JEAN','ZACH','OWEN','YVES','NOAH','ADAM'];

var letterAlphabet = null;
var letterSpecimen = [];
var animateListName;
var animateListWeekday;
var animateListColor;
var animateListExpression;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function AnimateList(parent, list, interval) {
  var self = this;
  this.list = list;
  this.interval = interval;
  this.index = 0;
  this.letters = [];

  for(var i=0; i<this.list[0].length; i++) {
    this.letters.push( new Alpha(this.list[0][i], parent) );
  }
  setTimeout(function(){ self.play(); }, self.interval);
  return this;
}
AnimateList.prototype.play = function() {
  this.index++;
  if(this.index==this.list.length) {
    this.index = 0;
  }
  for(var i=0; i<this.letters.length; i++) {
    this.letters[i].update( this.list[this.index][i] );
  }
  var self = this;
  setTimeout(function(){ self.play(); }, self.interval);
}


letterAlphabet = new Alpha('A', document.getElementById('alphabet'));
setInterval(function(){letterAlphabet.next();},1500);

// weekday
var weekday = document.getElementById('weekday');
animateListWeekday = new AnimateList(weekday, WEEKDAY_LIST, 2000);

// EXPRESSION_LIST
var expressions = document.getElementById('expressions');
animateListExpression = new AnimateList(expressions, shuffle(EXPRESSION_LIST), 1600);

// name
var names = document.getElementById('names');
animateListName = new AnimateList(names, shuffle(NAME_LIST), 2500);

// name
var colors = document.getElementById('colors');
animateListColor = new AnimateList(colors, shuffle(COLOR_LIST), 1800);

var weekday = document.getElementById('weekday');
animateListWeekday = new AnimateList(weekday, WEEKDAY_LIST, 2000);

var LIST_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specimen = document.getElementById('specimen');
for(var i=0; i<LIST_ALPHABET.length; i++) {
  letterSpecimen.push( new Alpha(LIST_ALPHABET[i], specimen) );
}
