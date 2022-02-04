const loadCountries = require('./src/loadCountries');
const computeBorderPolygons = require('./src/computeBorderPolygons');
const islocationInsideBorder = require('./src/isLocationInsideBorder');

// Entry point
(() => {
    const countriesWithCorners = loadCountries();
    const countriesWithBorders = computeBorderPolygons(countriesWithCorners);

    const locations = [
        {lat: 37.05, lon: -116.04},
        {lat: 35.6, lon: -78.8},
        {lat: 39.05, lon: -100.01}
    ];

    locations.forEach((location) => {
        countriesWithBorders.forEach((country) => {
            const {name, border} = country;
            if (islocationInsideBorder(location, border)) {
                console.log(`"${name}" contains burst`, location);
            }
        });
    });
})();
