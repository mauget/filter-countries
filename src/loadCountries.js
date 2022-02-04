const YAML = require('yamljs');

function loadCountries(){
    return YAML.load('countries.yaml');
}
module.exports = loadCountries;
