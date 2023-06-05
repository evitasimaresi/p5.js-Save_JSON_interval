function draw() {
    // background(255, 255, 255);
    //ellipse(width / 2, height / 2, 100, 100);
}

function drawing(dataTrack) {
    if (second()% 5 == 0){
        background(255);
    }
    //maketext(dataTrack.lightValue)
    if (dataTrack.group == "1st"){
    makerectangle(width /4, height / 4,dataTrack.lightValue, dataTrack.rotationValue);
    let c = color (255,0,0);
    makeLine(width /4, height / 4 , dataTrack.lightValue, dataTrack.rotationValue, c);
}else if (dataTrack.group == "2nd") {
    makerectangle(width /2, height / 2,dataTrack.lightValue, dataTrack.rotationValue);
    let c = color (0,0,255);
    makeLine(width /2, height / 2 ,dataTrack.lightValue, dataTrack.rotationValue, c);
}
}


function makeLine(x,y,a,b,c){
    strokeWeight(3);
    stroke (c);
    line(x, y, x, a)
    line(y, x, b, x)
}

function makerectangle(x,y,a,b){
    noStroke();
    fill(0);
    rectMode(CENTER);
    rect(x, y, a, b);
}

function maketext(a){
    text(a, width/8, height/8); // print the data to the sketch
}