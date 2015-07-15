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
    ctx.clearRect(square[0],square[1],square[2],square[3]);
  });
}
var fillRandom = function () {
  var colorArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  for (var i = 0; i < 500; i++){
    var randomColor = '#';
    for (var j = 0; j < 6; j++){
      randomColor += colorArr[Math.floor(Math.random() * colorArr.length)];
    }
    console.log(i, randomColor);
    var x = Math.floor(Math.random() * 500);
    var y = Math.floor(Math.random() * 500);
    console.log(i, x, y);
    var randomSize = Math.floor(Math.random() * 100) + 1;
    console.log(i, randomSize);

    var randomShape = Math.floor(Math.random()*2);
    console.log(i, randomShape);

    if (randomShape === 0){
      var c = new Circle(x,y,randomSize,randomColor);
      c.draw();
    } else {
      var s = new Square(x,y,randomSize,randomColor);
      s.draw();
    }
  }
}
