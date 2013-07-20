var cords = {
	x : 1,
	y : 1
};

$(document).keydown(function(e){
	if (e.keyCode == 87){ // up = 87
       cords.y -= 1;
       console.log(cords);
    }
    if (e.keyCode == 83){ // down = 83
      cords.y += 1;
      console.log(cords); 
    }
    if(e.keyCode == 68) { // right = 68
       cords.x += 1;
       console.log(cords);
    }
    if (e.keyCode == 65){ // left = 65
       cords.x -= 1;
       console.log(cords);
    }
    $('table td').css('background','white');
	$('table #'+cords.y+cords.x).css('background','blue');
});



var playerName = "Player";


var entityPrototype = {
  name:'Unknown',
  HP:10,
  Atk:0,
  Def:0,
  Lck:0
};

function Entity () {
}

Entity.prototype = entityPrototype;

player = new Entity();
player.name = playerName;
player.Atk = 3;
player.Def = 1;

enemy = new Entity();
enemy.name = 'enemy';
enemy.Atk = 3;
enemy.Def = 2;

var hi = function() {
  var healthLevelBar = document.getElementById('playerHealthLevel');
  healthLevelBar.style.width = player.HP*10 + "%";

  var healthLevelBar1 = document.getElementById('enemyHealthLevel');
  healthLevelBar1.style.width = enemy.HP*10 + "%";
}
hi();

// PLAYER CONTROLLS


// ATTACKING

var playerAttack = function(){
  var atkSum = player.Atk - enemy.Def,
  remainingHP = enemy.HP - atkSum;
  enemy.HP = remainingHP;
  if (enemy.HP<1){
    alert("He's dead Jim!");
  }
  hi();
};

var playerAttacks = function(){
  var luck = Math.random();
  console.log(luck);

  if (luck>0.9) {
    alert("your lucky have + 3 attack");
    var luckyShot = player.Atk + 3;
    player.Atk = luckyShot;
    playerAttack();
    var reversion = player.Atk - 3;
    player.Atk = reversion;
    hi();
  } else {
    playerAttack();
    hi();
  }

  if (luck<0.1) {
    alert("Back luck son, you tripped on a shoelace and last some health!");
    badLuck = player.HP - 3;
    player.HP = badLuck;
    hi();
  }

  return console.log("Enemy Health " + enemy.HP);
  hi();
};

// HEALING

var potion = function () {
  var healed = player.HP + 1;
  if (player.HP>9) {
    return alert("You are at full health");
    hi();
  } else {
    player.HP = healed;
    hi();
    return console.log("Your healed a little bit " + player.HP);
  }
  hi();
  alert('Enemy Tail Whips you!');
  enemyAttacks();
  hi();
};

// ENEMY ATTACKS

var enemyAttacks = function(){
  var atkSum = enemy.Atk - player.Def,
  remainingHP = player.HP - atkSum;
  player.HP = remainingHP;
  if (player.HP<1){
    alert("You Are Dead, sucks 2BU");
    hi();
  }
  hi();
  return console.log("They gotchya! Your at " + player.HP + " HP");
  
};





	