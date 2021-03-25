// from data.js
var tableData = data;

console.log(tableData);

// YOUR CODE HERE!
//table body
var table=d3.select('tbody');

//loop through data and console.log each

tableData.forEach(function(ufoSightings){
	console.log(ufoSightings);
	var row=table.append('tr');
	Object.entries(ufoSightings).forEach(function([k,v]){
		var cell=row.append('td');
		cell.text(v);
	});
});

console.log(k,v);

var button=d3.select('#filter-btn');
var form=d3.select('#datetime');

button.on('click', runEnter);
form.on('submit', runEnter);

function runEnter(){
	d3.event.preventDefault();
	var ufoElement=d3.select('#datetime');
	var valueProp=ufoElement.property('value');

	console.log(tableData);
	console.log(valueProp);

	var filteredData=tableData.filter(ufoDate=>ufoDate.datetime === valueProp);
	var table2=d3.select('tbody');
	table2.html('');

	filteredData.forEach((ufoSightings)=> {
		console.log(ufoSightings);
		var row=table.append('tr');
		Object.entries(ufoSightings).forEach(([k,v])=>{
			var cell=row.append('td');
			cell.text(v);
		});
	});
};




// YOUR CODE HERE!
// * Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
// * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.
 
//create table to display on html

 // var tableBody=d3.select("tbody");
 // tableData.forEach(function(item){
	// var row=tableBody.append('tr');
 // 	Object.entries(item).forEach(function([key, value]){
 // 		var cell=row.append('td');
 // 		cell.text(value);
 // 	});
 // });

 // console.log(tableData);
 
//var table=d3.select('tbody');

// select the button

// select the form

// create events

// 