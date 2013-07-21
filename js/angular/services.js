'use strict';


/*------------------------------------*\
   CONTENTS
\*------------------------------------*/
/*

SERVICES
 
*/


/*------------------------------------*\
   SERVICES
    Functions for both controllers and directives
\*------------------------------------*/

// keyboard bind service
app.factory('$keys', function($player) {
    // console.log(pos);
    return {
        init: function() {
            var pos = $player.get();
            var last = parseInt($("li.cell:last-child").attr("id").split("gid_")[1]);
            $(document).on('keydown', null, 'w', function () {
                pos = $player.get();
                if (pos >= cellSize){
                    $player.moveTo(pos-cellSize);
                } 
                // alert($player.get());
            });
            $(document).on('keydown', null, 'a', function () {
                pos = $player.get();
                if ((pos % cellSize) !== 0){
                    $player.moveTo(pos-1);
                } 
            });
            $(document).on('keydown', null, 's', function () {
                pos = $player.get();
                $player.get();
                if ((last - pos) >= cellSize){
                    $player.moveTo(pos+cellSize);
                } 
            });
            $(document).on('keydown', null, 'd', function () {
                pos = $player.get();
                if ((pos + 1) % cellSize){
                    $player.moveTo(pos+1);
                } 
            });
        }
    }
});


// positioning service
app.factory('$player', function() {
    return {
        moveTo : function (id) {
            console.log(id);
            $("li.cell").removeClass("player");
            $("#gid_" + id).addClass("player"); 
        },
        get : function () {
            return parseInt($(".player").attr("id").split("gid_")[1]); 
        }
    }
});

//Tile Generator

app.factory('$tile', function($player) {
    return {
        generate : function() {
            var pathTotal = (cellSize * 0.2) * 200;
            var entrance = Math.round(Math.random() * cellSize);
            var pos = entrance;
            var last = parseInt($("li.cell:last-child").attr("id").split("gid_")[1]);
            var pathDirection;
            
            $player.moveTo(entrance);

            $("#gid_" + entrance).addClass("entrance"); 

            for ( var i = 0; i < pathTotal; i++) {
                pathDirection = Math.round(Math.random()*4) + 1;
                   
                if ( pathDirection == 1) { //up
                    if (pos >= cellSize){
                        (pos == cellSize) ? ((pos = pos - cellSize) - cellSize) : (pos = pos - cellSize);
                        $("#gid_" + pos).addClass("path").css('background-color', 'green');
                        console.log("up" + pos);
                    } 
                } 
                else if ( pathDirection == 2 ) { // right
                     if ((last - pos) >= cellSize){
                        (pos == cellSize) ? ((pos = pos + 1) + 1) : (pos = pos + 1);
                        $("#gid_" + pos).addClass("path").css('background-color', 'blue');
                    } 
                } 
                else if ( pathDirection == 3 ) { // down
                    if ((pos % cellSize) !== 0){
                        (pos == cellSize) ? ((pos = pos + cellSize) + cellSize) : (pos = pos + cellSize);
                        $("#gid_" + pos).addClass("path").css('background-color', 'grey');
                    } 
                } 
                else if ( pathDirection == 4 ) { // left
                 
                    if ((pos + 1) % cellSize){
                        (pos == cellSize) ? ((pos = pos - 1) - 1) : (pos = pos - 1);
                        $("#gid_" + pos).addClass("path");
                    } 
                }       
            }
        }
    }
});
