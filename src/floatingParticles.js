var makeFloatingParticles = function makeFloatingParticles(top, left, timeBetweenSteps) {
  this.$node = $('<span class="floating-particles"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
  var oldStep = this.step;
  this.step = function() {
    oldStep.call(this);
  };
  this.setPosition(top, left);
};

// var canvas = document.querySelector("canvas");
// var c = canvas.getContext("2d");
//
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
//
// var mouse = {
//   x: undefined,
//   y: undefined
// };
//
// var maxRadius = 30;
// var density = 3;
// var numParticles = canvas.height*canvas.width/(density*100);
//
// var colorArray = [
//   "#FFF6B5",
//   "#F2BA82",
//   "#F2A4BF",
//   "#D974DB",
//   "#9298DD",
//   "#3CD0D8"
// ];
//
// window.addEventListener("mousemove", function() {
//   mouse.x = event.x;
//   mouse.y = event.y;
// });
//
// window.addEventListener("resize", function() {
//   canvas.height = window.innerHeight;
//   canvas.width = window.innerWidth;
//   init();
// });
//
// function Circle(x, y, dx, dy, r) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.r = r;
//   this.minRadius = r;
//   this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
//   this.draw = function() {
//     c.beginPath();
//     c.fillStyle = this.color;
//     c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
//     c.fill();
//   };
//   this.update = function() {
//     if (this.x + this.r > innerWidth || this.x - this.r < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.r > innerHeight || this.y - this.r < 0) {
//       this.dy = -this.dy;
//     }
//     this.x += this.dx;
//     this.y += this.dy;
//
//     // interactivity
//     if (
//       mouse.x - this.x < 50 &&
//       mouse.x - this.x > -50 &&
//       mouse.y - this.y < 50 &&
//       mouse.y - this.y > -50
//     ) {
//       if (this.r < maxRadius) {
//         this.r += 1;
//       }
//     } else if (this.r > this.minRadius) {
//       this.r -= 1;
//     }
//     this.draw();
//   };
// }
//
// // var x = Math.random() * window.innerWidth; //randomise x position
// // var y = Math.random() * window.innerHeight; // randomise y position
// // var dx = Math.random() - 0.5; //randomise velocity. Substractin 0.5 to get a equal chance of gettign a positive or negative number -- rando; number betwwen -0.5 and 0.5
// // var dy = Math.random() - 0.5;
// // var radius = 30;
//   var circleArray = [];
//
// function init() {
//   circleArray = [];
//   for (var i = 1; i < numParticles; i++) {
//     var r = Math.random() * 3 + 1;
//     var x = Math.random() * (window.innerWidth - r * 2) + r;
//     var y = Math.random() * (window.innerHeight - r * 2) + r;
//     var dx = (Math.random() - 0.5) * 0.5;
//     var dy = (Math.random() - 0.5) * 0.5;
//     circleArray.push(new Circle(x, y, dx, dy, r));
//   }
// }
// init();
//
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   for (var i = 1; i < circleArray.length; i++) {
//     circleArray[i].update();
//   }
// }
//
// animate();
