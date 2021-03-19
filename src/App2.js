import Form from "@rjsf/core";
import { useState, useEffect } from 'react';

import csc from 'country-state-city';
// import definitions from './definitions';

function App() {
    const [schema, setSchema] = useState({});
    const [countryEntries, setCountryEntries] = useState([]);
    const [statesEntries, setStateEntries] = useState([])

    useEffect(() => {
        const initialSchema = {
            "properties": {
                "country": {
                    "type": "string",
                },
                "state": {
                    "type": "string",
                },
                "city": {
                    "type": "string",
                },
                "text": {
                    "type": "string",
                }
            },
            "additionalProperties": {
                "isCountry": "country",
                "isState": "state",
                "isCity": "city",
            }
        };

        const countryField = initialSchema.additionalProperties['isCountry'];
        if (countryField) {
            const countries = csc.getAllCountries();
            const countryArray = countries.map(country => ([
                country.name,
                country.isoCode,
            ]));
            const countryNames = countryArray.map(cn => cn[0]);
            setCountryEntries(Object.fromEntries(countryArray));

            setSchema({
                ...initialSchema,
                properties: {
                    ...initialSchema.properties,
                    [countryField]: {
                        ...initialSchema.properties[countryField],
                        enum: countryNames,
                    }
                }
            })
        }
    }, [])

    const [formData, setFormData] = useState({})

    const getCountryCode = (countryName) => countryEntries[countryName];
    const getStateCode = (stateName) => statesEntries[stateName];

    const updateStateField = (countryCode, stateCode) => {
        const stateField = schema.additionalProperties['isState'];
        const cityField = schema.additionalProperties['isCity'];

        let schemaStates;
        if (stateField && countryCode) {
            const states = csc.getStatesOfCountry(countryCode);
            const stateArray = states.map(state => ([
                state.name,
                state.isoCode,
            ]));
            const stateNames = stateArray.map(st => st[0]);
            setStateEntries(Object.fromEntries(stateArray));
            schemaStates = {
                [stateField]: {
                    ...schema.properties[stateField],
                    enum: stateNames,
                }
            };
        }

        let schemaCities;
        console.log(cityField, stateCode);
        if (cityField && countryCode && stateCode) {
            const cities = csc.getCitiesOfState(countryCode, stateCode);
            const cityNames = cities.map(city => city.name);
            console.log(cityNames);
            schemaCities = {
                [cityField]: {
                    ...schema.properties[cityField],
                    enum: cityNames,
                },
            }
        }

        setSchema({
            ...schema,
            properties: {
                ...schema.properties,
                ...schemaStates,
                ...schemaCities,
            }
        })
    }

    return (
        <div className="App">
            <Form
                formData={formData}
                schema={schema}
                onChange={(event) => {
                    console.log(event);
                    const countryCode = getCountryCode(event.formData.country)
                    const stateCode = getStateCode(event.formData.state)
                    setFormData(event.formData)
                    updateStateField(countryCode, stateCode)
                }}
                onSubmit={console.log("submitted")}
                onError={console.log("errors")}
            />
        </div>
    );
}

export default App;
