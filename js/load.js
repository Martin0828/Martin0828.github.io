define(function(require,exports,module){
	function load(){
		var oPic=document.getElementById("pic");
		var oPic2=document.getElementById("pic2");
		var oPic3=document.getElementById("pic3");
		var oShadow=document.getElementById("shadow");
		var oText=document.getElementById("text");
		window.location.hash="message";
		var num=0;
		var aPic=["https://github.com/Martin0828/Martin0828.github.io/blob/master/img/person.ico",
			"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/bg1.jpg",
			"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/bg2.jpg",
			"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/bg3.jpg",
			"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/bg-4.png",
			"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/loading3.png",
			"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/loading4.png",
			"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/loading5.png",
			"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/photo3.jpg",
			"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/section1.png"
		];
		for(var i=0;i<aPic.length;i++){
			var oImg=new Image();
			oImg.src=aPic[i];
			oImg.index=i;
			oImg.onload=function(){
				num++;
				oText.innerHTML=Math.floor(num/aPic.length*100)+"%";
				if(num==aPic.length){
					// oPic.style.animationPlayState="paused";
					// oPic2.style.animationPlayState="paused";
					// oPic3.style.animationPlayState="paused";
					// oShadow.style.animationPlayState="paused";
					require("show.js").show();
				}
			}
			oImg.onerror=function(){
				num++;
				oText.innerHTML=num/aPic.length*100+"%";
				if(num==aPic.length){
					// oPic.style.animationPlayState="paused";
					// oPic2.style.animationPlayState="paused";
					// oPic3.style.animationPlayState="paused";
					// oShadow.style.animationPlayState="paused";
					require("show.js").show();
				}
			}
		}
	}
	load();
})	

