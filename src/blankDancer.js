//dancer template
var makeBlankDancer = function makeBlankDancer(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
};

makeBlankDancer.prototype = Object.create(makeDancer.prototype);
makeBlankDancer.prototype.constructor = makeBlankDancer;

makeBlankDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
};
