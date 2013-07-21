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

function gridCtrl($scope, $keys) {
    $scope.grids = [];
    for( var i = 0; i < gridSize; i++) {
    	$scope.grids.push({
    		"id": i
    	});
    }
    
    $scope.grids[6].entrance = "true";

    console.log($scope.grids[6]);

    $("ul#map").css("width",gridSize * 2 + "px");
    
    // once grid complete
    if ($scope.$last) {
            setTimeout(function () {
                $keys.init();
            }, 500);
    }
}