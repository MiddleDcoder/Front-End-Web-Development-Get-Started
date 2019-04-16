define(['math'], function(math) {
    return {
        createCircle: function(x, y, radius){
            var area = math.calculateArea(radius);
            return { x: x, y: y, area: area}
        }
    }
});