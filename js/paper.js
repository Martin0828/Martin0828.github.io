define(function(require,exports,module){
	function paper(){
		var oWrap=document.getElementsByClassName("wrap")[0];
		var aDiv=oWrap.getElementsByTagName("div");
		var oTimer=null;
		var i=0;
		open();
		function open(){
			clearInterval(oTimer);
			i=0;
			oTimer=setInterval(function(){
				aDiv[i].className="show";
				i++;
				if(i==aDiv.length){
					clearInterval(oTimer);
				}
			},100)
		}
	}
	exports.paper=paper;
})
