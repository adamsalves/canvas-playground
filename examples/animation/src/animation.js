function Animation(context) {
  this.context = context;
  this.sprites = [];
  this.set = false;
}
Animation.prototype = {
  newSprite: function(sprite) {
    this.sprites.push(sprite);
  },
  turnOn: function() {
    this.set = true;
    this.nextFrame();
  },
  disconnected: function() {
    this.set = false;
  },
  nextFrame: function() {
    if( ! this.set ) return;

    this.clearScreeen();

    for (var i in this.sprites) {
      this.sprites[i].update()
    }
    for (var i in this.sprites) {
      this.sprites[i].draw();
    }
    var animation = this;
    requestAnimationFrame(function() {
      animation.nextFrame();
    });
  },
  clearScreeen: function() {
    var context = this.context;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  }
};
