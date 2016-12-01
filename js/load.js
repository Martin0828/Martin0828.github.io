define(function(require,exports,module){
	function load(){
		var oPic=document.getElementById("pic");
		var oPic2=document.getElementById("pic2");
		var oPic3=document.getElementById("pic3");
		var oShadow=document.getElementById("shadow");
		var oText=document.getElementById("text");
		window.location.hash="message";
		var num=0;
		var timer=setInterval(add,10);
		function add(){
			num++;
			if (num==100) {
				clearInterval(timer);
				require("show.js").show();
			}
			oText.innerHTML=num+"%";
		}
	}
     load();
})
