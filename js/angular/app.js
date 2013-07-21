'use strict';


/*------------------------------------*\
   CONTENTS
\*------------------------------------*/
/*

APP
 - 
 
*/


/*------------------------------------*\
   APP
\*------------------------------------*/

// Create a new app
var app = angular.module('dungeon', []);
 
// register a new service
app.value('appName', 'Dungeon Crawler');
 
// configure existing services inside initialization blocks.
app.config(function($locationProvider) {
      // Configure existing providers
  	$locationProvider.hashPrefix('!');
});

// Global Varibles 

var cellSize = 32;
var gridSize =  cellSize * cellSize;

