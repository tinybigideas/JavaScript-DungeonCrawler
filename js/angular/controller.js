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

function gridCtrl($scope) {
    $scope.grids = [];
    for( var i = 0; i < gridSize; i++) {
    	$scope.grids.push({
    		"id": i
    	});
    }
    
    $scope.grids[6].entrance = "true";

    console.log($scope.grids[6]);

    $("ul#map").css("width",gridSize * 2 + "px");
}