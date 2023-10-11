$(document).ready(function(){
    var HEIGHT = $(window).height();
            // variable set to 1 so we can add 1 to the div each time the fuc
            var count = 1;
            // function that moves box down
            function down(){
                //moves current box down, uses callback function to bring box back up
  				$("#div" + count).animate({top: HEIGHT}, 'slow', up);
			}
            // functtion that moves box up
            function up(){
                // checks if count is on the last box
            	if (count == 8) {
                    //brings last box back up 
                	$("#div" + count).animate({top: '0'}, 'slow', function() {
                    // sets count back to one    
                    count = 1;
                    //calls down function on the first box
                    down();
                    });
                }
                // if not last box, 
                else {
                    // incriment count by 1
                  count++;
                  // starts brining next box down after .325 milliseconds
                  setInterval(down(), 325);
                  // current decreases count by 1 to get current box
                  current = count -1
                  // bring current box back up
                  $("#div" + current).animate({top: '0'}, 'slow');
			}}
	
            down()






});