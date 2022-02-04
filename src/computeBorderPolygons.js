const computeBorderPolygons = (countries) => countries.map((v) => {
    const {name, limits} = v;
    const {minX, maxX, minY, maxY} = limits;

    const border = [
        [minY, minX],
        [minY, maxX],
        [maxY, maxX],
        [maxY, minX],
    ];
    return {name, border};
});
module.exports = computeBorderPolygons;
