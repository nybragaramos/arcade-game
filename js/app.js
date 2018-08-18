class Character {
  constructor (x, y, sprite){
    this.x = x;
    this.y = y;
    this.sprite = sprite;
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

class Enemy extends Character{
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  constructor (x, y, speed, player, sprite) {
    super(x,y,sprite);
    this.speed = speed;
    this.player = player;
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x + this.speed*dt;
    //bug width = 100px height = 80px
    //player width = 80px height = 90
    if(this.player.x + 70> this.x && this.player.x < this.x + 100 && this.player.y + 85 > this.y && this.player.y < this.y + 70){
      this.player.x = 220;
      this.player.y = 450;
    }
  }  
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player extends Character{
  constructor (x, y, dx, dy, sprite) {
    super(x, y, sprite);
    this.dx = dx;
    this.dy = dy;
  }

  handleInput(value){
    switch(value){
      case('up'):
        if(this.y - this.dy > 50) {
          this.y -= this.dy;
        }else {
          this.y = 50;
        }
        break;
      case('down'):
        if(this.y + this.dy < 465) {
          this.y += this.dy
        }else {
          this.y = 465;
        }
        break;
      case('left'):
        if(this.x - this.dx >20) {
          this.x -= this.dx;
        }else {
          this.x = 20;
        }
        break;
      case('right'):
        if(this.x + this.dx < 420) {
          this.x += this.dx;
        }else {
          this.x = 420;
        }
        break;
    }
  }

  update() {
  }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let player = new Player(220, 465, 100, 83, 'images/char-boy.png');
allEnemies.push (new Enemy(-50, 140, 20, player, 'images/enemy-bug.png'));

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
