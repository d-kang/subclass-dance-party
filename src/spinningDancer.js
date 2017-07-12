var makeSpinningDancer = function makeSpinningDancer(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.top = top;
  this.left = left;
  this.$node = $('<span class="emojispinner"></span>');

  this.setPosition(top, left);

  window.dancers.push(this);
  window.spinningDancers.push(this);

  // var oldStep = this.step;
  // this.step = function() {
  //   oldStep.call(this);
  // };


  // this.lineUp = function() {
  //   this.setPosition(top, 1250);
  // }

};

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

makeSpinningDancer.prototype.lineUp = function() {
  console.log('lineup called!');
  makeDancer.prototype.setPosition.call(this, this.top, 1250);
}
