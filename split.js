/*
Example that takes a string and split it to extract the data
need it for analyzing the light and rotation values

-Not included in the index.html
*/

let names = "1st:15:30";
let light1 = [];
let rotation1 = [];
let i=0;
let splitString;

let a=0;
let b=5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  splitString = split(names, ":");
  text(splitString[0], 5, 30);
  text(splitString[1], 25, 30);
  text(splitString[2], 45, 30);
  if (splitString[0] == "1st") {
    light1[i] = splitString[1];
    rotation1[i] =splitString[2];    
    console.log(light1[i]);
    console.log(rotation1[i]);
    i++;
  } else {
    console.error("Label '" + splitString[0] + "' doesn't much");
  }

  console.log("i="+i);
  names= "1st:"+a++ + ":" + b++;
}
