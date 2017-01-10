define(function () {
	var defaultHexValue = "#000000",
		patternValidHexValue = /^#[0-9A-F]{6}$/i,
		isValidHexValue;

	function SwatchColor (hexValue) {
		this.hexValue = hexValue;
	}

	SwatchColor.prototype.getHexValue = function () {
		return this.hexValue;
	};

	return SwatchColor;
});