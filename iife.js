// var outside = "global";

// function scopeStuff() {
//   var inside = "local";
//   console.log("outside from inside function: ", outside)
//   console.log("inside from inside function: ", inside)

// }

// scopeStuff();
// console.log("outside global: ", outside)
// // console.log("inside global: ", inside)

// var global_base = 500;
// function addNums () {
//   global_base += 500
// }

// addNums();

// console.log("final: ", global_base)


// var iife_global_base = 300;
//  (function () {
//     var internal_base = 100;
//     var internal_sum = iife_global_base + internal_base;
//     console.log("sum: ", internal_sum);
//  })()

var Sedan = (function() {
  var color = "black";
  var type = "sedan"
return {
  manufactureDate: new Date(),
  getColor: function(){
    return color;
  },
  setColor: function(newColor){
    return color = newColor;
  },
  getType: function(){
    return type;
  }
}
})();

console.log("Sedan: ", Sedan.getColor());

Sedan.setColor("green");
console.log("New Sedan Color: ", Sedan.getColor());
console.log("main Sedan: ", Sedan.color)

console.log("Sedan newColor2: ", Sedan.setColor("purple"));
console.log("is it purple? ", Sedan.getColor());

console.log("first type: ", Sedan.getType());
Sedan.type = "minivan";
console.log("New Type: ", Sedan.getType());










