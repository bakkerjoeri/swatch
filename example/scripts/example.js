require(["swatch"], function (swatch) {
	window.setInterval(function () {
		var newColor = swatch.getRandomColor().getHexValue();
		
		document.body.style.background = newColor;
		document.getElementsByClassName("swatch-color-value")[0].innerHTML = newColor;
	}, 1000);
});