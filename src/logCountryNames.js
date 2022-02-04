function logCountryNames(countries) {
    console.log('All country names:');
    countries.forEach((country) => {
        const {name} = country;
        console.log(`"${name}"`);
    });
    console.log();
}

module.exports = logCountryNames;
