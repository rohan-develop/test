
var points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => {return a - b});
console.log('max number',points[points.length-1])
console.log('min number',points[0])

// alternative method
function myArrayMax(arr) {
    var len = arr.length;
    var max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    console.log(max);
    return max;
    
  }
  myArrayMax(points)