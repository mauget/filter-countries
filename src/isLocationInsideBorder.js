const pointInPolygon = require("point-in-polygon");

function isLocationInsideBorder(loc, pologon){
    return pointInPolygon( [loc.lat, loc.lon], pologon);
}
module.exports = isLocationInsideBorder;
