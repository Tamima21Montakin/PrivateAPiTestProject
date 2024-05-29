import Ajv, { JSONSchemaType } from 'ajv';

const ajv = new Ajv();

interface MyJsonSchema {
    name: string;
    age: number;
    email?: string;
}

const schema: JSONSchemaType<MyJsonSchema> = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        age: { type: 'number' },
        email: { type: 'string', nullable: true }
    },
    required: ['name', 'age'],
    additionalProperties: false
};

const validate = ajv.compile(schema);

// const jsonString = `{
//     "name": "John Doe",
//     "age": 30,
//     "email": "john.doe@example.com"
// }`;

// try {
//     const jsonData = JSON.parse(jsonString);

//     if (validate(jsonData)) {
//         console.log('Valid JSON:', jsonData);
//     } else {
//         console.error('Invalid JSON structure:', validate.errors);
//     }
// } catch (error) {
//     console.error('Error parsing JSON:', error);
// }

describe('JSON validation', () => {
    it('should validate correct JSON data', () => {
        const jsonString = `{
            "name": "John Doe",
            "age": 30,
            "email": "john.doe@example.com"
        }`;

        const jsonData = JSON.parse(jsonString);

        expect(validate(jsonData)).toBe(true);
        expect(validate.errors).toBeNull();
        expect(jsonData).toEqual({
            name: "John Doe",
            age: 30,
            email: "john.doe@example.com"
        });
    });

    it('should invalidate incorrect JSON data', () => {
        const invalidJsonString = `{
            "name": "John Doe",
            "age": "30",
            "email": "john.doe@example.com"
        }`;

        const jsonData = JSON.parse(invalidJsonString);

        expect(validate(jsonData)).toBe(false);
        expect(validate.errors).not.toBeNull();
    });
});