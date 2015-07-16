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
  allSquares.push([this.xcord, this.ycord, this.width, this.width, this.color]);
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
  allCircles.push([this.xcord, this.ycord, this.width, this.width, this.color]);
}

var paintSquares = function (color) {
  allSquares.forEach(function (square) {
    var s = new Square(square[0],square[1],square[2],color || square[4]);
    square[3] = color;
    s.draw();
  })
}
var paintCircles = function (color) {
  allCircles.forEach(function (circle) {
    var c = new Circle(circle[0],circle[1],circle[2],color || circle[4]);
    circle[3] = color;
    c.draw();
  })
}
var paintShapes = function (color) {
  paintSquares(color);
  paintCircles(color);
}
var paintRandom = function () {
  var colorArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  allCircles.forEach(function (circle) {
    var randomColor = '#';
    for (var i = 0; i < 6; i++){
      randomColor += colorArr[Math.floor(Math.random() * colorArr.length)];
    }
    var c = new Circle(circle[0],circle[1],circle[2],randomColor);
    c.draw();
  })
  allSquares.forEach(function (square) {
    var randomColor = '#';
    for (var i = 0; i < 6; i++){
      randomColor += colorArr[Math.floor(Math.random() * colorArr.length)];
    }
    var s = new Square(square[0],square[1],square[2],randomColor);
    s.draw();
  })

}
var clearSquares = function() {
  allSquares.forEach(function (square) {
    ctx.clearRect(square[0],square[1],square[2],square[3]);
  });
  allSquares = [];
  paintCircles();
}
var fillRandom = function () {
  var colorArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  for (var i = 0; i < 300; i++){
    var randomColor = '#';
    for (var j = 0; j < 6; j++){
      randomColor += colorArr[Math.floor(Math.random() * colorArr.length)];
    }
    var x = Math.floor(Math.random() * 500);
    var y = Math.floor(Math.random() * 500);
    var randomSize = Math.floor(Math.random() * 100) + 1;
    var randomShape = Math.floor(Math.random()*2);
    if (randomShape === 0){
      var c = new Circle(x,y,randomSize,randomColor);
      c.draw();
    } else {
      var s = new Square(x,y,randomSize,randomColor);
      s.draw();
    }
  }
}
