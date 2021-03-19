import Form from "@rjsf/core";
import { useState, useEffect } from 'react';

import definitions from './definitions.js';

function App() {
    const [schema, setSchema] = useState({});
    useEffect(() => {
        const initialSchema = {
            "properties": {
                "country": {
                    "type": "string",
                    "enum": ["Brasil", "Argentina", "EUA"],
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
            setSchema( {
                ...initialSchema,
                ...definitions,
            });
        }
    }, [])

    const [formData, setFormData] = useState({})


    return (
        <>
        {schema && (
            <div className="App">
                <Form
                    formData={formData}
                    schema={schema}
                    onChange={(event) => {
                        console.log(event);
                        setFormData(event.formData)
                    }}
                    onSubmit={console.log("submitted")}
                    onError={console.log("errors")}
                />
            </div>
        )}
        </>
    );
}

export default App;
