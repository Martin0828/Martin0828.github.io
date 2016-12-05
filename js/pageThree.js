define( function( require, exports, module){
	var oPro = document.getElementsByClassName("project")[0];
	var parent = document.getElementById("page-three");
	var aImg = oPro.getElementsByTagName("img");
	
	function initIn(){
		var str = '<img src="img/mi.png" alt="" href="https://github.com/Martin0828/Martin0828.github.io/blob/master/mobile/index.html">\
					<img src="img/huoying.png" alt="">\
					<img src="img/trafic.png" alt="">\
					<img src="img/surway.png" alt="">\
					<img src="img/shop.png" alt="">\
					<img src="img/6.png" alt="">\
					<img src="img/7.png" alt="">\
					<img src="img/8.png" alt="">';

		oPro.innerHTML=str;

		var posArr = [];
		var blankIndex = 8;
		var prevIndex = 8;
		var cols = 3;
		var moveArr = [   //每个位置可能出现的可能性
			[1,3],
			[0,2,4],
			[1,5],
			[0,4,6],
			[1,3,5,7],
			[2,4,8],
			[3,7],
			[4,6,8],
			[5,7]
		];

		//每个img元素相对于定位父级的位置
		for( var i = 0; i < aImg.length; i++ ){
			posArr.push({ L : aImg[i].offsetLeft , T : aImg[i].offsetTop } );
		}	

		//每个元素都绝对定位
		for( var j = 0;j < aImg.length; j++ ){
			aImg[j].style.position = "absolute";
			aImg[j].style.left = posArr[j].L + "px";
			aImg[j].style.top = posArr[j].T + "px";
			aImg[j].index = j;
		}

		function moveInit(){	
			var nowArr = moveArr[blankIndex];
			var filterArr = [];  //新数组

			for( var i=0;i < nowArr.length; i++ ){  //去除返回上次的可能性
				if( nowArr[i] != prevIndex ){
					filterArr.push( nowArr[i] );
				}
			}

			prevIndex = blankIndex;
			var nowIndex = filterArr[Math.floor( Math.random() * filterArr.length )];
			var targetL = blankIndex % cols * 150 + "px";
			var targetT = Math.floor( blankIndex / cols ) * 150 + "px";
			var tmp = '';

			for(var j = 0; j < aImg.length; j++ ){
				if( aImg[j].index == nowIndex ){ 
					aImg[j].style.left = targetL;
					aImg[j].style.top = targetT;
					aImg[j].addEventListener( "transitionend", change, false );
				}
			}

		}

		setTimeout( moveInit, 300 );

		function change(){
			tmp = blankIndex;
			blankIndex = this.index;
			this.index = tmp;
			this.removeEventListener( "transtionend", change, false );
			moveInit();			
		}

	}
	
	function initOut(){
		oPro.innerHTML = "";
	}

	exports.initIn = initIn;
	exports.initOut = initOut;

})
