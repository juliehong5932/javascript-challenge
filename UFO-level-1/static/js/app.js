// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!


//Code that appends a table to your web page and then adds new rows of data for each UFO sighting.
var tbody = d3.select("tbody");

tableData.forEach(function(ufoData){
    console.log(ufoData);
    var row = tbody.append("tr");

Object.entries(ufoData).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);

    });

});

var button = d3.select("#filter-btn#");
button.on("click", function() {
    
    var inputField = d3.select("#datetime");
    var inputValue = inputField.property('value');
    console.log(inputValue);

    var filter = tableData.filter(ufoData => ufoData.datetime === inputValue);
    console.log(filter);

    filter.forEach(function(input){
    console.log(input);
    var row = tbody.append("tr");

    Object.entries(ufoData).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });

});

});