//there is both a socket IO server and a socket IO client
//This is my server code

//importing the module express into a variable called express
//use the variable to store a function
var express = require('express');

//trigger the express function 
//and store the result of that in a variable called app 
var app = express();
var server = app.listen(3000);

//host those files
//whenever anybody goes to my website
//I want them to see those files
app.use(express.static('public'));

console.log("My socket server is running");

//an import statement in the same way as Express
//create an actual socket that's part of this server
var socket = require('socket.io');

//call the socket function 
//and give it the server as an argument
var io = socket(server);


//a new connection event!
//call function newConnection
io.sockets.on('connection', newConnection);

function newConnection(socket){
	//every single new connection to a webserver
	//automatically assigned an ID number for tracking
	console.log('new connection' + socket.id);

	//if there is a message call mouse
	//then trigger this function mouseMsg
	//message come in to the server
	socket.on('mouse', mouseMsg);

	function mouseMsg(data){
		
		//send the message back out
		//here send that exact same message
		//message don't come back to myself
		socket.broadcast.emit('mouse', data);

		//goes to everybody including this client
		//io.sockets.emit('mouse',data);

		console.log(data);

	}


}





















