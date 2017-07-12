var makeParrotDancer = function makeParrotDancer(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.top = top;
  this.left = left;
  this.$node = $('<span class="parrotDancer"></span>');

  this.setPosition(top, left);

  window.dancers.push(this);
  window.parrotDancers.push(this);

  // var oldStep = this.step;
  // this.step = function() {
  //   oldStep.call(this);
  // };

  // this.lineUp = function() {
  //   console.log('lineUp called');
  //   this.setPosition(top, 350);
  // }

  // this.pair = function() {
  //   console.log('pair called');
  // }
};

makeParrotDancer.prototype = Object.create(makeDancer.prototype);
makeParrotDancer.prototype.constructor = makeParrotDancer;

makeParrotDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

makeParrotDancer.prototype.lineUp = function() {
  console.log('lineUp called!');
  this.setPosition.call(this, this.top, 350);
};

makeParrotDancer.prototype.pair = function(top, left) {
  console.log('makeParrotDancer pair called');
  this.setPosition.call(this, top, left);
};
