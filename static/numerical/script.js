let counter = 0;

let divYear;
let divTime;
let divDate;
let divMath;
let divCountdownLight;
let divCountdownDark;
let divCountupLight;
let divCountupDark;

function display() {
  // time
  divTime.innerHTML = '';
  var date = new Date();
  numberToType(("0" + date.getHours()).slice(-2), divTime, 'dark');
  numberToType(':', divTime, 'dark');
  numberToType(("0" + date.getMinutes()).slice(-2), divTime, 'dark');
  numberToType(':', divTime, 'dark');
  numberToType(("0" + date.getSeconds()).slice(-2), divTime, 'dark');

  // countdown
  document.querySelectorAll('.countdown').forEach(function(element) {
    element.innerHTML = '';
  });

  numberToType(counter, divCountdownDark, 'dark');
  numberToType(counter, divCountdownLight, 'light');
  numberToType( 10-counter, divCountupDark, 'dark');
  numberToType( 10-counter, divCountupLight, 'light');

  counter++;
  if(counter==10) {
    counter = 0;
  }

  // math
  doMath();

  setTimeout(display, 1000);
}

function doMath() {
  divMath.innerHTML = '';
  var a = Math.floor( Math.random() * 10 );
  var b = Math.floor( Math.random() * 10 );
  var action = Math.random() > .5 ? '+' : '-';

  var glyph = new Numerical(a,'default');
  glyph.classList.add('n1');
  divMath.appendChild(glyph);

  var glyph = new Numerical(b,'default');
  glyph.classList.add('n2');
  divMath.appendChild(glyph);

  var glyph = new Numerical(action,'default');
  glyph.classList.add('action');
  divMath.appendChild(glyph);

  var glyph = new Numerical('=','default');
  glyph.classList.add('equal');
  divMath.appendChild(glyph);

  var resultDiv = document.createElement('div');
  resultDiv.classList.add('result');
  divMath.appendChild(resultDiv);
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
    parent.appendChild(glyph);
  }
}

function run() {
  divYear = document.getElementById('year');
  divTime = document.getElementById('time');
  divMath = document.getElementById('math');
  divCountdownLight = document.getElementById('countdown-light');
  divCountdownDark = document.getElementById('countdown-dark');
  divCountupLight = document.getElementById('countup-light');
  divCountupDark = document.getElementById('countup-dark');

  specimen = document.getElementById('specimen');

  var glyphs = ['0','1','2','3','4','5','6','7','8','9'];//,':','.','+','=','-'];
  for(var i=0; i<glyphs.length; i++) {
    var glyph = new Numerical(glyphs[i], 'dark');
    if(glyphs[i]==':') {
      glyph.classList.add('new-line');
    }
    specimen.appendChild(glyph);
  }

  var date = new Date();
  numberToType(date.getFullYear(), divYear, 'light');

  display();
}

// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') run();
});
