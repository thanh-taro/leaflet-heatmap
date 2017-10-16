# Leaflet heatmap using TileLayer
Heatmap in Leaflet ([https://thanh-taro.github.io/leaflet-heatmap](https://thanh-taro.github.io/leaflet-heatmap)).

## Install
You need Leaflet >= 1.0.0 and include `dist/L.TileLayer.HeatMap.min.js`

## Quick start
```js
// map is your map instance
var options = {
    opacity: 0.5
};
var heatMap = L.heatMap('heatmap/tiles/{z}/{x}/{y}.png', options).addTo(map);
```

## Options
There are a few options that you can use

* **options.colors** - *Array* Colors map (from 0 to 255), default is rainbow.
* **options.altitudes** - *Array* Colors range, default is [0, 255]
* **options.opacity** - *Number* Opacity of heatmap, default is 1.

## Demo
You can find a demo here: [https://thanh-taro.github.io/leaflet-heatmap](https://thanh-taro.github.io/leaflet-heatmap)

## License
This is released under the MIT licence.
