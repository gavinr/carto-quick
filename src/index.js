export default {
	getStyle(colorArray, baseStyle) {
    var retStyle = Object.assign({}, baseStyle);
    if (retStyle && retStyle.hasOwnProperty('layers')) {

      if (colorArray.length > 0) {
        // do background
        const backgroundLayers = retStyle.layers.filter((layer) => {
          if (layer.id.indexOf('background') > -1 ||
            layer.id.indexOf('Water area') > -1 ||
            layer.id.indexOf('Marine area') > -1) {
            return true;
          }
          return false;
        });

        backgroundLayers.forEach((backgroundLayer) => {
          if (backgroundLayer.paint.hasOwnProperty('background-color')) {
            backgroundLayer.paint['background-color'] = `#${colorArray[0]}`;
          }
          if (backgroundLayer.paint.hasOwnProperty('fill-color')) {
            backgroundLayer.paint['fill-color'] = `#${colorArray[0]}`;
          }
        });
      }

      if (colorArray.length > 1) {
        // do land
        const landLayers = retStyle.layers.filter((layer) => {
          if (layer.id === 'Land') {
            return true;
          }
          return false;
        });

        landLayers.forEach((landLayer) => {
          if (landLayer.paint.hasOwnProperty('fill-color')) {
            landLayer.paint['fill-color'] = `#${colorArray[1]}`;
          }
        });
      }

      if (colorArray.length > 2) {
        // do other
        const otherLayers = retStyle.layers.filter((layer) => {
          if (layer.id.indexOf('Building/General') > -1 || layer.id.indexOf('Railroad/2') > -1 || layer.id.indexOf('Railroad/1') > -1 || layer.id.indexOf('Urban area') > -1) {
            return true;
          }
          return false;
        });

        otherLayers.forEach((otherLayer) => {
          if (otherLayer.paint.hasOwnProperty('background-color')) {
            otherLayer.paint['background-color'] = `#${colorArray[2]}`;
          }
          if (otherLayer.paint.hasOwnProperty('fill-color')) {
            otherLayer.paint['fill-color'] = `#${colorArray[2]}`;
          }
        });
      }

    }
    return retStyle;
  }
};
