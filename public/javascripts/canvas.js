var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var allSquares = [];
var allCircles = [];
//************
//*** SHAPE **
//************
var Shape = function (xcord, ycord, width, color) {
  this.xcord = xcord;
  this.ycord = ycord;
  this.width = width;
  this.color = color;
}

//************
//** SQUARE **
//************
var Square = function (xcord, ycord, width, color) {
  Shape.apply(this, arguments);
}

Square.prototype = new Shape();
Square.prototype.constructor = Square;

Square.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.xcord, this.ycord, this.width, this.width);
  allSquares.push([this.xcord, this.ycord, this.width, this.width]);
}



//************
//** CIRCLE **
//************
var Circle = function (xcord, ycord, width, color) {
  Shape.apply(this, arguments);
}

Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.xcord, this.ycord, this.width, 0, 2 * Math.PI, false);
  ctx.closePath();
  ctx.fill();
  allCircles.push([this.xcord, this.ycord, this.width, this.width]);
}

var paintShapes = function (color) {
  allSquares.forEach(function (square) {
    var s = new Square(square[0],square[1],square[2],color);
    s.draw();
  })
  allCircles.forEach(function (circle) {
    var c = new Circle(circle[0],circle[1],circle[2],color);
    c.draw();
  })
}
var paintRandom = function () {
  var colorArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  allSquares.forEach(function (square) {
    var randomColor = '#';
    for (var i = 0; i < 6; i++){
      randomColor += colorArr[Math.floor(Math.random() * colorArr.length)];
    }
    var s = new Square(square[0],square[1],square[2],randomColor);
    s.draw();
  })
  allCircles.forEach(function (circle) {
    var randomColor = '#';
    for (var i = 0; i < 6; i++){
      randomColor += colorArr[Math.floor(Math.random() * colorArr.length)];
    }
    var c = new Circle(circle[0],circle[1],circle[2],randomColor);
    c.draw();
  })
}
var clearSquares = function() {
  allSquares.forEach(function (square) {
    var s = new Square(square[0],square[1],square[2], "rgba(255, 255, 225, 1)");
    s.draw();
  })
  // allSquares.forEach(function (square) {
  //   console.log(square);
  //   ctx.clearRect(square[0],square[1],square[3],square[4]);
  // });
}
var fillRandom = function () {

}
