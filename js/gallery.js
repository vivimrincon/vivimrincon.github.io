// With jQuery
$(document).on({
    "contextmenu": function(e) { 

        // Stop the context menu
        e.preventDefault();
    },
    "mousedown": function(e) {
    },
    "mouseup": function(e) {
    }
});

$(document).keydown(function(e){
    if(e.which === 123){
        // Disable F12 button
       return false;
 
    }

});