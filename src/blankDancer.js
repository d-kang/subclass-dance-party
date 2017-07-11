//dancer template
var makeBlankDancer = function makeBlankDancer(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
  var oldStep = this.step;
  this.step = function() {
    oldStep.call(this);
  };
  this.setPosition(top, left);
};
