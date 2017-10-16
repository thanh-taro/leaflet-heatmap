L.HeatMap = L.TileLayer.extend({
    options: {
        useCanvas: true,
        altitudes: [ 0, 255 ],
        opacity: 1,
        colors: [ {
            r: 0,
            g: 85,
            b: 255
        }, {
            r: 0,
            g: 88.66666666666671,
            b: 255
        }, {
            r: 0,
            g: 92.3333333333333,
            b: 255
        }, {
            r: 0,
            g: 96.00000000000003,
            b: 255
        }, {
            r: 0,
            g: 99.66666666666661,
            b: 255
        }, {
            r: 0,
            g: 103.33333333333333,
            b: 255
        }, {
            r: 0,
            g: 107.00000000000004,
            b: 255
        }, {
            r: 0,
            g: 110.66666666666664,
            b: 255
        }, {
            r: 0,
            g: 114.33333333333336,
            b: 255
        }, {
            r: 0,
            g: 117.99999999999994,
            b: 255
        }, {
            r: 0,
            g: 121.66666666666666,
            b: 255
        }, {
            r: 0,
            g: 125.33333333333337,
            b: 255
        }, {
            r: 0,
            g: 128.99999999999997,
            b: 255
        }, {
            r: 0,
            g: 132.66666666666669,
            b: 255
        }, {
            r: 0,
            g: 136.3333333333333,
            b: 255
        }, {
            r: 0,
            g: 139.99999999999997,
            b: 255
        }, {
            r: 0,
            g: 143.66666666666669,
            b: 255
        }, {
            r: 0,
            g: 147.3333333333333,
            b: 255
        }, {
            r: 0,
            g: 151,
            b: 255
        }, {
            r: 0,
            g: 154.6666666666666,
            b: 255
        }, {
            r: 0,
            g: 158.33333333333331,
            b: 255
        }, {
            r: 0,
            g: 162.00000000000003,
            b: 255
        }, {
            r: 0,
            g: 165.66666666666663,
            b: 255
        }, {
            r: 0,
            g: 169.33333333333331,
            b: 255
        }, {
            r: 0,
            g: 173.00000000000003,
            b: 255
        }, {
            r: 0,
            g: 176.66666666666663,
            b: 255
        }, {
            r: 0,
            g: 180.33333333333334,
            b: 255
        }, {
            r: 0,
            g: 183.99999999999994,
            b: 255
        }, {
            r: 0,
            g: 187.66666666666666,
            b: 255
        }, {
            r: 0,
            g: 191.3333333333334,
            b: 255
        }, {
            r: 0,
            g: 194.99999999999997,
            b: 255
        }, {
            r: 0,
            g: 198.66666666666669,
            b: 255
        }, {
            r: 0,
            g: 202.3333333333334,
            b: 255
        }, {
            r: 0,
            g: 206,
            b: 255
        }, {
            r: 0,
            g: 209.6666666666667,
            b: 255
        }, {
            r: 0,
            g: 213.33333333333331,
            b: 255
        }, {
            r: 0,
            g: 217.00000000000003,
            b: 255
        }, {
            r: 0,
            g: 220.66666666666674,
            b: 255
        }, {
            r: 0,
            g: 224.33333333333334,
            b: 255
        }, {
            r: 0,
            g: 228.00000000000003,
            b: 255
        }, {
            r: 0,
            g: 231.66666666666663,
            b: 255
        }, {
            r: 0,
            g: 235.33333333333334,
            b: 255
        }, {
            r: 0,
            g: 239.00000000000006,
            b: 255
        }, {
            r: 0,
            g: 242.66666666666666,
            b: 255
        }, {
            r: 0,
            g: 246.33333333333337,
            b: 255
        }, {
            r: 0,
            g: 249.99999999999997,
            b: 255
        }, {
            r: 0,
            g: 253.66666666666669,
            b: 255
        }, {
            r: 0,
            g: 255,
            b: 252.66666666666663
        }, {
            r: 0,
            g: 255,
            b: 249.00000000000003
        }, {
            r: 0,
            g: 255,
            b: 245.33333333333331
        }, {
            r: 0,
            g: 255,
            b: 241.6666666666667
        }, {
            r: 0,
            g: 255,
            b: 238
        }, {
            r: 0,
            g: 255,
            b: 234.3333333333333
        }, {
            r: 0,
            g: 255,
            b: 230.66666666666669
        }, {
            r: 0,
            g: 255,
            b: 227
        }, {
            r: 0,
            g: 255,
            b: 223.3333333333334
        }, {
            r: 0,
            g: 255,
            b: 219.66666666666669
        }, {
            r: 0,
            g: 255,
            b: 215.99999999999997
        }, {
            r: 0,
            g: 255,
            b: 212.33333333333337
        }, {
            r: 0,
            g: 255,
            b: 208.66666666666666
        }, {
            r: 0,
            g: 255,
            b: 205.00000000000006
        }, {
            r: 0,
            g: 255,
            b: 201.33333333333334
        }, {
            r: 0,
            g: 255,
            b: 197.66666666666663
        }, {
            r: 0,
            g: 255,
            b: 193.99999999999991
        }, {
            r: 0,
            g: 255,
            b: 190.33333333333331
        }, {
            r: 0,
            g: 255,
            b: 186.66666666666674
        }, {
            r: 0,
            g: 255,
            b: 183
        }, {
            r: 0,
            g: 255,
            b: 179.3333333333333
        }, {
            r: 0,
            g: 255,
            b: 175.66666666666669
        }, {
            r: 0,
            g: 255,
            b: 171.99999999999997
        }, {
            r: 0,
            g: 255,
            b: 168.3333333333333
        }, {
            r: 0,
            g: 255,
            b: 164.66666666666669
        }, {
            r: 0,
            g: 255,
            b: 160.99999999999997
        }, {
            r: 0,
            g: 255,
            b: 157.33333333333337
        }, {
            r: 0,
            g: 255,
            b: 153.66666666666666
        }, {
            r: 0,
            g: 255,
            b: 150.00000000000006
        }, {
            r: 0,
            g: 255,
            b: 146.33333333333334
        }, {
            r: 0,
            g: 255,
            b: 142.66666666666663
        }, {
            r: 0,
            g: 255,
            b: 138.99999999999994
        }, {
            r: 0,
            g: 255,
            b: 135.33333333333334
        }, {
            r: 0,
            g: 255,
            b: 131.66666666666674
        }, {
            r: 0,
            g: 255,
            b: 128.00000000000003
        }, {
            r: 0,
            g: 255,
            b: 124.33333333333331
        }, {
            r: 0,
            g: 255,
            b: 120.6666666666666
        }, {
            r: 0,
            g: 255,
            b: 117.00000000000001
        }, {
            r: 0,
            g: 255,
            b: 113.33333333333341
        }, {
            r: 0,
            g: 255,
            b: 109.6666666666667
        }, {
            r: 0,
            g: 255,
            b: 105.99999999999999
        }, {
            r: 0,
            g: 255,
            b: 102.33333333333327
        }, {
            r: 0,
            g: 255,
            b: 98.66666666666669
        }, {
            r: 0,
            g: 255,
            b: 94.99999999999996
        }, {
            r: 0,
            g: 255,
            b: 91.33333333333337
        }, {
            r: 0,
            g: 255,
            b: 87.66666666666666
        }, {
            r: 0,
            g: 255,
            b: 83.99999999999994
        }, {
            r: 0,
            g: 255,
            b: 80.33333333333323
        }, {
            r: 0,
            g: 255,
            b: 76.66666666666663
        }, {
            r: 0,
            g: 255,
            b: 73.00000000000004
        }, {
            r: 0,
            g: 255,
            b: 69.33333333333333
        }, {
            r: 0,
            g: 255,
            b: 65.66666666666661
        }, {
            r: 0,
            g: 255,
            b: 62.00000000000002
        }, {
            r: 0,
            g: 255,
            b: 58.33333333333343
        }, {
            r: 0,
            g: 255,
            b: 54.666666666666714
        }, {
            r: 0,
            g: 255,
            b: 51
        }, {
            r: 0,
            g: 255,
            b: 47.333333333333286
        }, {
            r: 0,
            g: 255,
            b: 43.66666666666669
        }, {
            r: 0,
            g: 255,
            b: 40.0000000000001
        }, {
            r: 0,
            g: 255,
            b: 36.333333333333385
        }, {
            r: 0,
            g: 255,
            b: 32.66666666666667
        }, {
            r: 0,
            g: 255,
            b: 29.000000000000018
        }, {
            r: 0,
            g: 255,
            b: 25.333333333333364
        }, {
            r: 0,
            g: 255,
            b: 21.66666666666665
        }, {
            r: 0,
            g: 255,
            b: 17.999999999999996
        }, {
            r: 0,
            g: 255,
            b: 14.333333333333343
        }, {
            r: 0,
            g: 255,
            b: 10.66666666666669
        }, {
            r: 0,
            g: 255,
            b: 6.999999999999975
        }, {
            r: 0,
            g: 255,
            b: 3.3333333333333215
        }, {
            r: .33333333333327175,
            g: 255,
            b: 0
        }, {
            r: 3.999999999999986,
            g: 255,
            b: 0
        }, {
            r: 7.6666666666667,
            g: 255,
            b: 0
        }, {
            r: 11.333333333333414,
            g: 255,
            b: 0
        }, {
            r: 15.000000000000007,
            g: 255,
            b: 0
        }, {
            r: 18.6666666666666,
            g: 255,
            b: 0
        }, {
            r: 22.333333333333314,
            g: 255,
            b: 0
        }, {
            r: 26.00000000000003,
            g: 255,
            b: 0
        }, {
            r: 29.666666666666742,
            g: 255,
            b: 0
        }, {
            r: 33.333333333333336,
            g: 255,
            b: 0
        }, {
            r: 37.00000000000005,
            g: 255,
            b: 0
        }, {
            r: 40.66666666666664,
            g: 255,
            b: 0
        }, {
            r: 44.33333333333336,
            g: 255,
            b: 0
        }, {
            r: 47.99999999999995,
            g: 255,
            b: 0
        }, {
            r: 51.666666666666664,
            g: 255,
            b: 0
        }, {
            r: 55.33333333333326,
            g: 255,
            b: 0
        }, {
            r: 58.99999999999997,
            g: 255,
            b: 0
        }, {
            r: 62.666666666666686,
            g: 255,
            b: 0
        }, {
            r: 66.3333333333334,
            g: 255,
            b: 0
        }, {
            r: 69.99999999999999,
            g: 255,
            b: 0
        }, {
            r: 73.66666666666659,
            g: 255,
            b: 0
        }, {
            r: 77.3333333333333,
            g: 255,
            b: 0
        }, {
            r: 81.00000000000001,
            g: 255,
            b: 0
        }, {
            r: 84.6666666666666,
            g: 255,
            b: 0
        }, {
            r: 88.33333333333344,
            g: 255,
            b: 0
        }, {
            r: 92.00000000000004,
            g: 255,
            b: 0
        }, {
            r: 95.66666666666663,
            g: 255,
            b: 0
        }, {
            r: 99.33333333333334,
            g: 255,
            b: 0
        }, {
            r: 103.00000000000006,
            g: 255,
            b: 0
        }, {
            r: 106.66666666666666,
            g: 255,
            b: 0
        }, {
            r: 110.33333333333324,
            g: 255,
            b: 0
        }, {
            r: 113.99999999999996,
            g: 255,
            b: 0
        }, {
            r: 117.66666666666667,
            g: 255,
            b: 0
        }, {
            r: 121.33333333333339,
            g: 255,
            b: 0
        }, {
            r: 124.99999999999999,
            g: 255,
            b: 0
        }, {
            r: 128.66666666666669,
            g: 255,
            b: 0
        }, {
            r: 132.3333333333333,
            g: 255,
            b: 0
        }, {
            r: 136,
            g: 255,
            b: 0
        }, {
            r: 139.6666666666666,
            g: 255,
            b: 0
        }, {
            r: 143.33333333333331,
            g: 255,
            b: 0
        }, {
            r: 147.00000000000003,
            g: 255,
            b: 0
        }, {
            r: 150.6666666666667,
            g: 255,
            b: 0
        }, {
            r: 154.33333333333331,
            g: 255,
            b: 0
        }, {
            r: 158.00000000000003,
            g: 255,
            b: 0
        }, {
            r: 161.66666666666663,
            g: 255,
            b: 0
        }, {
            r: 165.33333333333334,
            g: 255,
            b: 0
        }, {
            r: 168.99999999999994,
            g: 255,
            b: 0
        }, {
            r: 172.66666666666666,
            g: 255,
            b: 0
        }, {
            r: 176.33333333333337,
            g: 255,
            b: 0
        }, {
            r: 180.00000000000009,
            g: 255,
            b: 0
        }, {
            r: 183.66666666666666,
            g: 255,
            b: 0
        }, {
            r: 187.3333333333334,
            g: 255,
            b: 0
        }, {
            r: 190.99999999999997,
            g: 255,
            b: 0
        }, {
            r: 194.6666666666667,
            g: 255,
            b: 0
        }, {
            r: 198.3333333333333,
            g: 255,
            b: 0
        }, {
            r: 202.00000000000003,
            g: 255,
            b: 0
        }, {
            r: 205.66666666666674,
            g: 255,
            b: 0
        }, {
            r: 209.33333333333331,
            g: 255,
            b: 0
        }, {
            r: 213.00000000000003,
            g: 255,
            b: 0
        }, {
            r: 216.66666666666663,
            g: 255,
            b: 0
        }, {
            r: 220.33333333333334,
            g: 255,
            b: 0
        }, {
            r: 223.99999999999994,
            g: 255,
            b: 0
        }, {
            r: 227.66666666666666,
            g: 255,
            b: 0
        }, {
            r: 231.33333333333326,
            g: 255,
            b: 0
        }, {
            r: 235.00000000000006,
            g: 255,
            b: 0
        }, {
            r: 238.66666666666666,
            g: 255,
            b: 0
        }, {
            r: 242.33333333333337,
            g: 255,
            b: 0
        }, {
            r: 245.99999999999997,
            g: 255,
            b: 0
        }, {
            r: 249.66666666666669,
            g: 255,
            b: 0
        }, {
            r: 253.3333333333333,
            g: 255,
            b: 0
        }, {
            r: 255,
            g: 253,
            b: 0
        }, {
            r: 255,
            g: 249.3333333333334,
            b: 0
        }, {
            r: 255,
            g: 245.6666666666666,
            b: 0
        }, {
            r: 255,
            g: 242,
            b: 0
        }, {
            r: 255,
            g: 238.3333333333333,
            b: 0
        }, {
            r: 255,
            g: 234.66666666666669,
            b: 0
        }, {
            r: 255,
            g: 230.99999999999997,
            b: 0
        }, {
            r: 255,
            g: 227.33333333333337,
            b: 0
        }, {
            r: 255,
            g: 223.66666666666666,
            b: 0
        }, {
            r: 255,
            g: 220.00000000000006,
            b: 0
        }, {
            r: 255,
            g: 216.33333333333337,
            b: 0
        }, {
            r: 255,
            g: 212.66666666666666,
            b: 0
        }, {
            r: 255,
            g: 209.00000000000006,
            b: 0
        }, {
            r: 255,
            g: 205.33333333333334,
            b: 0
        }, {
            r: 255,
            g: 201.66666666666674,
            b: 0
        }, {
            r: 255,
            g: 198.00000000000003,
            b: 0
        }, {
            r: 255,
            g: 194.33333333333343,
            b: 0
        }, {
            r: 255,
            g: 190.6666666666667,
            b: 0
        }, {
            r: 255,
            g: 187,
            b: 0
        }, {
            r: 255,
            g: 183.3333333333333,
            b: 0
        }, {
            r: 255,
            g: 179.66666666666669,
            b: 0
        }, {
            r: 255,
            g: 175.99999999999997,
            b: 0
        }, {
            r: 255,
            g: 172.33333333333337,
            b: 0
        }, {
            r: 255,
            g: 168.66666666666666,
            b: 0
        }, {
            r: 255,
            g: 165.00000000000006,
            b: 0
        }, {
            r: 255,
            g: 161.33333333333334,
            b: 0
        }, {
            r: 255,
            g: 157.66666666666666,
            b: 0
        }, {
            r: 255,
            g: 153.99999999999994,
            b: 0
        }, {
            r: 255,
            g: 150.33333333333334,
            b: 0
        }, {
            r: 255,
            g: 146.66666666666663,
            b: 0
        }, {
            r: 255,
            g: 143.00000000000003,
            b: 0
        }, {
            r: 255,
            g: 139.33333333333331,
            b: 0
        }, {
            r: 255,
            g: 135.6666666666667,
            b: 0
        }, {
            r: 255,
            g: 132,
            b: 0
        }, {
            r: 255,
            g: 128.33333333333331,
            b: 0
        }, {
            r: 255,
            g: 124.66666666666659,
            b: 0
        }, {
            r: 255,
            g: 121,
            b: 0
        }, {
            r: 255,
            g: 117.33333333333329,
            b: 0
        }, {
            r: 255,
            g: 113.66666666666669,
            b: 0
        }, {
            r: 255,
            g: 109.99999999999997,
            b: 0
        }, {
            r: 255,
            g: 106.33333333333339,
            b: 0
        }, {
            r: 255,
            g: 102.66666666666667,
            b: 0
        }, {
            r: 255,
            g: 98.99999999999994,
            b: 0
        }, {
            r: 255,
            g: 95.33333333333336,
            b: 0
        }, {
            r: 255,
            g: 91.66666666666664,
            b: 0
        }, {
            r: 255,
            g: 88.00000000000006,
            b: 0
        }, {
            r: 255,
            g: 84.33333333333333,
            b: 0
        }, {
            r: 255,
            g: 80.66666666666674,
            b: 0
        }, {
            r: 255,
            g: 77.00000000000003,
            b: 0
        }, {
            r: 255,
            g: 73.33333333333344,
            b: 0
        }, {
            r: 255,
            g: 69.6666666666666,
            b: 0
        }, {
            r: 255,
            g: 66,
            b: 0
        }, {
            r: 255,
            g: 62.33333333333329,
            b: 0
        }, {
            r: 255,
            g: 58.6666666666667,
            b: 0
        }, {
            r: 255,
            g: 54.999999999999986,
            b: 0
        }, {
            r: 255,
            g: 51.33333333333339,
            b: 0
        }, {
            r: 255,
            g: 47.66666666666668,
            b: 0
        }, {
            r: 255,
            g: 44.000000000000085,
            b: 0
        }, {
            r: 255,
            g: 40.33333333333325,
            b: 0
        }, {
            r: 255,
            g: 36.66666666666666,
            b: 0
        }, {
            r: 255,
            g: 32.99999999999994,
            b: 0
        }, {
            r: 255,
            g: 29.33333333333335,
            b: 0
        }, {
            r: 255,
            g: 25.666666666666636,
            b: 0
        }, {
            r: 255,
            g: 22.000000000000043,
            b: 0
        }, {
            r: 255,
            g: 18.33333333333333,
            b: 0
        }, {
            r: 255,
            g: 14.666666666666735,
            b: 0
        }, {
            r: 255,
            g: 10.9999999999999,
            b: 0
        }, {
            r: 255,
            g: 7.333333333333307,
            b: 0
        }, {
            r: 255,
            g: 3.666666666666714,
            b: 0
        }, {
            r: 255,
            g: 0,
            b: 0
        } ]
    },
    initialize: function(url, options) {
        options = L.extend({}, this.options, options);
        L.TileLayer.prototype.initialize.call(this, url, options);
        if (options.colors) {
            this._colors = options.colors;
        }
        if (options.altitudes) {
            this._altitudes = options.altitudes;
        }
        if (options.useCanvas) {
            this._useCanvas = true;
        }
        this.on("tileload", this._onLoadCallback, this);
    },
    setAltitudes: function(altitudes) {
        this._altitudes = altitudes;
        var tiles = this._tiles;
        var data = this._data;
        var colors = this._colors;
        var altitudes = this._altitudes;
        var useCanvas = this._useCanvas;
        var tile, element, width, height, originData;
        for (id in tiles) {
            tile = tiles[id];
            element = tile.el;
            if (!element.getAttribute("data-height-map-scaled")) {
                continue;
            }
            if (!data[id]) {
                continue;
            }
            originData = new Uint8ClampedArray(data[id]);
            width = parseInt(element.getAttribute("data-height-map-width"));
            height = parseInt(element.getAttribute("data-height-map-height"));
            if (useCanvas) {
                var canvasDOM = this._reScaleData(originData, width, height, colors, altitudes);
                var context = canvasDOM.getContext("2d");
                var imageData = context.getImageData(0, 0, width, height);
                var elementContext = element.getContext("2d");
                var elementImageData = elementContext.createImageData(width, height);
                elementImageData.data.set(imageData.data);
                elementContext.putImageData(elementImageData, 0, 0);
            } else {
                element.src = this._reScaleData(originData, width, height, colors, altitudes).toDataURL();
            }
        }
    },
    setColors: function(colors) {
        this._colors = colors;
        this.redraw();
    },
    useCanvas: function(use) {
        this._useCanvas = use;
        this.redraw();
    },
    _onLoadCallback: function(e) {
        var tile = e.tile;
        var coords = e.coords;
        var colors = this._colors;
        var altitudes = this._altitudes;
        var data = this._data = this._data || {};
        var id = this._tileCoordsToKey(coords);
        var useCanvas = this._useCanvas;
        if (tile.getAttribute("data-height-map-scaled")) {
            return;
        }
        this._scaleTile(tile, colors, altitudes, function(target, canvasDOM, originData, width, height) {
            var src = target.src;
            if (useCanvas) {
                canvasDOM.className = target.className;
                canvasDOM.style.transform = target.style.transform;
                target.parentNode.appendChild(canvasDOM);
                L.DomUtil.remove(target);
                target = this._tiles[id].el = canvasDOM;
            } else {
                target.src = canvasDOM.toDataURL();
            }
            target.setAttribute("data-height-map-id", id);
            target.setAttribute("data-height-map-src", src);
            target.setAttribute("data-height-map-width", width);
            target.setAttribute("data-height-map-height", height);
            target.setAttribute("data-height-map-scaled", true);
            data[id] = originData;
        }.bind(this));
    },
    _scale: function(data, width, height, colors, altitudes) {
        var range = altitudes[1] - altitudes[0];
        for (var i = 0, n = width * height * 4, d = data, color; i < n; i += 4) {
            if (d[i + 3] === 0) {
                continue;
            }
            if (d[i] < altitudes[0] || d[i] > altitudes[1] || range === 0) {
                d[i + 3] = 0;
                continue;
            }
            color = colors[Math.round((d[i] - altitudes[0]) * 255 / range)];
            d[i] = color.r;
            d[i + 1] = color.g;
            d[i + 2] = color.b;
            d[i + 3] = 255;
        }
    },
    _scaleTile: function(tile, colors, altitudes, callback) {
        var src = (" " + tile.src).slice(1);
        var imageDOM = new Image();
        var self = this;
        imageDOM.onload = function() {
            var width = this.width;
            var height = this.height;
            var canvasDOM = L.DomUtil.create("canvas");
            canvasDOM.width = width;
            canvasDOM.height = height;
            var context = canvasDOM.getContext("2d");
            context.clearRect(0, 0, width, height);
            context.drawImage(this, 0, 0, width, height);
            var imageData = context.getImageData(0, 0, width, height);
            var data = imageData.data;
            var originData = new Uint8ClampedArray(data);
            self._scale(data, width, height, colors, altitudes);
            context.putImageData(imageData, 0, 0);
            return callback(tile, canvasDOM, originData, width, height);
        };
        imageDOM.src = src;
    },
    _reScaleData: function(data, width, height, colors, altitudes) {
        this._scale(data, width, height, colors, altitudes);
        var canvasDOM = L.DomUtil.create("canvas");
        canvasDOM.width = width;
        canvasDOM.height = height;
        var context = canvasDOM.getContext("2d");
        var imageData = context.createImageData(width, height);
        imageData.data.set(data);
        context.putImageData(imageData, 0, 0);
        return canvasDOM;
    }
});

L.heatMap = function(url, options) {
    return new L.HeatMap(url, options);
};