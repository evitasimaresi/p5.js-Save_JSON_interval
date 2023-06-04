/*Check if need it---I probably have to delete it
I wanted to check the conection bettween files
*/

let i=0;
function setup(){
createCanvas(400,400);
console.log(latestData);
console.log("test");
}
function draw(){
background(i++);
text(latestData, width/2, height/2);
if (i==255){
    i=0;
}
gotData();
}