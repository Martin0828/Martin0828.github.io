define( function( require, exports, module){
	var oFooter = document.getElementsByClassName("footer")[0];
	function initIn(){
		oFooter.style.opacity = 1;
	}

	function initOut(){
		oFooter.style.opacity = 0;
	}

	exports.initIn=initIn;
	exports.initOut=initOut;
	
})
