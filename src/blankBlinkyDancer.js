//blank blinky dancer template
var makeBlankBlinkyDancer = function makeBlankBlinkyDancer(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bdancer"></span>');
  this.setPosition(top, left);
};

makeBlankBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlankBlinkyDancer.prototype.constructor = makeBlankBlinkyDancer;

makeBlankBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node
};
