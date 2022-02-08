const loadCountries = require('./src/getCountries');
const computeBorderPolygons = require('./src/computeBorderPolygons');
const isLocationInsideBorder = require('./src/isLocationInsideBorder');
const logCountryNames = require("./src/logCountryNames");


const locations = [
    {lat: 40, lon: -100},
    {lat: 0, lon: 0},
    {lat: 37.05, lon: -116.04},
    {lat: 37.05, lon: -116.04},
    {lat: 37.05, lon: -116.04},
    {lat: 35.6, lon: -78.8},
    {lat: 39.05, lon: -100.01}
];

// Entry point
(() => {
    const countriesWithCorners = loadCountries();
    let hits; //new Set([]);

    console.log('Test locations:', locations);
    logCountryNames(countriesWithCorners);

    const countriesWithBorders = computeBorderPolygons(countriesWithCorners);

    // Collect names of countries intersected by one or more locations
    hits = new Set(locations.map((location) =>
        countriesWithBorders.filter((country) =>
            isLocationInsideBorder(location, country.border)
        )
    )
        .filter((item) => item?.length > 0)
        .map((item) => item[0].name));

    console.log('Hit country names:', hits);
})();

