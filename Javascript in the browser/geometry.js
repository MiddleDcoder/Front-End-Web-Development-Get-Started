define(['math'], function(math) {
    return {
        calculateCylinderVolume: function(radius, height) {
            return math.calculateArea(radius) * height;
        }
    }
}); 