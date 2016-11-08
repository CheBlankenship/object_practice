function Character () {}

function Hero(){
  this.name = 'Hero';
  this.health = 10;
  this.power = 5;
  // Hero.prototype.attack = function() {
  //   console.log('CHeck');
  // };
}

function Zombie(){
  this.name = 'Zombie';
  this.health = 10;
  this.power = 5;
}

Character.prototype.attack = function(enemy) {
  var chance = Math.floor(Math.random() * 10) + 1;
  // 20% double chance
  if(chance >=8){
    enemy.health -= this.power * 2;
  }
  else{
    enemy.health -= this.power;
  }
  return enemy.health;
};

Hero.prototype = Object.create(Character.prototype);
Zombie.prototype = Object.create(Charactor.prototype);
