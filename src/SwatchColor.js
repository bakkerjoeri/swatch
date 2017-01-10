define(function () {
	function SwatchColor (hexValue) {
		this.hexValue = hexValue;
	}

	SwatchColor.prototype.getHexValue = function () {
		return this.hexValue;
	};

	return SwatchColor;
});