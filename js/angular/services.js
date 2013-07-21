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

// keyboard bind service
app.factory('$keys', function() {
    
    return {
        init: function() {
            $(document).on('keydown', null, 'up', function () {
                
            });
            $(document).on('keydown', null, 'down', function () {
                
            });
            $(document).on('keydown', null, 'left', function () {
                
            });
            $(document).on('keydown', null, 'right', function () {
                
            });
        }
    }
    
});