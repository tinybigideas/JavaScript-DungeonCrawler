'use strict';


/*------------------------------------*\
   CONTENTS
\*------------------------------------*/
/*

SERVICES
 - 
 
*/


/*------------------------------------*\
   SERVICES
    Functions for both controllers and directives
\*------------------------------------*/

//  service
app.factory('$keys', function() {

	$(document).keydown(function(e){
	if (e.keyCode == 87){ // up = 87
       startPos-= 16;
       console.log(cords);
    }
    if (e.keyCode == 83){ // down = 83
      startPos += 16;
      console.log(cords); 
    }
    if(e.keyCode == 68) { // right = 68
       startPos += 1;
       console.log(cords);
    }
    if (e.keyCode == 65){ // left = 65
       startPos -= 1;
       console.log(cords);
	});

    return {
        
	}
});