// ==============购物车====================
$('nav li:has(i)').mouseenter(function(){
	$(this).css("background",'#fff');
	$(this).find('a').css("color",'#ff6700');
	$(this).find('.shopping').css("zIndex","2").slideDown(200);
}).mouseleave(function(){
	$(this).css("background",'#424242');
	$(this).find('a').css("color",'#a8a8a8');
	$(this).find('.shopping').slideUp(200);
})
// ===============搜索=====================
$('input[type="submit"]').mouseover(function(){
	$(this).css({'background':'rgb(255,103,0)','color':'#fff','border':0});
}).mouseout(function(){
	$(this).css({'background':"#fff",'color':'#616161','border':'1px solid #b0b0b0'});
})
$('.orange').mouseover(function(){
	if(!$('#search').is(":focus")){
		$(".orange").css('border',"1px solid #b0b0b0");
		$("#search").css('borderRight','0');
	}
}).mouseout(function(){
	if(!$("#search").is(":focus")){
		$(".orange").css('border',"1px solid #e0e0e0");
		$("#search").css('borderRight','0');	
	}
})
	$("input[type='search']").click(function(ev){
	$(".orange").css('border',"1px solid #ff6700");
	$("#search").css('borderRight','0');
	$("#search").css("outline","#ff6700");
	$(".absolute:contains(小米5s首发)").css("top",'-500px');
	$(".orange:contains(空气净化器)").show().css("borderTop","0");
	ev.stopPropagation();
})
$(document).click(function(){
	$(".orange:contains(空气净化器)").hide().css("borderTop","0");
	$(".orange").css('border',"1px solid #e0e0e0");
	$("#search").css('borderRight','0');
	$(".absolute:contains(小米5s首发)").css("top",'42px');	
})
// ================小米logo=============================
$("img[logo='new']").mouseover(function(ev){
	var mytitle=$(this).attr('title');
	var $div=$("<div id='res'>"+mytitle+"</div>");
	$(this).removeAttr("title");
	$('body').append($div);
	$("#res").css({"top":ev.pageY+10,"left":ev.pageX+10}).show();
}).mouseout(function(){
	$(this).attr('title',$("#res").text());
	$("#res").remove();
}).mousemove(function(ev){
	$("#res").css({"top":ev.pageY+10,"left":ev.pageX+10});
})
// ================小米下拉选项卡===============================
$("#banner 	ul.left li").mouseenter(function(){
	if($(this).siblings().find(".xiaomi-phone").is(":animated")){
		$(this).siblings().find(".xiaomi-phone").css("display","none");
		$(this).find(".xiaomi-phone").css("display","block");
	}
	else{
		$(this).find(".xiaomi-phone").stop().slideDown(200);
	}
	$(this).find(".xiaomi-phone").css("top",101);
	$("#banner").css("border-bottom","1px solid #e0e0e0");
}).mouseleave(function(){
	if(!$(this).siblings().find(".xiaomi-phone").is(":animated")){
		$(this).find(".xiaomi-phone").stop().slideUp(200);
	}
	$(this).find(".xiaomi-phone").css("top",100);
		$("#banner").css("border-bottom","0");
})
// ==================轮播图================================
var arr=["images/bigbg1.jpg","images/bigbg2.jpg","images/bigbg3.jpg","images/bigbg4.jpg","images/bigbg5.jpg"];
var num=-1;
var timer;
    timer=setInterval(start,1000);
