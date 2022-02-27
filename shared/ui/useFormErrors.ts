import { useState } from 'react';

export const useFormErrors = <K>(getValidator: () => any) => {
  const [errors, setErrors] = useState<any>({});
  const validateValue = (key: K) => {
    const _errors = { ...errors };
    const validator = getValidator();
    delete _errors[key];
    if (validator.validations[key]) {
      validator.validations[key]();
      setErrors({ ..._errors, ...validator.getErrors() });
    }
  };

  return {
    validateValue,
    setErrors,
    errors,
  };
};
