define(function(require,exports,module){
	function hash(aSection){
		var firstHash=window.location.hash.substring(1);
		var wrap=document.getElementById("container");
		for(var i=0;i<aSection.length;i++){
			if(firstHash==aSection[i].dataset.hash){
				switch(firstHash){
					case "message":
						require("pageOne.js").initIn();
					break;
					case "skill":
					// require("student.js").init(aSection[i]);
					break;
					// case "job":
					// require("target.js").init(aSection[i]);
					// break;
					// case "project":
					// require("target.js").init(aSection[i]);
					// break;
					// case "thanks":
					// require("target.js").init(aSection[i]);
					// break;
				}
			}
		}
		require("wheel.js").wheel(wrap);
	}
	exports.hash=hash;
})
