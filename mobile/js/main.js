// 获得id
function id( id ){

	return document.getElementById( id );

}
//获得文档宽高
function view() {

    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };

}
//封装增加删除class类
function addClass( obj, sClass ) { 
    var aClass = obj.className.split(' ');

    if ( !obj.className ) {
        obj.className = sClass;
        return;
    }

    for (var i = 0; i < aClass.length; i++ ) {
        if (aClass[i] === sClass) return;
    }

    obj.className += ' ' + sClass;
}

function removeClass( obj, sClass ) { 

    var aClass = obj.className.split(' ');

    if (!obj.className) return;

    for (var i = 0; i < aClass.length; i++) {

        if ( aClass[i] === sClass ) {
            aClass.splice( i, 1 );
            obj.className = aClass.join(' ');
            break;
        }

    }

}

//页面加载
function fnLoad (){

	var iTime = new Date().getTime();
	var oW = id("welcome");
	var bImgLoad = true;//?没写是否加载完成
	var bTime = false;
	var oTimer = 0;

	oTimer = setInterval ( function(){

		if( new Date().getTime()-iTime >= 3000 ){
			bTime = true;
		}

		if( bImgLoad && bTime ){
			clearInterval( oTimer );
			oW.style.opacity = 0;
		}

	}, 1000 );

	oW.addEventListener( "transitionend", fnEnd, false );

	function fnEnd (){
		removeClass( oW, "pageShow");
		fnTab();
	}

}
//取消默认事件,否则mouseomove有问题
document.addEventListener( "touchmove", function( ev ){

	ev.preventDefault();

}, false )
//首页切换
function fnTab(){

	var oTab = id( "tabPic" );
	var oList = id( "picList" );
	var aNav = oTab.getElementsByTagName( "nav" )[0].children;//小圆点
	var iNow = 0;//当前索引
	var iX = 0;//当前位移
	var iW = view().w;//屏幕宽度
	var oTimer = 0;//定时器
	var iStartX = 0;
	var iStartTouchX = 0;//每次点击位置
	auto();

	function auto(){
		oTimer = setInterval( function(){
			iNow++;
			iNow = iNow % aNav.length;
			tab();
		}, 2000)
	}

	oTab.addEventListener( "touchstart", fnStart, false );
	oTab.addEventListener( "touchmove", fnMove, false );
	oTab.addEventListener( "touchend", fnEnd, false );

	if( !window.bfnStore ){
		fnScore();
		window.bfnStore = true;
	}

	function fnStart( ev ){
		clearInterval( oTimer);
		oList.style.transition = "none";
		ev = ev.changedTouches[0];
		iStartTouchX = ev.pageX;
		iStartX = iX;
	}

	function fnMove( ev ){
		ev = ev.changedTouches[0];
		var iDis = ev.pageX - iStartTouchX;
		iX = iStartX + iDis;
		oList.style.transform = "translateX("+ iX +"px)";
	}

	function fnEnd(){
		iNow = -iX / iW;
		iNow = iNow % 1 < 0.3 ? Math.floor( iNow ): Math.ceil( iNow );

		if( iNow < 0 ){
			iNow = 0;
		}

		if( iNow > aNav.length -1 ){
			iNow = aNav.length - 1;
		}

		tab();
		auto();
	}

	function tab(){

		iX = -iNow * iW;
		oList.style.transition = "0.5s";
		oList.style.transform = "translateX("+ iX +"px)";

		for( var i = 0; i < aNav.length; i++ ){
			removeClass( aNav[i], "active");
		}

		addClass( aNav[ iNow ], "active" );

	}
}


//评分
function fnScore(){

	var oScore = id( "score");
	var aLi = oScore.getElementsByTagName("li");
	var arr = [ "好失望", "没有想象的那么差", "很一般", "良好", "棒极了"];

	for( var i = 0; i < aLi.length; i++ ){
		fn( aLi[i] );
	}

	function fn( oLi ){
		var aNav = oLi.getElementsByTagName("a");
		var oInp = oLi.getElementsByTagName("input")[0];

		for(var i = 0; i < aNav.length; i++ ){
			aNav[i].index = i;
			aNav[i].addEventListener( "touchstart", function(){

				for( var i = 0; i < aNav.length; i++ ){

					if( i <= this.index ){
						addClass( aNav[i], "active");
					}

					else{
						removeClass( aNav[i], "active");
					}

				}

				oInp.value = arr[ this.index ];

			}, false )

		}

	}

	if( !window.bfnIndex ){
		fnIndex();
		window.bfnIndex = true;
	}

}


