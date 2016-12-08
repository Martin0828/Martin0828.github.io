define(function( require, exports, module ){
	var aSkill = document.getElementsByClassName("ability");
	function initIn( i ){
		require("startmove.js").startMove( aSkill[i-1],{"opacity":100});
	}
	function initOut(){
		for( var i = 0; i < aSkill.length; i++ ){
			aSkill[i].style.opacity = 0;
		}
	}
	exports.initIn = initIn;
	exports.initOut = initOut;
// <<<<<<< HEAD
})
// =======
// })
// >>>>>>> origin/master
