define(function () {
	function SwatchColour (hexValue) {
		this.hexValue = hexValue;
	}

	SwatchColour.prototype.getHexValue = function () {
		return this.hexValue;
	};

	return SwatchColour;
});