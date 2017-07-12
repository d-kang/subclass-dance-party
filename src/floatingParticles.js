var gifDancer = function gifDancer(top, left, timeBetweenSteps) {
  // <div style="background-image: url(http://i54.tinypic.com/4zuxif.jpg)"></div>
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $(`<span class=bdancer></span>`);

  this.setPosition(top, left);
};
gifDancer.prototype = Object.create(makeDancer.prototype);
gifDancer.prototype.constructor = newDancer;

gifDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
