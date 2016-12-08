define( function( require, exports, module ){
	var tip = document.getElementsByClassName("tip")[0];
	var tipTitle = document.getElementsByClassName("tip-title")[0];
	var oTop = document.getElementsByClassName("top")[0];
	var oWrap = document.getElementsByClassName("wrap")[0];
	var aDiv = oWrap.getElementsByTagName("div");
	function initIn(){
		tip.style.transition = ".3s";
		tip.style.right = 0;
		tipTitle.style.transition = ".3s .3s";
		tipTitle.style.right = "35%";
		oTop.style.transition = ".3s .6s";
		oTop.style.right = "0";
		setTimeout(function(){
			require("paper.js").paper();
		}, 1000)
	}
	function initOut(){
		tip.style.right = "-100%";
		tipTitle.style.right = "-100%";
		oTop.style.right = "-100%";
		for( var i = 0; i < aDiv.length; i++ ){
			aDiv[i].className = "";
		}
	}
	exports.initIn = initIn;
	exports.initOut = initOut;
// <<<<<<< HEAD
})
// =======
// })
// >>>>>>> origin/master
