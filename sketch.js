function draw() {
    // background(255, 255, 255);
    //ellipse(width / 2, height / 2, 100, 100);
}

function drawing(dataTrack) {
    // if (second() % 5 == 0) {
    //     background(255);
    // }
    //maketext(dataTrack.lightValue)
    if (dataTrack.group == "1st") {
        let c = color(242, 77, 22, 10); //orange, port 11
        makereellipse(200, 200, dataTrack.lightValue, dataTrack.rotationValue, c);
        makeLine(200, 200, 300, 500);
        // makebullet(200, 200, dataTrack.lightValue);
    } else if (dataTrack.group == "2nd") {
        let c = color(74, 36, 24, 10); //brown port 10
        makereellipse(300, 500, dataTrack.lightValue, dataTrack.rotationValue, c);
        // makeLine(width / 2, height / 2, dataTrack.lightValue, dataTrack.rotationValue);
        makeLine(300, 500, 550, 180);
        // makebullet(300, 500, dataTrack.lightValue);
    } else if (dataTrack.group == "3rd") {
        let c = color(23, 224, 227, 10); //cyan port 9
        makereellipse(550, 180, dataTrack.lightValue, dataTrack.rotationValue, c);
        // makeLine(550, 180, dataTrack.lightValue, dataTrack.rotationValue);
        makeLine(550, 180, 550, 550);
        // makebulletReverse(550,180, dataTrack.lightValue);
    } else if (dataTrack.group == "4th") {
        let c = color(23, 227, 173, 10); //cyan-green port 9
        makereellipse(550, 550, dataTrack.lightValue, dataTrack.rotationValue, c);
        // makeLine(550, 550, dataTrack.lightValue, dataTrack.rotationValue);
        makeLine(550, 550, 200, 200);
    } else {
        console.error("Label '" + dataTrack.group + "' doesn't much");
    }
}


function makeLine(x1, x2, y1, y2) {
    strokeWeight(1);
    stroke(240);
    line(x1, x2, y1, y2);
}

// function makebullet(x, y, d) {
//     fill(0);
//     ellipse(x - d, y - d, 5)
// }

function makereellipse(x, y, a, b, c) {
    stroke(255);
    strokeWeight(1);
    fill(c);
    ellipse(x, y, a, b);
}

function maketext(a) {
    text(a, width / 8, height / 8); // print the data to the sketch
}

function saveimage(){
    DateToday = currentdate();
    save(DateToday +".jpg");
    console.log("SavingImage")
}