function fnIndex(){

	var oIndex = id("index");
	var oBtn = oIndex.getElementsByClassName("btn")[0];
	var bScore = false;
	var oInfo = oIndex.getElementsByClassName("info")[0];
	oBtn.addEventListener( "touchend", fnEnd, false);

	function fnEnd(){
		bScore = fnScoreChecked();

		if( bScore ){

			if( bTag() ){
				fnIndexout();
			}

			else{
				fnInfo( oInfo, "给景区添加标签");
			}

		}

		else{
			fnInfo( oInfo, "给景区评分");
		}

	}
	function fnScoreChecked(){

		var oScore = id("score");
		var aInput = oScore.getElementsByTagName("input");

		for( var i = 0; i < aInput.length; i++){

			if( aInput[i].value == 0 ){
				return false;
			}

		}	

		return true;

	}
	function bTag(){

		var oTag = id( "indexTag" );
		var aInput = oTag.getElementsByTagName( "input" );

		for( var i = 0; i < aInput.length; i++ ){

			if( aInput[i].checked ){
				return true;
			}

		}

		return false;
	}
}


function fnInfo( oInfo, sInfo ){

		oInfo.innerHTML = sInfo;
		oInfo.style.transform = "scale(1)";
		oInfo.style.opacity = 1;

		setTimeout( function(){
			oInfo.style.transform = "scale(0)";
			oInfo.style.opacity = 0;
		}, 1000 )

}


//主页跳出
function fnIndexout(){

	var oMask = id("mask");
	var oIndex = id("index");
	var oNews = id("news");
	addClass( oMask, "pageShow");
	addClass( oNews, "pageShow");

	if( !window.bfnNews ){
		fnNews();
		window.bfnNews = true;
	}

	setTimeout( function(){
		oMask.style.opacity = 1;
		oIndex.style.filter = "blur(10px)";
		oIndex.style.WebkitFilter = "blur(10px)";
	}, 14 )

	setTimeout( function(){
		oMask.style.opacity = 0;
		oIndex.style.filter = "blur(0px)";
		oIndex.style.WebkitFilter = "blur(0px)";
		oNews.style.opacity = 1;
		oNews.style.transition = "0.5s";
		removeClass( oMask, "pageShow");
	}, 1000 )

}

//上传图片
function fnNews(){
	var oNews = id("news");
	var oInfo = oNews.getElementsByClassName("info")[0];
	var aInput = oNews.getElementsByTagName("input");
	aInput[0].addEventListener( "change", function(){

		if( this.files[0].type.split("/")[0] == "video"){
			fnNewsOut();
		}

		else{
			fnInfo( oInfo, "请上传视频" );
		}


	}, false )

	aInput[1].addEventListener( "change", function(){

		if( this.files[0].type.split("/")[0] == "image"){
			fnNewsOut();
			this.value = "";
		}

		else{
			fnInfo( oInfo, "请上传图片" );
		}

	}, false )	

}


function fnNewsOut(){

	var oNews = id("news");
	var oForm = id("form");
	oNews.style.cssText = "";
	addClass( oForm, "pageShow" );
	removeClass( oNews, "pageShow" );

	if( !window.bformIn ){
		formIn();
		window.bformIn = true;
	}

}


function formIn(){

	var oForm = id("form");
	var bOff = false;
	var bOver = id("over");
	var oBtn = oForm.getElementsByClassName("btn")[0];
	var aFormTag = id("formTag").getElementsByTagName("label");

	for( var i = 0; i < aFormTag.length; i++ ){
		aFormTag[i].addEventListener( "touchend", function(){
			bOff = true;
			addClass( oBtn, "submit");
		}, false )
	}

	oBtn.addEventListener( "touchend", function(){

		if( bOff ){

			for( var i = 0; i <aFormTag.length; i++ ){
				aFormTag[i].getElementsByTagName( "input")[0].checked = false;
			}

			bOff = false;
			addClass( bOver, "pageShow" );
			removeClass( oForm, "pageShow" );
			removeClass( oBtn, "submit" );
			over();

		}

	}, false )

}


//结束页面
function over(){

	var bOver = id("over");
	var oBtn = bOver.getElementsByClassName("btn")[0];

	oBtn.addEventListener( "touchend", function(){
		removeClass (bOver, "pageShow");
	}, false )

}
