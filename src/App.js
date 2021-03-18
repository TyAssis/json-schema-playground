import Form from "@rjsf/core";
import Ajv from 'ajv';

function App() {
  const schema = {
    "cidade": {
      "type": "string",
      "enum": [],
    },
    "definitions": {
      "$ref": "#definitions/relacao-pais-cidade-estado",
    },
    "$id": "http://gupy.io/s3-schema-pais-cidade-estado",
  };
  const ajv = new Ajv();
  const a = ajv.getSchema("http://json-schema.org/draft-04/schema") || ajv.compile();
  console.log(a);
  return (
    <div className="App">
      {/*<Form schema={schema}*/}
      {/*    onChange={console.log("changed")}*/}
      {/*    onSubmit={console.log("submitted")}*/}
      {/*    onError={console.log("errors")}*/}
      {/*/>*/}
    </div>
  );
}

export default App;
