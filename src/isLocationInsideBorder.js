const pointInPolygon = require("point-in-polygon");

const isLocationInsideBorder = (loc, polygon) => pointInPolygon([loc.lat, loc.lon], polygon);
module.exports = isLocationInsideBorder;
