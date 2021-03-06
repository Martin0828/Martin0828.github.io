define( function( require, exports, module){
	var oPro = document.getElementsByClassName("project")[0];
	var parent = document.getElementById("page-three");
	var aA = oPro.getElementsByTagName("a");
	
	function initIn(){
		var str = '<a href="https://martin0828.github.io/mobile/index.html"><img src="img/mobile.png" alt="移动端"><span>移动端+原生js</span></a>\
					<a href="https://martin0828.github.io/huoying/index.html"><img src="img/huoying.png" alt="火盈"><span>整站开发</span></a>\
					<a href="https://martin0828.github.io/traffic/login.html"><img src="img/trafic.png" alt="交通调查"><span>交通调查</span></a>\
					<a href="https://martin0828.github.io/shop/index.html"><img src="img/taobao.png" alt=""><span>移动端淘宝</span></a>\
					<a href="https://martin0828.github.io/shop/index.html"><img src="img/shop.png" alt="商城"><span>购物商城</span></a>\
					<a href="https://martin0828.github.io/mi/index.html"><img src="img/mi.png" alt=""><span>小米官网</span></a>\
					<a href="https://martin0828.github.io/qihud/index.html"><img src="img/qihud.png" alt=""><span>企互动官网</span></a>\
					<a href="https://martin0828.github.io/muk/index.html"><img src="img/muk.png" alt=""><span>慕课网官网</span></a>';

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
		for( var i = 0; i < aA.length; i++ ){
			posArr.push( { L : aA[i].offsetLeft , T : aA[i].offsetTop } );
		}	

		//每个元素都绝对定位
		for( var j = 0;j < aA.length; j++ ){
			aA[j].style.position = "absolute";
			aA[j].style.left = posArr[j].L + "px";
			aA[j].style.top = posArr[j].T + "px";
			aA[j].index = j;
		}

		function moveInit(){	
			var nowArr = moveArr[ blankIndex ];
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

			for(var j = 0; j < aA.length; j++ ){
				if( aA[j].index == nowIndex ){ 
					aA[j].style.left = targetL;
					aA[j].style.top = targetT;
					aA[j].addEventListener( "transitionend", change, false );
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
