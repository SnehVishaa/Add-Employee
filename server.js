var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var csv = require('csv');
var obj = csv();

var http = require('http');
var fs=require('fs');
//var json2csv = require('json2csv').parse;
var cors = require('cors');

function Employee(eno, ename, sal)
{       
    this.Name = eno;
    this.Designation = ename;
    this.Salary = sal;
};

var Employees = [];

obj.from.path('../serverSide/data.csv').to.array(function (data) {
    for (var index = 0; index <  data.length; index++) {
        Employees.push(new Employee(data[index][0], data[index][1], data[index][2] ));
    }
    console.log(Employees);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

app.get("/", function(req, res, next) {
  res.send(Employees);
});


app.post('/addemp', function(request, response){
    var fields = ['Name', 'Designation', 'Salary'];
    console.log(request.body);

var appendThis =  "\n"+request.body.Name+","+request.body.Designation+","+request.body.Salary

console.log(csv);
    fs.appendFile('data.csv', appendThis, function (err) {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
        response.send("Added Successfully");
    });
    console.log(request.body);
});

var port = 5000;
app.listen(port, () =>
    console.log("Server started on port  "+port)
);
