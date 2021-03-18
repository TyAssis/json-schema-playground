import Form from "@rjsf/core";
import { useState } from 'react';

import csc from 'country-state-city';
// import definitions from './definitions';

function App() {
  const countries = csc.getAllCountries();
  const countryArray = countries.map(country => ([
        country.name,
        country.isoCode,
    ]));
  const countryEntries = Object.fromEntries(countryArray);
  const countryNames = countryArray.map(cn => cn[0]);

  const getCountryCode = (countryName) => countryEntries[countryName];

  let [schema, setSchema] = useState({
    "properties": {
        "country": {
            "type": "string",
            "enum": countryNames
        },
        "state": {
            "type": "string",
            "enum": ['tay', 'yan'],
        },
        "text": {
            "type": "string",
        }
    }
  });
  const [formData, setFormData] = useState({})


  return (
    <div className="App">
        {console.log('cargou!')}
      <Form
          formData={formData}
          schema={schema}
          onChange={(event) => {
              const code = getCountryCode(event.formData.country)
              console.log(code)
              console.log(formData);
              setFormData(event.formData)
              if (code === "AF") {
                  setSchema({
                      "properties": {
                          "country": {
                              "type": "string",
                              "enum": countryNames
                          },
                          "state": {
                              "type": "string",
                              "enum": ['joao', 'maria'],
                          },
                          "text": {
                              "type": "string",
                          }
                      }
                  })
              }
          }}
          onSubmit={console.log("submitted")}
          onError={console.log("errors")}
      />
    </div>
  );
}

export default App;
