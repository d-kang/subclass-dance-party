var makeSpinningDancer = function makeSpinningDancer(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="emojispinner"></span>');
  var oldStep = this.step;
  this.step = function() {
    oldStep.call(this);
  };
  this.setPosition(top, left);
};
