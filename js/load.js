define( function( require, exports, module ) {

	function load (){
		var Html=document.getElementsByTagName("html")[0];
		Html.style.width=window.screen.availWidth+"px";
		Html.style.height=window.screen.availHeight+"px";

		var oPic = document.getElementById("pic");
		var oPic2 = document.getElementById("pic2");
		var oPic3 = document.getElementById("pic3");
		var oShadow = document.getElementById("shadow");
		var oText = document.getElementById("text");

		window.location.hash = "message";
		var    num = 0;
		//图片地址
		var    aPic = [
				"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/person.ico",
				"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/bg1.jpg",
				"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/loading3.png",
				"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/loading4.png",
				"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/loading5.png",
				"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/photo2.png",
				"https://github.com/Martin0828/Martin0828.github.io/blob/master/img/section1.png"
			   ];

		//预加载图片
		
		for( var i = 0; i < aPic.length; i++ ){
			var oImg = new Image ();
				oImg.src = aPic[i];
				oImg.index = i;

				oImg.onload = function (){   //成功时执行
					num++;
					oText.innerHTML = Math.floor ( num / aPic.length * 100 ) + "%";

					if( num == aPic.length ){
						require ("show.js").show();
					}

				}

				oImg.onerror = function (){  //错误时执行
					num++;
					oText.innerHTML = Math.floor ( num / aPic.length * 100 ) + "%";

					if( num == aPic.length ){
						require ("show.js").show();
					}
					
				}
		}

	}

	load();

})	
