//dancer template
var blankDancer = function blankDancer(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
  var oldStep = this.step;
  this.step = function() {
    oldStep.call(this);
  };
  this.setPosition(top, left);
};