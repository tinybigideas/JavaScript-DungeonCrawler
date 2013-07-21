'use strict';

/*------------------------------------*\
   CONTENTS
\*------------------------------------*/
/*

CONTROLLERS
*/


/*------------------------------------*\
   CONTROLLERS
    Anything that controls data
\*------------------------------------*/

function gridCtrl($scope, $keys, $player, $tile) {
    $scope.grids = [];
    for( var i = 0; i < gridSize; i++) {
    	$scope.grids.push({
    		"id": i
    	});
    }

    $("ul#map").css("width",gridSize + "px");

    // once grid complete
    setTimeout(function () {
        $tile.generate();
        // $player.set(6);
        $keys.init();
    $("ul>li.cell").css({width: cellSize + "px", height : cellSize + "px"});

    }, 500);
}