var args = arguments[0] || {};

var LocalData = "Damn it!";

$.btnMagic.addEventListener("click", function(e){
	var title = $.localWebView.evalJS("document.title");
	alert(title);
});
