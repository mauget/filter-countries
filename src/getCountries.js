const YAML = require('yamljs');

const getCountries = () => YAML.load('countries.yaml');
module.exports = getCountries;
