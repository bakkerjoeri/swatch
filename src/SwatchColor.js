define(function () {
	var defaultHexValue = "#000000",
		patternValidHexValue = /^#[0-9A-F]{6}$/i,
		isValidHexValue;

	/**
	 * Construct a new SwatchColor.
	 * 
	 * @param	{string}	hexValue 	A valid HEX color value.
	 */
	function SwatchColor (hexValue) {
		this.setHexValue(hexValue);
	};

	/**
	 * @returns	{string}
	 */
	SwatchColor.prototype.getHexValue = function () {
		return this.hexValue;
	};

	/**
	 * @param	{string}	hexValue 	A valid HEX color value.
	 */
	SwatchColor.prototype.setHexValue = function (hexValue) {
		if (isValidHexValue(hexValue)) {
			this.hexValue = hexValue;
		} else if (!this.hexValue) {
			this.hexValue = defaultHexValue;
		}
	};

	/**
	 * Check if a given value is a string containing a valid HEX color value.
	 *
	 * @param	{string}	hexValue 	Any string to test the validity of.
	 */
	isValidHexValue = function (hexValue) {
		return typeof hexValue === "string" 
					&& patternValidHexValue.test(hexValue);
	};

	return SwatchColor;
});
