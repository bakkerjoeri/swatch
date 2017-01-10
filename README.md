# swatch

## Construct

### HEX color
```
swatch("#000000");
```

To create a new color, call `swatch(string)` with a HEX color value.

### Random color
```
swatch.getRandomColor();
```

To create a new color with an entirely random color value, call `swatch.getRandomColor();`.

## Get & set

### Get HEX value
```
var myColor = swatch("#000000");
myColor.getHexValue(); // returns "#000000"
```

To get a string containing HEX value of a color instance, call `getHexValue()`.