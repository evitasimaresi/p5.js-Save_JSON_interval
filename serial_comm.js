// serial communication between a microcontroller with a switch on pin 2
// arduino code can be found here : https://gist.github.com/shfitz/7fd206b7db4e0e6416a443d61c8c988e

let serial; // variable for the serial object
let latestData = "waiting for data"; // variable to hold the data

//1st Servo--------------
let light_1 = [];
let rotation_1 = [];
let index_1 = 0; //counter

//2nd Servo--------------
let light_2 = [];
let rotation_2 = [];
let index_2 = 0; //counter

let splitString;

function setup() {
  createCanvas(400, 400);
  // serial constructor
  serial = new p5.SerialPort();
  // get a list of all connected serial devices
  serial.list();
  // serial port to use - you'll need to change this
  serial.open("COM3");
  // callback for when the sketchs connects to the server
  serial.on("connected", serverConnected);
  // callback to print the list of serial devices
  serial.on("list", gotList);
  // what to do when we get serial data
  serial.on("data", gotData);
  // what to do when there's an error
  serial.on("error", gotError);
  // when to do when the serial port opens
  serial.on("open", gotOpen);
  // what to do when the port closes
  serial.on("close", gotClose);
}

function serverConnected() {
  console.log("Connected to Server");
}

// list the ports
function gotList(thelist) {
  console.log("List of Serial Ports:");

  for (let i = 0; i < thelist.length; i++) {
    console.log(i + " " + thelist[i]);
  }
}

function gotOpen() {
  console.log("Serial Port is Open");
}

function gotClose() {
  console.log("Serial Port is Closed");
  latestData = "Serial Port is Closed";
}

function gotError(theerror) {
  console.log(theerror);
}

// when data is received in the serial buffer

function gotData() {
  let currentString = serial.readLine(); // store the data in a variable
  trim(currentString); // get rid of whitespace
  if (!currentString) return; // if there's nothing in there, ignore it
  console.log(currentString); // print it out
  latestData = currentString; // save it to the global variable
  splitData();
}

//seperate data according to number of servo and store them in seperate arrays
function splitData() {
  background(255, 255, 255);
  splitString = split(latestData, ":");
  if (splitString[0] == "1st") {
    light_1[index_1] = splitString[1];
    rotation_1[index_1] = splitString[2];

    //console.log(light_1[index_1]);
    //console.log(rotation_1[index_1]);
    rect(width / 2, height / 2, light_1[index_1], rotation_1[index_1]);

    index_1++;
  } else if (splitString[0] == "2nd") {
    light_2[index_2] = splitString[1];
    rotation_2[index_2] = splitString[2];
    index_2++;
  } else {
    console.error("Label '" + splitString[0] + "' doesn't much");
  }
}

function draw() {
  //background(255, 255, 255);
  text(latestData, 10, 10); // print the data to the sketch

  fill(0);
  //ellipse(width / 2, height / 2, 100, 100);
  rectMode(CENTER);
  //rect(width / 2, height / 2, 100, 100);
}

function keyPressed() {
  if (keyCode == S) {
    saveDatatoFile();
  }
}

//when its called the data array is been saved in the JSON file
function saveDatatoFile() {
  saveJSON(light_1, "saved");
  console.log('Data saved to file.');
}