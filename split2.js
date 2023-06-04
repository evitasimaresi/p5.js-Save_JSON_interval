/*
Alternative of splitting and saving the data

-Not included on final version
*/

//1st Servo--------------
let light_1 = [];
let rotation_1 = [];
let index_1 = 0; //counter

//2nd Servo--------------
let light_2 = [];
let rotation_2 = [];
let index_2 = 0; //counter



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