var mainPoint;
var point1
var point2
var point3

function setup(){
  createCanvas(1900, 900);
  background(51);
  var point1X = width / 2;
  var point1Y = 0;
  var point2X = 0;
  var point2Y = height;
  var point3X = width;
  var point3Y = height;
  var mainPointX = random(width);
  var mainPointY = random(height);
  mainPoint = new Point(mainPointX, mainPointY);
  point1 = new Point(point1X, point1Y);
  point2 = new Point(point2X, point2Y);
  point3 = new Point(point3X, point3Y);
  point1.show();
  point2.show();
  point3.show();
}

function draw(){
  for(let i = 0; i < 100; i++){
    mainPoint.show();
  

    var pointNumber = floor(random(3));
    if(pointNumber == 0){
      stroke(255, 0, 255);
      mainPoint.x = lerp(mainPoint.x, point1.x, 0.5);
      mainPoint.y = lerp(mainPoint.y, point1.y, 0.5);
    }else if(pointNumber == 1){
      stroke(0, 255, 255);
      mainPoint.x = lerp(mainPoint.x, point2.x, 0.5);
      mainPoint.y = lerp(mainPoint.y, point2.y, 0.5);
    }else if(pointNumber == 2){
      stroke(255, 255, 0);
      mainPoint.x = lerp(mainPoint.x, point3.x, 0.5);
      mainPoint.y = lerp(mainPoint.y, point3.y, 0.5);
    }
  }
}