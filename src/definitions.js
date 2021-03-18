import csc from 'country-state-city';

const x = { "properties": {} };

const countries = csc.getAllCountries();
const countryArray = countries.map(country => ([
  country.name,
  country.isoCode,
]));
const countryEntries = Object.fromEntries(countryArray);
const countryNames = countryArray.map(cn => cn[0]);

const schema = {
  "properties": {
    "country": {
      "type": "string",
      "enum": countryNames
    },
    "state": {
      "type": "string",
    },
    "city": {
      "type": "string",
    },
    "definitions": {
        "IN_states": ['afasa', 'fassag']
    },
    "dependencies": {
      "oneOf": {
        "country": "IN",
        "state": "IN_STATES"
      }
    }
  },
};

const getStatesOfCountry = (countryCode) => {
  const statesOfCountry = csc.getStatesOfCountry(countryCode);
  const statesArray = statesOfCountry.map(states => ([
    states.name,
    states.isoCode,
  ]));
  const statesEntries = Object.fromEntries(statesArray);
  const statesNames = statesArray.map(sn => sn[0]);
  return statesNames;
}

const definitions = {};
countries.forEach(country => {
  const definitions = {
      ...definitions,
      [`country_${country.isoCode}_states`]: getStatesOfCountry(country.isoCode)
  }
})



const statesOfCountries = countries.map(countryEntry => ([
    [`country_${countryEntry.isoCode}_states`], getStatesOfCountry(countryEntry.isoCode),
]));