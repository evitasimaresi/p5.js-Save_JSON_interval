//Storing minutes and seconds in data array and save them in a Json file, the name of the file is the date and time
//And after saving the array is cleared
let mydate = "current date";
let data = [];
let timeTrack;

function setup() {
  createCanvas(400, 400);
  setInterval(timer, 60000); //to save the file every x seconds, 60000=60seconds
  setInterval(timetracking, 1000); // to update the array with current time every second, 1000=1second
}

function draw() {
  background(220);
}

//its beeing used for the JSON name, so it can be a unique every 1 second
function currentdate() {
  let currentdate = month() + "" + day() + "_" + hour() + "" + minute() + "" + second();//here the name is formed
  return currentdate;
}

//update the arrray with new minutes and seconds
function timetracking() {
  let timeTrack = {
    minutes: minute(),
    seconds: second()
  };
  data.push(timeTrack);
  return timeTrack;
}

//when its called the procedure of saving is trigered
function timer() {
  console.log("saving...");
  mydate = currentdate();
  console.log(mydate);
  saveDatatoFile();
  cleararray();
}

//when its called the data array is been saved in the JSON file
function saveDatatoFile() {
  saveJSON(data, mydate);
  console.log('Data saved to file.');
}

//clear the array when the export finish
function cleararray(){
  data.length = 0; 
  if (data.length==0){
    console.log("Array cleared");
  }else{
    console.error("Array failled to clear");
  }
}