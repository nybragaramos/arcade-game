class Element {
  constructor (x, y, sprite){
    this.x = x;
    this.y = y;
    this.sprite = sprite;
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

class Enemy extends Element{
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
      this.player.y = 465;
      this.player.score = 0;
    }
  }  
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player extends Element{
  constructor (x, y, dx, dy, sprite) {
    super(x, y, sprite);
    this.dx = dx;
    this.dy = dy;
    this.score = 0;
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
        if(this.x - this.dx >18) {
          this.x -= this.dx;
        }else {
          this.x = 18;
        }
        break;
      case('right'):
        if(this.x + this.dx < 418) {
          this.x += this.dx;
        }else {
          this.x = 418;
        }
        break;
    }
  }

  render(){
    super.render();

    //draw score
    ctx.beginPath();
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+ this.score, 8, 20);
    ctx.closePath();
  }
}

class Bonus extends Element{
  constructor (x, y, sprite, bonus, player){
    super(x,y,sprite)
    this.bonus = bonus;
    this.player = player;
    this.status = 1;
    this.time = new Date().getTime();
  }

  update(){
    if(this.status == 1) {
      if(this.player.x > this.x && this.player.x < this.x + 80 && this.player.y + 5> this.y && this.player.y < this.y + 80) {
        this.status = 0;
        this.player.score += this.bonus;
      }
      if (new Date().getTime() - this.time > 5000){
        this.status = 0;
      }
    }
  }

  render() {
    if(this.status == 1){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }    
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let allBonus = [];
let player = new Player(218, 465, 100, 84, 'images/char-boy.png');
const enemySpawnLineY = [140, 220, 300];
const bonusSpawnLineX = [10,110,213,313, 413];
const bonusSpawnLineY = [133, 215, 300];

for(i = 0; i < 4; i++){
  // add the new object to the objects[] array
  allEnemies.push(new Enemy(Math.random()*420, enemySpawnLineY[Math.floor(Math.random()*4)], Math.random()*100+30, player, 'images/enemy-bug.png'));
}

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

setInterval(addEnemies, 1300);
setInterval(addBonus, 3000);
allBonus.push(new Bonus(bonusSpawnLineX[1], bonusSpawnLineY[0], 'images/Heart.png', 15, player));

function addEnemies() {
  allEnemies.push(new Enemy(-100, enemySpawnLineY[Math.floor(Math.random()*3)], Math.random()*100+30, player, 'images/enemy-bug.png'));
}

function addBonus(){

  switch (Math.floor(Math.random()*3)){
    case(0):
      allBonus.push(new Bonus(bonusSpawnLineX[Math.floor(Math.random()*4)], bonusSpawnLineY[Math.floor(Math.random()*3)], 'images/Star.png', 5, player));
      break;
    case(1):
      allBonus.push(new Bonus(bonusSpawnLineX[Math.floor(Math.random()*4)], bonusSpawnLineY[Math.floor(Math.random()*3)], 'images/Key.png', 10, player));
    case(2):
      allBonus.push(new Bonus(bonusSpawnLineX[Math.floor(Math.random()*4)], bonusSpawnLineY[Math.floor(Math.random()*3)], 'images/Heart.png', 15, player));
  }  
}