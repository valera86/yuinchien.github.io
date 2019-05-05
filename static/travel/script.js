var RECORDS = [];
var CITIES = {};
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var YEAR = 2005;
let now = new Date();

var travelYears = {};

function TravelYear(year) {
	this.year = year;
	this.timeInCity = {};
	return this;
}

TravelYear.prototype.updateTimeInCity = function(city, days) {
	if(this.timeInCity[city]) { this.timeInCity[city] += days; }
	else { this.timeInCity[city] = days; }
}

function daysBetweenInSameYear(from,to) {
  var millisecondsPerDay = 1000 * 60 * 60 * 24;
	var millisBetween = to.getTime() - from.getTime();
  var days = millisBetween / millisecondsPerDay;
  return Math.floor(days);
}

function formatDate(d) {
  return d.getMonth() + '/' + d.getDate();
}

function mapTo(value, fromStart, fromEnd, toStart, toEnd) {
	var offsetStart = 90;
	if(value > offsetStart && value < 180) {
		value -= (offsetStart+180);
	}
	else {
		value += (180-offsetStart);
	}
	var ratio = (toEnd - toStart) / (fromEnd-fromStart);
	return (value - fromStart) * ratio + toStart;
}

function getTimeLength(timeDiff) { // timeDiff = (now.getTime() - yd.getTime())
	return Math.round(timeDiff/200/60/60/8);
}

function sortOnKeys(dict) {
	var sortable = [];
	for (var obj in dict) {
		sortable.push([obj, dict[obj]]);
	}
	sortable.sort(function(a, b) {return b[1] - a[1] });
	return sortable;
}

function plot() {

	// Draw timeline
	var currentYear = new Date().getFullYear();

	for(var y=currentYear; y>=YEAR; y--) {
		var year = $('<div class="year"></div>').addClass('year-'+y);
		$('#timeline').append(year);

		var yd = new Date('1/1/'+y);

		var top = getTimeLength( now.getTime() - yd.getTime() );
		if(y==now.getFullYear()) {
			top += 180;
			year.css('height', top+'px').css('top', 0);
		}
		else {
			var preYear = new Date('12/31/'+y);
			var yearHeight = getTimeLength( preYear.getTime() - yd.getTime() );

			var tt = $('.year-'+(y+1)).offset().top + $('.year-'+(y+1)).height();
			year.css('height', yearHeight+'px').css('top', tt+'px');
		}
		// info
		var info = $('<div class="info"></div>');
		info.append('<div class="yr">'+y.toString().substring(2,4)+"'"+'</div>');
		info.append('<div class="subtitle">Days spent<span class="hide-for-mobile"> in each city</div></div>');
		year.append(info);

		var sortedTimeInCity = sortOnKeys( travelYears[y].timeInCity );

		var containerLg = $('<div class="row lg"></div>');
		var containerMed = $('<div class="row med"></div>');
		var containerSm = $('<div class="row sm"></div>');

		for(var tc=0; tc<sortedTimeInCity.length; tc++) {
			var city = sortedTimeInCity[tc][0];
			var days = sortedTimeInCity[tc][1];
			var fontSize = Math.ceil( ( Math.exp( -1.8/Math.sqrt(days) )) * 48 ) + 4;
			var container = containerSm;
			var colSize = 'col-sm-3 col-xs-12';
			if(tc<2) { container = containerLg; colSize = 'col-sm-6 col-xs-12'; }
			else if(tc<5) { container = containerMed; colSize = 'col-sm-4 col-xs-12'; }

			if(tc<9) {
				container.append('<div class="entry '+colSize+'"><div style="font-size: '+fontSize+'px;line-height:'+fontSize+'px;" class="days">'+ days +'</div>'+ city +'<div class="border"></div></div>');

				info.append(container);
			}
		}
	}

	plotTimeline();
}

