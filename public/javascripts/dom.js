$(document).ready(function() {
  $('#canvas').on('click', function(){
    var x = event.offsetX;
    var y = event.offsetY;
    var width = $('#size').val();
    var color = $('#color').val();
    var shape = $('#shape').val();
    if (shape === 'Circle'){
      c = new Circle(x, y, Number(width), color);
      c.draw();
    } else if (shape === 'Square'){
      x -= (width/2);
      y -= (width/2);
      s = new Square(x, y, Number(width), color);
      s.draw();
    }
  });

  $('#erase-squares').on('click', function () {
    clearSquares();
  });

  $('#same-color').on('click', function(){
    var color = $('#color').val();
    paintShapes(color);
  });

  $('#random-colors').on('click', function(){
    paintRandom();
  });

  $('#random-fill').on('click', function(){
    fillRandom();
  });

});
