// smokePos is increased by one each tick and smokeSize is calculated relative to it.
let smokePos = 0;
let smokeSize = 15
function setup() {
  
  createCanvas(400, 400);
  background(0xbf, 0xdf, 0xff); //sky blue
  stroke(255); //color of snow.
  rect(0, 280, 400, 120);
  strokeWeight(2);
  for(let i = 0; i < 400; i++) { //random snow height.
    let snowHeight = noise(i * 0.024);
    line(i, 280-(snowHeight*30), i, 400);
    //console.log(snowHeight);
  }
  
  stroke(0) //black border
  circle(200, 140, 60); //snowballs
  circle(200, 200, 80);
  circle(200, 275, 100);
  fill(0);
  noStroke();
  circle(200, 175, 10); //buttons
  circle(200, 195, 10);
  circle(200, 215, 10);
  circle(185, 135, 10); //eyes
  circle(215, 135, 10);
  rect(170, 80, 60, 30, 20, 20, 0, 0); //hat
  rect(155, 110, 90, 15, 3); //brim
  rect(205, 145, 60, 8, 4); //pipe
}

function draw() {
  
  fill(0xbf, 0xdf, 0xff);
  rect(245, 0, 30, 160); //clear area to draw next frame
  rect(230, 0, 60, 110);
  fill(100, (255-smokePos * 51/30));
  circle(260, 150 - smokePos, smokeSize);
  fill(0);
  rect(245, 135, 30, 30, 3, 3, 6, 6); //pipe
  
 
  //update smokePos
  smokePos = smokePos<=150?smokePos+1:0;
  //smoke size calculation
  smokeSize=15+smokePos/5;
}