$(document).ready(function(){
		//the element with the gradient
		var element= $('body');

	    //the gradient's starting colors
		var colorStartTop = [135, 215, 228];
		var colorStartBottom = [177, 227, 237];
		
	    //the gradient's ending colors				
		var colorEndTop = [289, 185, 111];
		var colorEndBottom = [242, 217, 156];
	
		//the scroll position when the gradient begins changing
		var scrollStart = 1;

		//the scroll position when the gradient change is complete
		var scrollEnd = 500;

		//set the initial style
		element.css('background-image', 'linear-gradient(top, rgb('+ colorStartTop[0] + ', ' + colorStartTop[1] + ', ' + colorStartTop[2] + ') 40%, rgb(' + colorStartBottom[0] + ',' + colorStartBottom[1] + ',' + colorStartBottom[2] + ') 80%)')
		    			.css('background-image', '-o-linear-gradient(top, rgb('+ colorStartTop[0] + ', ' + colorStartTop[1] + ', ' + colorStartTop[2] + ') 40%, rgb(' + colorStartBottom[0] + ',' + colorStartBottom[1] + ',' + colorStartBottom[2] + ') 80%)')
		    			.css('background-image', '-ms-linear-gradient(top, rgb('+ colorStartTop[0] + ', ' + colorStartTop[1] + ', ' + colorStartTop[2] + ') 40%, rgb(' + colorStartBottom[0] + ',' + colorStartBottom[1] + ',' + colorStartBottom[2] + ') 80%)')
		    			.css('background-image', '-moz-linear-gradient(top, rgb('+ colorStartTop[0] + ', ' + colorStartTop[1] + ', ' + colorStartTop[2] + ') 40%, rgb(' + colorStartBottom[0] + ',' + colorStartBottom[1] + ',' + colorStartBottom[2] + ') 80%)')
		    			.css('background-image', '-webkit-linear-gradient(top, rgb('+ colorStartTop[0] + ', ' + colorStartTop[1] + ', ' + colorStartTop[2] + ') 40%, rgb(' + colorStartBottom[0] + ',' + colorStartBottom[1] + ',' + colorStartBottom[2] + ') 80%)');        

	//change on scroll
    $(document).scroll(function() {

        var percent = ($(this).scrollTop() - scrollStart) / (scrollEnd - scrollStart);
       
	    if (percent <= 1) {
	       
	    //TOP
	        //red
			if (colorStartTop[0] > colorEndTop[0]) {
				var rT = Math.round(colorStartTop[0] - (percent*(colorStartTop[0]-colorEndTop[0])));
			} else {
				var rT = Math.round(colorStartTop[0] + (percent*(colorEndTop[0]-colorStartTop[0])));
			};
	       
	        //green
	        if (colorStartTop[1] > colorEndTop[1]) {
				var gT = Math.round(colorStartTop[1] - (percent*(colorStartTop[1]-colorEndTop[1])));
			} else {
				var gT = Math.round(colorStartTop[1] + (percent*(colorEndTop[1]-colorStartTop[1])));
			};
	        
	        //blue
	        if (colorStartTop[2] > colorEndTop[2]) {
				var bT = Math.round(colorStartTop[2] - (percent*(colorStartTop[2]-colorEndTop[2])));
			} else {
				var bT = Math.round(colorStartTop[2] + (percent*(colorEndTop[2]-colorStartTop[2])));
			};
		   
	   //BOTTOM	
		    //red
			if (colorStartBottom[0] > colorEndBottom[0]) {
				var rB = Math.round(colorStartBottom[0] - (percent*(colorStartBottom[0]-colorEndBottom[0])));
			} else {
				var rB = Math.round(colorStartBottom[0] + (percent*(colorEndBottom[0]-colorStartBottom[0])));
			};
	       
	        //green
	        if (colorStartBottom[1] > colorEndBottom[1]) {
				var gB = Math.round(colorStartBottom[1] - (percent*(colorStartBottom[1]-colorEndBottom[1])));
			} else {
				var gB = Math.round(colorStartBottom[1] + (percent*(colorEndBottom[1]-colorStartBottom[1])));
			};
	        
	        //blue
	        if (colorStartBottom[2] > colorEndBottom[2]) {
				var bB = Math.round(colorStartBottom[2] - (percent*(colorStartBottom[2]-colorEndBottom[2])));
			} else {
				var bB = Math.round(colorStartBottom[2] + (percent*(colorEndBottom[2]-colorStartBottom[2])));
			};
	    
	       
        element.css('background-image', 'linear-gradient(top, rgb(' + rT + ', ' + gT + ', ' + bT + ') 40%, rgb(' + rB + ',' + gB + ',' + bB + ') 80%)')
        			.css('background-image', '-o-linear-gradient(top, rgb(' + rT + ', ' + gT + ', ' + bT + ') 40%, rgb(' + rB + ',' + gB + ',' + bB + ') 80%)')
        			.css('background-image', '-ms-linear-gradient(top, rgb(' + rT + ', ' + gT + ', ' + bT + ') 40%, rgb(' + rB + ',' + gB + ',' + bB + ') 80%)')
        			.css('background-image', '-moz-linear-gradient(top, rgb(' + rT + ', ' + gT + ', ' + bT + ') 40%, rgb(' + rB + ',' + gB + ',' + bB + ') 80%)')
        			.css('background-image', '-webkit-linear-gradient(top, rgb(' + rT + ', ' + gT + ', ' + bT + ') 50%, rgb(' + rB + ',' + gB + ',' + bB + ') 80%)');
        
        };
    });
});	