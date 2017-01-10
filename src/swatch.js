define(function (require) {
	SwatchColour = require("SwatchColour");

	var swatch = function (hexValue) {
		return new SwatchColour(hexValue);
	};

	swatch.getRandomColor = function () {
		return new SwatchColour("#" + Math.floor(Math.random()*16777215).toString(16));
	};

	return swatch;
});