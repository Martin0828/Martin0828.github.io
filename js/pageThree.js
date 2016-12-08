define( function( require, exports, module ){
	function wheel( obj ){
		var aHide = document.getElementsByClassName('hide');
		var aSection = document.getElementsByTagName("section");
		var arr = [ "message", "skill", "job", "project", "thanks"];
		var canvas = document.getElementsByTagName("canvas");
		for( var i=0 ; i < canvas.length; i++ ){
			canvas[i].style.float = "left";
		}
		for( var i = 0; i <aHide.length; i++ ){
			aHide[i].style.display = "block";
		}
		obj.onmousewheel = fn;
		if( obj.addEventListener ){
			obj.addEventListener( 'DOMMouseScroll', fn, false );
		}
		var disW = window.screen.availHeight;
		var num = 0;
		var scroll = true;
		var clock = null;
		function fn( ev ){
			if( scroll ){
				var ev = ev || event;
				var b = true;
				if( ev.wheelDelta ){
					b = ev.wheelDelta > 0 ? true : false;
				}
				else{
					b = ev.detail < 0 ? true : false;
				}	
				if( b ){
					num++;
				}
				else if( !b ){
					num--;
				}
				if( num > 0 ){
					num = 0;
				}
				else if(num<-3){
					num=-3;
				}
				window.onhashchange = function(){
					switch( num ){
						case 0:
						setTimeout(function(){
							require("pageOne.js").initIn();
							
						}, 1000);
						setTimeout(function(){
							require("pageTwo.js").initOut(canvas);
						}, 1500)
						break;
						case -1:
						require("pageOne.js").initOut();
						setTimeout(function(){
							require("pageTwo.js").initIn(canvas);
						}, 1000);
						require("pageThree").initOut();
						break;
						case -2:
						
						setTimeout(function(){
							require("pageThree.js").initIn();
							
						}, 1000);
						setTimeout(function(){
							require("pageTwo.js").initOut(canvas);
						}, 1500)
						break;
						case -3:
						setTimeout(function(){
							require("pageFour.js").initIn();
						}, 1000);
						require("pageThree.js").initOut();
						break;
					}
					
				}
				obj.style.transform = "translateY(" + ( num * disW ) + "px)";
				//console.log(disW);
				if( ev.preventDefault){
					ev.preventDefault();
				}
				window.location.hash = arr[-num];
				scroll = false;
				clock = setTimeout(function(){
					scroll = true;
				}, 1000);
				return false;
			}
			else{
				return false;
			}
		}	
	}
	exports.wheel = wheel;
// <<<<<<< HEAD
})
// =======
// })
// >>>>>>> origin/master
