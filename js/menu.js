define(function(require,exports,module){
	function menu(){
		var oHome=document.getElementById("home");
		var oImg=document.getElementsByTagName("img");
		var b=true;
		for(var i=0;i<oImg.length;i++){
			oImg[i].onclick=function(){
				this.style.transition="500ms";
				this.style.transform="scale(2) rotate(-720deg)";
				this.style.opacity=0.2;
				addEnd(this,end);
			}
		}
		function addEnd(obj,fn){
			obj.addEventListener("transitionend",fn,false);
			obj.addEventListener('WebkitTransitionEnd',fn,false);
		}
		function end(){
			this.style.transition="200ms";
			this.style.transform="scale(1) rotate(-720deg)";
			this.style.opacity=1;
			removeEnd(this,end);
		}
		function removeEnd(obj,fn){
			obj.removeEventListener("transitionend",fn,false);
		}
		oHome.onclick=function(){
			if(b){
				this.style.transform="rotate(-360deg)";
				for(var i=0;i<oImg.length;i++){
					oImg[i].style.left=getXY(90/4*i,-150).x+'px';
					oImg[i].style.top=getXY(90/4*i,-150).y+'px';
					oImg[i].style.transition="500ms "+i*100+"ms";
					oImg[i].style.transform="scale(1) rotate(-720deg)";
				}
			}
			else{
				for(var i=0;i<oImg.length;i++){
					oImg[i].style.left=0;
					oImg[i].style.top=0;
					oImg[i].style.transform="scale(1) rotate(0deg)";
					oImg[i].style.transition="500ms "+(oImg.length-i-1)*100+"ms";
					
				}
				this.style.transform="rotate(0deg)";
			}
			b=!b;
		}
		function getXY(iDeg,iRadius)
		{
			if(iDeg==0)
			{
				return {x:0,y:iRadius};
			}
			else if(iDeg==90)
			{
				return {x:iRadius,y:0};
			}
			return {x:Math.round(Math.sin(iDeg*Math.PI/180)*iRadius),y:Math.round(Math.cos(iDeg*Math.PI/180)*iRadius)};
		}
			}
	exports.menu=menu;
})
