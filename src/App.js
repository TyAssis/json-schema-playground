import Form from "@rjsf/core";

import csc from 'country-state-city';
import definitions from './definitions';

function App() {
  const countries = csc.getAllCountries();
  const countryArray = countries.map(country => ([
        country.name,
        country.isoCode,
    ]));
  const countryEntries = Object.fromEntries(countryArray);
  const countryNames = countryArray.map(cn => cn[0]);

  const getCountryCode = (countryName) => countryEntries[countryName];

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
        "definitions": definitions,
    }
  };

  return (
    <div className="App">
      <Form schema={schema}
          onChange={(event) => {
              const code = getCountryCode(event.formData.country)
              console.log(code)
          }}
          onSubmit={console.log("submitted")}
          onError={console.log("errors")}
      />
    </div>
  );
}

export default App;
