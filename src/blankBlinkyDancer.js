//blank blinky dancer template
var makeBlankBlinkyDancer = function makeBlankBlinkyDancer(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
  var oldStep = this.step;
  this.step = function() {
    oldStep.call(this);
    this.$node.fadeIn();
    this.$node.fadeOut();
  };
  this.setPosition(top, left);
};
