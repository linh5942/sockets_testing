//there is both a socket IO server and a socket IO client
//This is my client code

var socket;

function setup()
{
	createCanvas(400,400);
	background(51);

	//connect to the server
	//socket = io.connect('http://149.31.227.188:3000');
	socket = io.connect();

	//handles the message comes in
	//if this particular socket receives
	//call function newDrawing
	socket.on('mouse', newDrawing);

}

function newDrawing(data){
	noStroke();
	fill(255, 0, 100);
	ellipse(data.x, data.y, 36, 36);

}


//the function is triggered whenever drag the mouse
function mouseDragged(){
	console.log('sending: ' + mouseX + ',' + mouseY);

	//creat a JS object with the data in it
	var data = {
		x: mouseX,
		y: mouseY
	}

	//emit the data with the name of the message called mouse
	socket.emit('mouse', data);

	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 36, 36);
}


function draw()
{

}















