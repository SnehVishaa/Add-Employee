	var appendThis="Height \n";

        var fs=require('fs');
        const csv=require('csvtojson');


	for(var i=0; i<20; i++)
	{
		appendThis=appendThis+Math.ceil((Math.random()* (180 - 150 )) + 150)+"\n";
		
	}


	console.log("\n"+appendThis);
	fs.writeFile('height.csv',appendThis, function (err)
	{
		if (err) throw err;
		
		console.log('The "data to append" was appended to file!');             
	});
	
	
	
	// inclue 'http' module
	var http = require('http');
	
	//include 'json2csv' so that it converts json into csv with column titles and proper line endings
	var json2csv = require('json2csv').parse;

	//CORS-Cross Origin Resource Sharing
	//include 'cors' which provides a Connect/Express middleware
	var cors = require('cors');

	//express is a module that can be used to create more than one application
	var express = require('express');

	var app = express();
	
	// body parsing middleware
	const bodyParser = require("body-parser");
	
	var cors = require('cors');
	
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cors());
	
	var myemp=require('./assEmp2.js');

	// Fetch Employee Details from data.csv	
	myemp.myget(app,'height.csv');


	var port = 5001;

	app.listen(port,  () => console.log('Example app listening on port '+port));

