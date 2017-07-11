var blankDancer = function blankDancer(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  var oldStep = this.step;
  this.step = function() {
    oldStep.call(this);
    this.$node.toggle();
  };
};
