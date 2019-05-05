var $year;
var $time;
var $date;
var $math;
var counter = 0;

var countdownLight;
var countdownDark;
var countupLight;
var countupDark;

function display() {
  // time
  $time.empty();
  var date = new Date();
  numberToType(("0" + date.getHours()).slice(-2), $time, 'dark');
  numberToType(':', $time, 'dark');
  numberToType(("0" + date.getMinutes()).slice(-2), $time, 'dark');
  numberToType(':', $time, 'dark');
  numberToType(("0" + date.getSeconds()).slice(-2), $time, 'dark');

  // countdown
  $('.countdown').empty();
  numberToType(counter, $countdownDark, 'dark');
  numberToType(counter, $countdownLight, 'light');
  numberToType(10-counter, $countupDark, 'dark');
  numberToType(10-counter, $countupLight, 'light');

  counter++;
  if(counter==10) {
    counter = 0;
  }

  // math
  doMath();

  setTimeout(display, 1000);
}

function doMath() {
  $math.empty();
  var a = Math.floor( Math.random() * 10 );
  var b = Math.floor( Math.random() * 10 );
  var action = Math.random() > .5 ? '+' : '-';

  var glyph = new Numerical(a,'default');
  glyph.classList.add('n1');
  $math.append(glyph);

  var glyph = new Numerical(b,'default');
  glyph.classList.add('n2');
  $math.append(glyph);

  var glyph = new Numerical(action,'default');
  glyph.classList.add('action');
  $math.append(glyph);

  var glyph = new Numerical('=','default');
  glyph.classList.add('equal');
  $math.append(glyph);

  var resultDiv = document.createElement('div');
  resultDiv.classList.add('result');
  $math.append(resultDiv);
  var result = a + b*(action=='+'?1:-1);
  if(result<10 && result>=0) {
    resultDiv.style.gridColumnStart = 4;
    resultDiv.style.gridTemplateColumns = 'repeat(1, 1fr)';
  }
  numberToType(result, resultDiv, 'default');
}

function numberToType(number,parent,theme) {
  var numberString = number.toString();
  for(var i=0; i<numberString.length; i++) {
    var n = numberString[i];
    var glyph = new Numerical(n,theme);
    parent.append(glyph);
  }
}

$(document).ready(function(){
  $year = $('#year');
  $time = $('#time');
  $math = $('#math');
  $countdownLight = $('#countdown-light');
  $countdownDark = $('#countdown-dark');
  $countupLight = $('#countup-light');
  $countupDark = $('#countup-dark');

  var specimen = $('#specimen');

  var glyphs = ['0','1','2','3','4','5','6','7','8','9'];//,':','.','+','=','-'];
  for(var i=0; i<glyphs.length; i++) {
    var glyph = new Numerical(glyphs[i], 'dark');
    if(glyphs[i]==':') {
      glyph.classList.add('new-line');
    }
    specimen.append(glyph);
  }

  var date = new Date();
  numberToType(date.getFullYear(), $year, 'light');

  display();
});
