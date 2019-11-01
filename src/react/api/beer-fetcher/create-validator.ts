import Ajv from 'ajv';

export type IValidator = <T>(payload: any) => T;

const createValidator: (schema: any) => IValidator = (schema: any) => <T>(payload: any): T  => {
  const ajv = new Ajv();
  const validateFn = ajv.compile(schema);
  const valid = validateFn(payload);

  if (!valid) {
    console.error(validateFn.errors);
    throw new Error('API error: could not validate response');
  }
  return payload as T;
}

export default createValidator;
