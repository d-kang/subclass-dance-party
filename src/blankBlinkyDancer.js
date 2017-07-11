class blankBlinkyDancer extends blankDancer {
  constructor(top, left, timeBetweenSteps) {
    super();
    var oldStep = this.step;
    this.step = function() {
      oldStep.call(this);
      this.$node.toggle();
    };
  }
  // step() {
  //   oldStep.call(this);
  //   this.$node.toggle();
  // }
}



// var blankBlinkyDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   var oldStep = this.step;
//   this.step = function() {
//     oldStep.call(this);
//     this.$node.toggle();
//   };
// };
