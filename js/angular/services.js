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
                if (pos >= cellSize) {
                    if ($('#gid_' + (pos - cellSize)).hasClass('path')) {
                        $player.moveTo(pos - cellSize);
                        window.scrollTo($("li.player"));
                    }
                } 
                // alert($player.get());
            });
            $(document).on('keydown', null, 'a', function () {
                pos = $player.get();
                if ((pos % cellSize) !== 0) {
                    if ($('#gid_' + (pos - 1)).hasClass('path')) {
                        $player.moveTo(pos - 1);
                        window.scrollTo($("li.player"));
                    }
                }   
            });
            $(document).on('keydown', null, 's', function () {
                pos = $player.get();
                $player.get();
                if ((last - pos) >= cellSize){
                    if ($('#gid_' + (pos + cellSize)).hasClass('path')) {
                        $player.moveTo(pos + cellSize);
                        window.scrollTo($("li.player"));
                    }
                } 
            });
            $(document).on('keydown', null, 'd', function () {
                pos = $player.get();
                if ((pos + 1) % cellSize){
                    if ($('#gid_' + (pos + 1)).hasClass('path')) {
                        $player.moveTo(pos + 1);
                        window.scrollTo($("li.player"));
                    }
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
            window.scrollTo($("li.player"));
        },
        get : function () {
            return parseInt($(".player").attr("id").split("gid_")[1]); 
        }
    }
});
 
//Tile Generator
 
app.factory('$tile', function($player) {
    return {
        generate : function(ent) {
            var pathTotal = (cellSize * 0.2) * 1000;
            var entrance = Math.round(Math.random() * cellSize);
            var pos = entrance;
            var last = parseInt($("li.cell:last-child").attr("id").split("gid_")[1]);
            var pathDirection;
            
            if (ent) {
               $player.moveTo(entrance);
                $("#gid_" + entrance).addClass("entrance"); 
            }
            
            for ( var i = 0; i < pathTotal; i++) {
                pathDirection = Math.round(Math.random()*4) + 1;
                   
                if (pathDirection == 1) { //up
                    if (pos >= (cellSize * 2)) {
                        pos = pos - cellSize;
                        $("#gid_" + pos).addClass("path");
                        
                        // add surrounding wall
                        $("#gid_" + pos + cellSize, "#gid_" + pos + 1, "#gid_" + pos - 1).addClass("innerWall");
                    } 
                } 
                else if (pathDirection == 2) { // right
                     if (((pos + 2) % cellSize) >= 2) {
                        (pos == cellSize) ? ((pos = pos + 1) + 1) : (pos = pos + 1);
                        $("#gid_" + pos).addClass("path");
                        
                        // add surrounding wall
                        $("#gid_" + pos + cellSize, "#gid_" + pos - cellSize, "#gid_" + pos - 1).addClass("innerWall");
                    } 
                } 
                else if (pathDirection == 3) { // down
                    if ((last - pos) >= (cellSize * 2)) {
                        (pos == cellSize) ? ((pos = pos + cellSize) + cellSize) : (pos = pos + cellSize);
                        $("#gid_" + pos).addClass("path");
                        
                        // add surrounding wall
                        $("#gid_" + pos - cellSize, "#gid_" + pos + 1, "#gid_" + pos - 1).addClass("innerWall");
                    } 
                } 
                else if (pathDirection == 4) { // left
                    if (pos % cellSize >= 2) {
                        (pos == cellSize) ? ((pos = pos - 1) - 1) : (pos = pos - 1);
                        $("#gid_" + pos).addClass("path");
                        
                        // add surrounding wall
                        $("#gid_" + pos + cellSize, "#gid_" + pos + 1, "#gid_" + pos - cellSize).addClass("innerWall");
                    } 
                }
                
                // add exit
                if (i === pathTotal) {
                    $("#gid_" + pos).addClass("exit");
                }
 
            }
        }
    }
});