define( function( require, exports, module){

	var oPro = document.getElementsByClassName("program")[0];
	var oStudy = document.getElementsByClassName("study")[0];

	function initIn( canvas ){

		function line( canvas ){
			//上面画布
			var ctx = canvas[0].getContext("2d");
				canvas[0].width = 1300;
				canvas[0].height = 225;
				ctx.beginPath();
				ctx.moveTo( 0, 225 );
				ctx.lineWidth = 10;

			var count = 0;
				ctx.strokeStyle = "#0f0";

			row();

			var timer = setInterval( row, 5 );
			//长横线
			function row(){
				count += 5;

				if( count == 1100 ){
					clearInterval( timer );
					ctx.lineWidth = 5;
					ctx.lineTo( 1090, 215 );
					ctx.stroke();
					oStudy.style.opacity = 1;
				}

				ctx.lineTo( count, 225 );
				ctx.stroke();
			}
		}

		line( canvas );
		
		for( var i = 1; i<canvas.length; i++ ){
			//闭包   其他5个画布
			( function ( i ){
				var num = 200 * i - 100;

				setTimeout( draw, num );

				function draw(){
					var ctx = canvas[i].getContext("2d");
					canvas[i].width = 200;
					canvas[i].height = 170;
					ctx.beginPath();
					ctx.moveTo( 100, 0 );
					ctx.lineWidth = 3;
					ctx.strokeStyle = "#a0ff94";

					var count = 0;
					var timer = setInterval( function(){
						count += 2;
						if ( count == 100) {
							clearInterval( timer );
							require ("skill.js").initIn( i );
						}
						ctx.lineTo( 100, count );
						ctx.stroke();
					}, 1 )

				}	

			})( i );

		}

		//标题
		oPro.style.right = "calc( 50% - 60px )";
		
	}
	function initOut( canvas ){
		
		for(var i = 0;i < canvas.length; i++ ){

			( function( i ){
				var ctx = canvas[i].getContext("2d");
				ctx.clearRect( 0, 0, canvas[i].width, canvas[i].height );
				
			})( i );

		}

		require("skill.js").initOut();

		oPro.style.right = " -200px";
		oStudy.style.opacity = 0;
	}

	exports.initIn = initIn;
	exports.initOut = initOut;
// <<<<<<< HEAD
})
// =======
// })
// >>>>>>> origin/master