function plotTimeline() {
	for(var r in RECORDS) {
		var record = RECORDS[r];
		var date = record[0];
		var from = record[1].trim();
		var to = record[2].trim();
		var d = new Date(date);
		var y = d.getUTCFullYear();
		if(y>=YEAR ) {
			try {
				var preRecord = RECORDS[r-1];

				var preDate = new Date(preRecord[0]);
				if(preDate.getUTCFullYear()<y && y==YEAR) {
					preDate = new Date('1/10/'+y);
				}
				var dd = getTimeLength( d.getTime()-preDate.getTime() );
				var preDiff = getTimeLength( now.getTime()-preDate.getTime() );

				if(dd==0) {
					continue;
				}

				var diff = getTimeLength( now.getTime()-d.getTime() );
				var formatDATE = formatDate(d);
				var dot = $('<div class="dot" city="'+to+'" date="'+date+'"><div class="time">'+formatDate(d)+'</div></div>');
				dot.append('<div class="place">'+to+'</div>');
				dot.css('top', (diff+1)+'px');
				$('#canvas').append(dot);

				// vertical line
				var vl = $('<div class="v line"></div>');
				vl.css('height', dd+'px').css('top',diff+'px').attr('city', from);
				$('#canvas').append(vl);

				if(r==RECORDS.length-1) {
					// vertical line
					var vl = $('<div class="v line"></div>');
					vl.css('height', diff+'px').css('top',0);//.css('left',CITIES[to][3]+'%');
					$('#canvas').append(vl);
					// present dot
					var dot = $('<div class="present dot" city="'+to+'" date="'+formatDate(now)+'"><div>Present</div></div>');
					// dot.css('left', CITIES[to][3]+'%');
					dot.css('top', 0);
					$('#canvas').append(dot);

				}
			}
			catch(e) {
				console.log(e,record);
			}
		}
	}
}

function loadData() {
	const url = 'http://spreadsheets.google.com/feeds/list/0AsipDiKXxBx4dEZlNFJmWWVjdmJ6aVdZeUJDYV9URlE/od6/public/values?alt=json';
	
	fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
		const entries = myJson.feed.entry || [];
		
		var n = new Date();
			for(var j=YEAR; j<=n.getFullYear(); j++) {
				var ty = new TravelYear(j);
				travelYears[j] = ty;
			}

			for(var i = 0; i < entries.length; ++i) {
				var entry = entries[i];
				var from = entry['gsx$fromcity']['$t'];
				var to = entry['gsx$tocity']['$t'];

				var date = entry['gsx$departuredate']['$t'];
				var mode = entry['gsx$mode']['$t'];

				RECORDS[i] = [date, from, to];

				// calculate time in cities by year
				var d = new Date(date);
				var y = d.getFullYear();
				if(y>=(YEAR-1) ) {

					try {
						var nextEntryFrom = to;
						var nextEntryDate = new Date().toLocaleDateString("en-US");

						if(i==entries.length-1) {
							// nextEntry
						} else {
							nextEntryDate = entries[i+1]['gsx$departuredate']['$t'];
							nextEntryFrom = entries[i+1]['gsx$fromcity']['$t'];
						}

						var nextEntryD = new Date(nextEntryDate);

						if(to==nextEntryFrom) {

							if(d.getFullYear()!=nextEntryD.getFullYear()) {
								// add to next year
								var gapDays = daysBetweenInSameYear( new Date(nextEntryD.getFullYear(), 0, 1), nextEntryD);
								travelYears[nextEntryD.getFullYear()].updateTimeInCity(to, gapDays);
								nextEntryD = new Date(d.getFullYear(), 11, 31);
							}
							var days = daysBetweenInSameYear(d, nextEntryD);
							if(days==0) { days = 1; }
							travelYears[y].updateTimeInCity(to, days);
						}
						else {
							console.log('A:',to, nextEntryFrom, entry);
						}

					} catch(e) {
						console.log('ERROR: ',RECORDS[i],e);
					}
				}
			}
      plot();
	});

}

loadData();

