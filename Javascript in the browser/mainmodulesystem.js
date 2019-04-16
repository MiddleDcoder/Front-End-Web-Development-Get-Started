require(['graphics', 'geometry'], function(graphics, geometry) {
    var cylinderVol = geometry.calculateCynlinderVolume(35, 6);
    var circle = graphics.createCircle(100, 100, 22);
    console.log(cylinderVol);
    console.log(circle);
});