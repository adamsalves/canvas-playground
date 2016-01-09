(function(doc, win) {
  'use strict';

  var canvas = doc.querySelector('[data-js="canvas"]');
  var context = canvas.getContext('2d');

  var b1 = new Ball(context);
  b1.x = 100;
  b1.y = 200;
  b1.velocityX = 20;
  b1.velocityY = -10;
  b1.color = 'red';
  b1.radius = 20;

  var b2 = new Ball(context);
  b2.x = 200;
  b2.y = 100;
  b2.velocityX = -10;
  b2.velocityY = 20;
  b2.color = 'blue';
  b2.radius = 30;

  var b3 = new Ball(context);
  b3.x = 50;
  b3.y = 200;
  b3.velocityX = -15;
  b3.velocityY = 10;
  b3.color = 'green';
  b3.radius = 10;

  var animation = new Animation(context);
  animation.newSprite(b1);
  animation.newSprite(b2);
  animation.newSprite(b3);

  animation.set();

})(document, window);
