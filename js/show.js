define(function(require,exports,module){
	function show(){
		var bg=document.getElementById('bg');
		var oLoad=document.getElementById("load");
		var oPic=document.getElementById("pic");
		var oPic2=document.getElementById("pic2");
		var oPic3=document.getElementById("pic3");
		var oShadow=document.getElementById("shadow");
		var oText=document.getElementById("text");
		var aSection=document.getElementsByTagName("section");
		var wrap=document.getElementById("container");
		require("startmove.js").startMove(bg,{"width":0},function(){
			bg.style.display="none";
			oPic.style.animationPlayState="paused";
			oPic2.style.animationPlayState="paused";
			oPic3.style.animationPlayState="paused";
			oShadow.style.animationPlayState="paused";
			require("pageOne.js").initIn();
			require("wheel.js").wheel(wrap);
		});
		require("startmove.js").startMove(oLoad,{"opacity":0},function(){
			oLoad.style.displa="none";
		});
		
	}
	exports.show=show;
})
