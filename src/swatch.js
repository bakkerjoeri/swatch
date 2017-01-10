define(function (require) {
	SwatchColor = require("SwatchColor");

	var swatch = function (hexValue) {
		return new SwatchColor(hexValue);
	};

	/**
	* Create and return a SwatchColor instance initialized with a random random color.
	* 
	* @returns {SwatchColor}
	**/
	swatch.getRandomColor = function () {
		// Thank you @paul_irish for this solution. See https://www.paulirish.com/2009/random-hex-color-code-snippets/
		return new SwatchColor("#" + Math.floor(Math.random()*16777215).toString(16));
	};

	return swatch;
});