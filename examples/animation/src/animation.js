(function(doc, win) {
  'use strict';
  function Animation(context) {
    this.context = context;
    this.sprites = [];
    this.set = false;
  }
  Animation.prototype = {
    newSprite: function(sprite) {
      this.sprites.push(sprite);
    },
    set: function() {
      this.set = true;
      this.nextFrame();
    },
    disconnected: function() {
      this.set = false;
    },
    nextFrame: function() {
      if( ! this.set ) return;

      this.limparTela();

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
    limparTela: function() {
      var context = this.context;
      ctx.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }
  };

})(document, window);
