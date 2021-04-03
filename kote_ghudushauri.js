//1
var result = 'x ';
for (var i = 0; i < 11; i++) {

    for (var j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']';
        } 
        else if(j == 0 && i>0){
          result += '[' + i + '] ';
        } 
        else if(i>0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result);

//2
Shape = {
  type: 'Shape',
  getType: function (){ return this.type;}
}
//2.ab
function Triangle( a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = 'Triangle';
}
Triangle.prototype = Shape; 
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function (){
  console.log('Get Perimeter');
  return this.a + this.b + this.c;
}
//2.c
var t = new Triangle( 1, 2, 3)
t.constructor === Triangle;
var i = 50;
for (x = 0; x < i; x++) {
  console.log(t.Triangle);
}
//2.d

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var rame = [1, 2, 3, 4, 5, 6, 7, 8, 9];
consol.log(shuffle(rame));