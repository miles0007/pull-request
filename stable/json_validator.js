'use strict'


const Ajv = require('ajv');


const ajv = new Ajv({allErrors: true}); // options can be passed, e.g. {allErrors: true}

const schema = {
  type: "object",
  properties: {
    foo: { type: "integer" },
    bar: { type: "string" },
  },
  required: ["foo"],
  additionalProperties: false,
};

const validate = ajv.compile(schema);

const data = {
    bar: 123,
    content: false,

}
const valid = validate(data);
if (!valid) {
    console.log(validate.errors);
} else {
    console.log('All datas are valid');
}