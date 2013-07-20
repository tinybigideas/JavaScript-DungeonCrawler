var playerHP = player.HP * 10;
var enemyHP = enemy.HP * 10;

function health($scope) {
	$scope.playerHealth = playerHP;
	$scope.enemyHealth = enemyHP;
}