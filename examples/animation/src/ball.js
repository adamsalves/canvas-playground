function Ball(context) {
  this.context = context;
  this.x = 0;
  this.y = 0;
  this.velocityX = 0;
  this.velocityY = 0;

  this.color = 'black';
  this.radius = 10;
}
Ball.prototype = {
  update: function() {
    var context = this.context;
    if (this.x < this.radius || this.x > context.canvas.width - this.radius)
      this.velocityX *= -1;
    if (this.y < this.radius || this.y > context.canvas.height - this.radius)
      this.velocityY *= -1;

    this.x += this.velocityX;
    this.y += this.velocityY;
  },
  draw: function() {
    var context = this.context;
    context.save();
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fill();
    context.restore();
  }
};