function start(){
	num++;
	autoPlay();
}    
function autoPlay(){
	if(num==arr.length){
		num=0;
	}
	else if(num<0){
		num=arr.length-1;
	}
	$("aside .right img").attr("src",arr[num]);
	$("#switch li").eq(num).css("background","#fff").siblings().css("background","none");
}
// =========前后按钮========
$("#pre").click(function(){
	num--;
	autoPlay();
}).mouseover(function(){
	clearInterval(timer);
	$(this).css("background","#666");
}).mouseout(function(){
	timer=setInterval(start,1000);
	$(this).css("background","");
});
$("#con").click(function(){
	num++;
	autoPlay();
}).mouseover(function(){
	clearInterval(timer);
	$(this).css("background","#666");
}).mouseout(function(){
	timer=setInterval(start,1000);
	$(this).css("background","");
})
// =======右下角切换========
$("#switch li").click(function(){
	$(this).css("background","#fff").siblings().css("background","none");
	$("aside .right img").attr("src",arr[$(this).index()]);
})
// ====================二级菜单=========================
$("aside .left>ul>li").mouseover(function(){
	$(this).find("ul").css("display","block");
}).mouseout(function(){
	$(this).find("ul").css("display","none");
})
// ====================无缝滚动==============================
var scroll=setInterval(autoScroll,800);
var num=0;
$("button").eq(0).click(function(){
	num=0;
	autoScroll();
})
$("button").eq(1).click(function(){
	num=1;
	autoScroll();
})
function autoScroll(){
	if(num==1){
		$(".star>div>ul").animate({"left":"0"},200);
		num=0;
	}
	else if(num==0){
		$(".star>div>ul").animate({"left":"-1240px"},200);
		num=1;
	}
}
$("button").mouseover(function(){
	clearInterval(scroll);
}).mouseout(function(){
	scroll=setInterval(autoScroll,800);
})
// =======================搭配选项卡==========================
$("#match>h3>span").mouseover(function(){
	$('div.match').eq($(this).index()).addClass("visible").siblings().removeClass("visible");
	$(this).css({"color":"#ff6700","border-bottom":"1px solid #ff6700"}).siblings().css({"color":"#000","border":"none"})
})
$("#peijian>h3>span").mouseover(function(){
	$('div.peijian').eq($(this).index()).addClass("show").siblings().removeClass("show");
	$(this).css({"color":"#ff6700","border-bottom":"1px solid #ff6700"}).siblings().css({"color":"#000","border":"none"})
})
$("#arround>h3>span").mouseover(function(){
	$('div.arround').eq($(this).index()).addClass("visibility").siblings().removeClass("visibility");
	$(this).css({"color":"#ff6700","border-bottom":"1px solid #ff6700"}).siblings().css({"color":"#000","border":"none"})
})
// =======================为你推荐==============================
$("#recommend small").eq(1).click(function(ev){
		$("#recommend small").find("i").css("color","#666");
		if(parseInt($("#recom").css("left"))==-1240){
			
			$(this).find("i").css("color","#e0e0e0");
			$("#recom").animate({"left":"0"},200);
		}
		else if(parseInt($("#recom").css("left"))<-1){
			$("#recom").animate({"left":"+=1240px"},200);
		}
		return false;
})
$("#recommend small").eq(0).click(function(ev){
	$("#recommend small").find("i").css("color","#666");
	if(parseInt($("#recom").css("left"))==-2480){

		$(this).find("i").css("color","#e0e0e0");
		$("#recom").animate({"left":"-=1240px"},200);
	}
	else if(parseInt($("#recom").css("left"))>-2500){
		$("#recom").animate({"left":"-=1240px"},200);
	}
	return false;
})
// ========================内容区============================
$(".content-area:eq(0) ul li").click(function(){
	$(".content-area:eq(0) ul li").css({"border":"none"});
	$(this).css("border","1px solid #ff6700");
	$(".content-area:eq(0) ul li").find("div").css("background","#999");
	$(this).find("div").css("background","#fff");
	$(".content-area:eq(0)>div").css("display","none");
	$(".content-area:eq(0)>div").eq($(this).index()).css("display","block");
})

$(".content-area:eq(1) ul li").click(function(){
	$(".content-area:eq(1) ul li").css({"border":"none"});
	$(this).css("border","1px solid #ff6700");
	$(".content-area:eq(1) ul li").find("div").css("background","#999");
	$(this).find("div").css("background","#fff");
	$(".content-area:eq(1)>div").css("display","none");
	$(".content-area:eq(1)>div").eq($(this).index()).css("display","block");
})

$(".content-area:eq(2) ul li").click(function(){
	$(".content-area:eq(2) ul li").css({"border":"none"});
	$(this).css("border","1px solid #ff6700");
	$(".content-area:eq(2) ul li").find("div").css("background","#999");
	$(this).find("div").css("background","#fff");
	$(".content-area:eq(2)>div").css("display","none");
	$(".content-area:eq(2)>div").eq($(this).index()).css("display","block");
})

$(".content-area:eq(3) ul li").click(function(){
	$(".content-area:eq(3) ul li").css({"border":"none"});
	$(this).css("border","1px solid #ff6700");
	$(".content-area:eq(3) ul li").find("div").css("background","#999");
	$(this).find("div").css("background","#fff");
	$(".content-area:eq(3)>div").css("display","none");
	$(".content-area:eq(3)>div").eq($(this).index()).css("display","block");
})

// ========================左右切换=================================
var count0=0;
$(".content-area:eq(0)>span").eq(0).click(function(){
	if(count0<$(".content-area:eq(0)>div").length){
		count0++;
		$(".content-area:eq(0)>div").eq(count0).css("display","block").siblings("div").css("display","none");
	}
})
$(".content-area:eq(0)>span").eq(1).click(function(){
	if(count0>0){
		count0--;
		$(".content-area:eq(0)>div").eq(count0).css("display","block").siblings("div").css("display","none");
	}
})
var count1=0;
$(".content-area:eq(1)>span").eq(0).click(function(){
	if(count1<$(".content-area>div").length){
		count1++;
		$(".content-area:eq(1)>div").eq(count1).css("display","block").siblings("div").css("display","none");
	}
})
$(".content-area:eq(1)>span").eq(1).click(function(){
	if(count1>0){
		count1--;
		$(".content-area:eq(1)>div").eq(count1).css("display","block").siblings("div").css("display","none");
	}
})
var count2=0;
$(".content-area:eq(2)>span").eq(0).click(function(){
	if(count2<$(".content-area:eq(0)>div").length){
		count2++;
		$(".content-area:eq(2)>div").eq(count2).css("display","block").siblings("div").css("display","none");
	}
})
$(".content-area:eq(2)>span").eq(1).click(function(){
	if(count2>0){
		count2--;
		$(".content-area:eq(2)>div").eq(count2).css("display","block").siblings("div").css("display","none");
	}
})
var count3=0;
$(".content-area:eq(3)>span").eq(0).click(function(){
	if(count3<$(".content-area:eq(0)>div").length){
		count3++;
		$(".content-area:eq(3)>div").eq(count3).css("display","block").siblings("div").css("display","none");
	}
})
$(".content-area:eq(3)>span").eq(1).click(function(){
	if(count3>0){
		count3--;
		$(".content-area:eq(3)>div").eq(count3).css("display","block").siblings("div").css("display","none");
	}
})

